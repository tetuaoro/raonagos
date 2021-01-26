<?php

namespace App\Twig;

use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class TwigExtension extends AbstractExtension
{
    private $translator;

    public function __construct(TranslatorInterface $translationInterface)
    {
        $this->translator = $translationInterface;
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
            new TwigFunction('function_name', [$this, 'doSomethin']),
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
}
