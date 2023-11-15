<?php

namespace App\Controller;

use App\Entity\Provision;
use App\Entity\State;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class SeedingController extends AbstractController
{
    #[Route('/seeding/user', name: 'app_seeding_user')]
    public function seedUser(EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        $user = new User();
        $user->setEmail("gimmyarazafimbelo2@gmail.com");
        $user->setName("gimmyaraz");
        $user->setPassword($passwordHasher->hashPassword($user, "mdpGimmy"));

        $entityManager->persist($user);
        $entityManager->flush();
        
        return $this->json([
            'users' => $entityManager->getRepository(User::class)->findAll()
        ]);
    }

    #[Route('/seeding/state', name: 'app_seeding_state')]
    public function seedState(EntityManagerInterface $entityManager): JsonResponse
    {
        $state1 = new State();
        $state1->setName("In Stock");

        $state2 = new State();
        $state2->setName("In Use");

        $state3 = new State();
        $state3->setName("Finished");

        $entityManager->persist($state1);
        $entityManager->persist($state2);
        $entityManager->persist($state3);
        $entityManager->flush();
        
        return $this->json([
            'states' => $entityManager->getRepository(State::class)->findAll()
        ]);
    }

    #[Route('/seeding/provision', name: 'app_seeding_provision')]
    public function seedProvision(EntityManagerInterface $entityManager): JsonResponse
    {
        $states = $entityManager->getRepository(State::class)->findAll();
        
        $provision1 = new Provision();
        $provision1->setState($states[0]);
        $provision1->setPlace(1);
        $provision1->setName("Huile d'olive");

        $provision2 = new Provision();
        $provision2->setState($states[1]);
        $provision2->setPlace(1);
        $provision2->setName("Lait en poudre");

        $provision3 = new Provision();
        $provision3->setState($states[2]);
        $provision3->setPlace(1);
        $provision3->setName("Miel");

        $provision4 = new Provision();
        $provision4->setState($states[0]);
        $provision4->setPlace(2);
        $provision4->setName("Lait concentré");

        $provision5 = new Provision();
        $provision5->setState($states[2]);
        $provision5->setPlace(2);
        $provision5->setName("Carry");

        $provision6 = new Provision();
        $provision6->setState($states[0]);
        $provision6->setPlace(3);
        $provision6->setName("Poivre");

        $entityManager->persist($provision1);
        $entityManager->persist($provision2);
        $entityManager->persist($provision3);
        $entityManager->persist($provision4);
        $entityManager->persist($provision5);
        $entityManager->persist($provision6);
        $entityManager->flush();
        
        return $this->json([
            'provisions' => $entityManager->getRepository(Provision::class)->findAll()
        ]);
    }
}
