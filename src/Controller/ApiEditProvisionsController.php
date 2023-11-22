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
                    $image = $provision->getImage();
                    $entityManager->remove($provision);
                    $entityManager->flush();
                    $prov = $provRep->findOneBy([ 'image' => $image ]);
                    if($prov == null && $image != null)
                        $filesystem->remove('./provisions/' .$image);
                    array_splice($provisions[$i], $j, 1);
                    break;
                }

            }

        } return $provisions;

    }

    private function saveProvisions(array $states, array $provisions, EntityManagerInterface $entityManager, ProvisionRepository $provRep, Filesystem $filesystem): void {

        for($i = 0; $i < count($states); $i++) {

            $place = 1;

            for($j = 0; $j < count($provisions[$i]); $j++) {

                if(isset($provisions[$i][$j]["new"]))
                    $place = $this->newProvisions($provisions, $i, $j, $states, $filesystem, $entityManager);

                else {
                    
                    $provision = $provRep->find($provisions[$i][$j]["id"]);
                    $image = $provisions[$i][$j]["image"];

                    if($image != null && $provision->getImage() != $image)
                        $this->setImage($provision, $image, $filesystem);

                    $provision->setState($states[$i]);
                    $provision->setPlace($j + $place);
                    $provision->setName($provisions[$i][$j]["name"]);
                    $entityManager->flush();

                }

            }

        } 

    }

    private function newProvisions(array $provisions, int $i, int $j, array $states, Filesystem $filesystem, EntityManagerInterface $entityManager): int {

        $filename = null;
        $image = $provisions[$i][$j]["image"];
        
        for($k = 1; $k <= $provisions[$i][$j]["quantity"]; $k++) {
        
            $provision = new Provision();

            if($filename == null && $image != null)
                $this->setImage($provision, $image, $filesystem);
            else if($filename != null) $provision->setImage($filename);

            $provision->setState($states[$i]);
            $provision->setPlace($j + $k);
            $provision->setName($provisions[$i][$j]["name"]);
            $entityManager->persist($provision);
            $entityManager->flush();

        } return $provisions[$i][$j]["quantity"];

    }

    private function setImage(Provision $provision, string $image, Filesystem $filesystem): string {

        $directory = './provisions/';

        if($provision->getImage() != null) {
            $imagePath = $directory . $provision->getImage();
            if($filesystem->exists($imagePath))
                $filesystem->remove($imagePath);
        }

        $filename = $this->generateFilename(). '.' .$this->getExtension($image);
        file_put_contents($directory . $filename, file_get_contents($image));
        $provision->setImage($filename);

        return $filename;

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
