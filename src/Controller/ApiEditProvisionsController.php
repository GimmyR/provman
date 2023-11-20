<?php

namespace App\Controller;

use App\Entity\Provision;
use App\Entity\State;
use App\Repository\ProvisionRepository;
use App\Repository\StateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ApiEditProvisionsController extends AbstractController
{
    #[Route('/api/edit-provisions', name: 'api_edit_provisions')]
    public function index(Request $request, EntityManagerInterface $entityManager, ProvisionRepository $provRep, Filesystem $filesystem): JsonResponse
    {
        $provisions = $this->editProvisions($request, $entityManager, $provRep, $filesystem);
        
        return $this->json([
            "provisions" => $provisions
        ]);
    }

    private function editProvisions(Request $request, EntityManagerInterface $entityManager, ProvisionRepository $provRep, Filesystem $filesystem): array {

        $provisions = json_decode($request->getContent(), true);
        $states = $entityManager->getRepository(State::class)->findAll();

        $provisions = $this->removeProvisions($states, $provisions, $entityManager, $provRep, $filesystem);
        $this->saveProvisions($states, $provisions, $entityManager, $provRep, $filesystem);

        return $this->reorderProvisions($states, $provRep);

    }

    private function removeProvisions(array $states, array $provisions, EntityManagerInterface $entityManager, ProvisionRepository $provRep, Filesystem $filesystem): array {

        for($i = 0; $i < count($states); $i++) {

            for($j = 0; $j < count($provisions[$i]); $j++) {

                if(isset($provisions[$i][$j]["remove"]) && $provisions[$i][$j]["remove"]) {
                    $provision = $provRep->find($provisions[$i][$j]["id"]);
                    $filesystem->remove('./provisions/' .$provision->getImage());
                    $entityManager->remove($provision);
                    $entityManager->flush();
                    array_splice($provisions[$i], $j, 1);
                    break;
                }

            }

        } return $provisions;

    }

    private function saveProvisions(array $states, array $provisions, EntityManagerInterface $entityManager, ProvisionRepository $provRep, Filesystem $filesystem): void {

        for($i = 0; $i < count($states); $i++) {

            for($j = 0; $j < count($provisions[$i]); $j++) {

                $provision = null;

                if(isset($provisions[$i][$j]["new"]))
                    $provision = new Provision();

                else $provision = $provRep->find($provisions[$i][$j]["id"]);

                $provision->setState($states[$i]);
                $provision->setPlace($j + 1);
                $provision->setName($provisions[$i][$j]["name"]);
                $image = $provisions[$i][$j]["image"];

                if($image != null && $provision->getImage() != $image)
                    $this->setImage($provision, $image, $filesystem);

                if(isset($provisions[$i][$j]["new"]))
                    $entityManager->persist($provision);

                $entityManager->flush();

            }

        } 

    }

    private function setImage(Provision $provision, string $image, Filesystem $filesystem): void {

        $directory = './provisions/';
        $imagePath = $directory . $provision->getImage();
        if($filesystem->exists($imagePath))
            $filesystem->remove($imagePath);
        $filename = $this->generateFilename(). '.' .$this->getExtension($image);
        file_put_contents($directory . $filename, file_get_contents($image));
        $provision->setImage($filename);

    }

    private function generateFilename(): string {

        return bin2hex(random_bytes(5));

    }

    private function getExtension(string $base64): string {

        $tab1 = explode(";", $base64);
        $tab2 = explode("/", $tab1[0]);

        return $tab2[1];

    }

    private function reorderProvisions(array $states, ProvisionRepository $provRep): array {

        $result = [];

        foreach($states as $state) {

            $result[] = $provRep->findByStateAssociative($state->getId());

        } return $result;

    }
}
