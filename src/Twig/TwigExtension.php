<?php

namespace App\Twig;

use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class TwigExtension extends AbstractExtension
{
    private $translator;
    private $entryFilesTwigExtension;

    public function __construct(TranslatorInterface $translationInterface, EntrypointLookupInterface $entryFilesTwigExtension)
    {
        $this->translator = $translationInterface;
        $this->entryFilesTwigExtension = $entryFilesTwigExtension;
    }

    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('translength', [$this, 'translengthFilter']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('encore_render_link', [$this, 'encoreRenderLinkTag', ['is_safe' => ['html']]]),
        ];
    }

    public function translengthFilter($id, $domain = null): int
    {
        if (null === $domain) {
            $domain = 'messages';
        }
        $g = $this->translator->trans(($id.'.length'), [], $domain);

        return (int) $g;
    }

    public function encoreRenderLinkTag(string $entryPoint): string
    {
        return $this->renderLink($entryPoint);
    }

    private function renderLink(string $entryPoint): string
    {
        dd($this->entryFilesTwigExtension->getCssFiles($entryPoint));

        return '';
    }
}
