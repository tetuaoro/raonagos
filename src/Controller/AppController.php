<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/", name="app_", methods={"GET"})
 */
class AppController extends AbstractController
{
    /**
     * @Route("/", name="index")
     * @Route({"fr":"/accueil","en":"/welcome"}, name="home")
     */
    public function index(Request $request): Response
    {
        // dd($request->getLocale());

        $response = new Response();
        $response->setMaxAge(86400);

        return $this->render('app/index.html.twig', [], $response);
    }
}
