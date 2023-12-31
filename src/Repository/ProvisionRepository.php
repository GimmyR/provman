<?php

namespace App\Repository;

use App\Entity\Provision;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Provision>
 *
 * @method Provision|null find($id, $lockMode = null, $lockVersion = null)
 * @method Provision|null findOneBy(array $criteria, array $orderBy = null)
 * @method Provision[]    findAll()
 * @method Provision[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProvisionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Provision::class);
    }

    public function findByStateAssociative(int $stateId): array {

        $conn = $this->getEntityManager()->getConnection();

        $sql = 'SELECT pr.id, pr.name, pr.image FROM provision pr WHERE pr.state_id = :state_id ORDER BY place';

        $resultSet = $conn->executeQuery($sql, [ 'state_id' => $stateId ]);

        return $resultSet->fetchAllAssociative();

    }

//    /**
//     * @return Provision[] Returns an array of Provision objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Provision
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
