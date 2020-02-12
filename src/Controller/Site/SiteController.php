<?php

namespace App\Controller\Site;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SiteController extends AbstractController
{
    /**
     * @Route("/", name="site-index")
     */
    public function index()
    {
        return $this->render('site/index.html.twig', [
            'title' => 'Maretraite Hotel',
        ]);
    }
}
