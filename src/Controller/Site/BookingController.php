<?php

namespace App\Controller\Site;

use App\Entity\BookingRequest;
use App\Form\BookingRequestType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BookingController extends AbstractController
{
    /**
     * @Route("/booking", name="app_site_booking")
     */
    public function index()
    {
        $bookingRequest = new BookingRequest();
        $bookingRequestForm = $this->createForm(BookingRequestType::class, $bookingRequest);

        return $this->render('site/booking/index.html.twig', [
            'title' => ' Booking | Maretraite Hotel',
            'user' => $this->getUser(),
            'isDebug' => true,
            'bookingRequestForm' => $bookingRequestForm->createView()
        ]);
    }
}
