<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SeedingController extends AbstractController
{
    #[Route('/seeding/user', name: 'app_seeding_user')]
    public function seedUser(EntityManagerInterface $entityManager): JsonResponse
    {
        $user = new User();
        $user->setEmail("gimmyarazafimbelo2@gmail.com");
        $user->setName("gimmyaraz");
        $user->setPassword("mdpGimmy");

        $entityManager->persist($user);
        $entityManager->flush();
        
        return $this->json([
            'users' => $entityManager->getRepository(User::class)->findAll()
        ]);
    }
}
