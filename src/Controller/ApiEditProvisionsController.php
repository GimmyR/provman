<?php

namespace App\Controller;

use App\Entity\Provision;
use App\Entity\State;
use App\Repository\ProvisionRepository;
use App\Repository\StateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ApiEditProvisionsController extends AbstractController
{
    #[Route('/api/edit-provisions', name: 'api_edit_provisions')]
    public function index(Request $request, EntityManagerInterface $entityManager, ProvisionRepository $provRep): JsonResponse
    {
        $provisions = $this->editProvisions($request, $entityManager, $provRep);
        
        return $this->json([
            "provisions" => $provisions
        ]);
    }

    private function editProvisions(Request $request, EntityManagerInterface $entityManager, ProvisionRepository $provRep): array {

        $provisions = json_decode($request->getContent(), true);
        $states = $entityManager->getRepository(State::class)->findAll();
        $provisions = $this->removeProvisions($states, $provisions, $entityManager, $provRep);

        for($i = 0; $i < count($states); $i++) {

            for($j = 0; $j < count($provisions[$i]); $j++) {

                $provision = null;

                if(isset($provisions[$i][$j]["new"]))
                    $provision = new Provision();

                else $provision = $provRep->find($provisions[$i][$j]["id"]);

                $provision->setState($states[$i]);
                $provision->setPlace($j + 1);
                $provision->setName($provisions[$i][$j]["name"]);
                $provision->setImage($provisions[$i][$j]["image"]);

                if(isset($provisions[$i][$j]["new"]))
                    $entityManager->persist($provision);

                $entityManager->flush();

            }

        } return $this->reorderProvisions($states, $provRep);

    }

    private function removeProvisions(array $states, array $provisions, EntityManagerInterface $entityManager, ProvisionRepository $provRep): array {

        for($i = 0; $i < count($states); $i++) {

            for($j = 0; $j < count($provisions[$i]); $j++) {

                if(isset($provisions[$i][$j]["remove"]) && $provisions[$i][$j]["remove"]) {
                    $provision = $provRep->find($provisions[$i][$j]["id"]);
                    $entityManager->remove($provision);
                    $entityManager->flush();
                    array_splice($provisions[$i], $j, 1);
                    break;
                }

            }

        } return $provisions;

    }

    private function reorderProvisions(array $states, ProvisionRepository $provRep): array {

        $result = [];

        foreach($states as $state) {

            $result[] = $provRep->findByStateAssociative($state->getId());

        } return $result;

    }
}
