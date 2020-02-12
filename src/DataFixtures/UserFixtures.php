<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {

        $userList = array(
            [
                'firstName' => 'Alex',
                'lastName' => 'Alvarez Gárciga',
                'email' => 'alex.alvarez@airlineproxy.com',
                'password' => 'alex.alvarez'
            ]
        );

        foreach ($userList as $userData) {
            $user = new User();
            $user->setFirstName($userData["firstName"]);
            $user->setLastName($userData["lastName"]);
            $user->setEmail($userData["email"]);
            $user->setPassword($this->passwordEncoder->encodePassword(
                $user,
                $userData["password"]
            ));

            $manager->persist($user);
        }

        $manager->flush();
    }
}
