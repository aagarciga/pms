<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BookingRequestRepository")
 */
class BookingRequest
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $checkinAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $checkoutAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $rate;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $specialRequest;

    /**
     * @ORM\Column(type="text")
     */
    private $roomList;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCheckinAt(): ?\DateTimeInterface
    {
        return $this->checkinAt;
    }

    public function setCheckinAt(\DateTimeInterface $checkinAt): self
    {
        $this->checkinAt = $checkinAt;

        return $this;
    }

    public function getCheckoutAt(): ?\DateTimeInterface
    {
        return $this->checkoutAt;
    }

    public function setCheckoutAt(\DateTimeInterface $checkoutAt): self
    {
        $this->checkoutAt = $checkoutAt;

        return $this;
    }

    public function getRate(): ?string
    {
        return $this->rate;
    }

    public function setRate(string $rate): self
    {
        $this->rate = $rate;

        return $this;
    }

    public function getSpecialRequest(): ?string
    {
        return $this->specialRequest;
    }

    public function setSpecialRequest(?string $specialRequest): self
    {
        $this->specialRequest = $specialRequest;

        return $this;
    }

    public function getRoomList(): ?string
    {
        return $this->roomList;
    }

    public function setRoomList(string $roomList): self
    {
        $this->roomList = $roomList;

        return $this;
    }

}
