<?php

namespace App\Controller;

use App\Entity\State;
use App\Entity\User;
use App\Repository\ProvisionRepository;
use App\Repository\StateRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(#[CurrentUser] User $user, StateRepository $stateRep, ProvisionRepository $provisionRep): Response
    {
        $states = $stateRep->findAllAssociative();
        
        return $this->render('home.html.twig', [
            'username' => $user->getName(),
            'states' => $states,
            'provisions' => $this->reorderProvisions($states, $provisionRep)
        ]);
    }

    private function reorderProvisions(array $states, ProvisionRepository $provisionRep): array {

        $result = [];

        foreach($states as $state) {

            $result[] = $provisionRep->findByStateAssociative($state["id"]);

        } return $result;

    }
}
