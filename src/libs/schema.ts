import { WithContext, PostalAddress, OpeningHoursSpecification, AggregateRating, LocalBusiness } from "schema-dts"
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
  priceRange: "€€€€",
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
}

export default organization
