import type { WithContext, PostalAddress, OpeningHoursSpecification, AggregateRating, LocalBusiness, OfferCatalog } from "schema-dts"
import { sitename, siteurl, telephone, description, sameAs } from "@libs/app"

const address: PostalAddress = {
  "@type": "PostalAddress",
  addressLocality: "Paea",
  postalCode: "98711",
  streetAddress: "Paea, Polynésie française",
  addressCountry: "PF",
  addressRegion: "Paea",
}

const openingHoursSpecification: OpeningHoursSpecification = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
  opens: "09:00:00",
  closes: "14:00:00",
}

const aggregateRating: AggregateRating = {
  "@type": "AggregateRating",
  ratingValue: 4,
  bestRating: 5,
  ratingCount: 18,
}

const hasOfferCatalog: OfferCatalog = {
  "@type": "OfferCatalog",
  name: "Services de Rao Nagos",
  itemListElement: [
    {
      "@type": "Offer",
      name: "Rao bot",
      description:
        "Rao bot est un service de création de scripts d'automatisation personnalisés pour vos processus d'affaires. Économisez du temps et de l'argent en automatisant des tâches répétitives avec Rao bot.",
      image: [`${siteurl}/images/w-1.webp`],
      url: `${siteurl}/#rao-bot`,
      price: 40000.0,
      priceCurrency: "XPF",
    },
    {
      "@type": "Offer",
      name: "Rao mail server",
      description:
        "Rao mail server est un service de construction de serveurs de messagerie personnalisés pour répondre aux besoins de votre entreprise. Bénéficiez d'une sécurité et d'une confidentialité maximales avec les solutions de serveur de messagerie de Rao Nagos.",
      image: [`${siteurl}/images/w-4.webp`],
      url: `${siteurl}/#rao-mail-server`,
      price: 150000.0,
      priceCurrency: "XPF",
    },
    {
      "@type": "Offer",
      name: "Rao web",
      description:
        "Rao web est un service de conception et de développement de sites web personnalisés pour votre entreprise. Obtenez un site web professionnel, rapide et performant qui reflète la personnalité et la mission de votre entreprise.",
      image: [`${siteurl}/images/w-2.webp`],
      url: `${siteurl}/#rao-web`,
      price: 150000.0,
      priceCurrency: "XPF",
    },
    {
      "@type": "Offer",
      name: "Rao mission",
      description:
        "Engagez notre équipe pour le développement d'applications personnalisées et d'autres projets. Nous travaillons avec vous pour créer des solutions sur mesure qui répondent aux besoins de votre entreprise et vous aident à atteindre vos objectifs.",
      url: `${siteurl}/#mission`,
      price: 20700.0,
      priceCurrency: "XPF",
    },
  ],
}

const organization: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  address,
  aggregateRating,
  telephone,
  sameAs,
  description,
  url: siteurl,
  logo: `${siteurl}/icons/logo_x144.webp`,
  name: sitename,
  image: [`${siteurl}/images/media_cover.webp`, `${siteurl}/images/w-1.webp`, `${siteurl}/images/w-2.webp`, `${siteurl}/images/w-4.webp`],
  priceRange: "€€€",
  openingHoursSpecification: [
    {
      ...openingHoursSpecification,
    },
    {
      ...openingHoursSpecification,
      dayOfWeek: "Friday",
      closes: "12:00:00",
    },
  ],
  hasOfferCatalog,
}

export default organization
