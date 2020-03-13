<?php

namespace App\Form;

use App\Entity\BookingRequest;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BookingRequestType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('checkinAt', TextType::class)
            ->add('checkoutAt', TextType::class)
            ->add('rate', ChoiceType::class, [
                'choices' => [
                    'Standard Rate' => 1,
                    'Early Booking' => 0.10,
                    'Non-refundable' => 0.10
                ],
                'placeholder' => 'Choose a Rate',
                'required' => true,
            ])
            ->add('specialRequest', TextareaType::class)
            ->add('roomList', TextType::class, [
                'attr' => ['class' => 'room-list'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => BookingRequest::class,
        ]);
    }
}
