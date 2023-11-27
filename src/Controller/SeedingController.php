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
        $user->setEmail("john@doe.com");
        $user->setName("johndoe");
        $user->setPassword($passwordHasher->hashPassword($user, "mdpJohn"));

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
}
