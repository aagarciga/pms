<?php

namespace App\Controller\Site;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SiteController extends AbstractController
{
    /**
     * @Route("/", name="app_site_index")
     */
    public function index()
    {
        return $this->render('site/index.html.twig', [
            'title' => 'Maretraite Hotel',
            'user' => $this->getUser()
        ]);
    }
}

