<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;

/**
 * @Route("/", name="app_", methods={"GET"})
 */
class AppController extends AbstractController
{
    /**
     * @Route("/", name="index")
     * @Route("/accueil", name="home")
     */
    public function index(): Response
    {
        $response = new Response();
        $response->setMaxAge(86400);

        return $this->render('app/index.html.twig', [], $response);
    }

    /**
     * @Route("/robots.txt", name="robot")
     */
    public function robot(RouterInterface $router): Response
    {
        $urls = [];
        $urls[] = $router->generate('app_sitemap', [], false);

        $response = new Response();
        $response->headers->set('Content-Type', 'text/plain');

        return $this->render(
            'app/robots.txt.twig',
            [
                'urls' => $urls,
            ],
            $response
        );
    }

    /**
     * @Route("/sitemap.xml", name="sitemap")
     */
    public function sitemap(RouterInterface $router): Response
    {
        $urls = [];

        $urls[] = [
            'loc' => $router->generate('app_index', [], false),
            'priority' => 1,
        ];
        $urls[] = [
            'loc' => $router->generate('app_home', [], false),
            'priority' => 1,
        ];

        $response = new Response();
        $response->headers->set('Content-Type', 'application/xml');

        return $this->render(
            'app/sitemap.xml.twig',
            [
                'urls' => $urls,
            ],
            $response
        );
    }
}
