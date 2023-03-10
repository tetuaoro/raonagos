import { siteurl } from "@libs/app"
import Link from "next/link"

export default function Component() {
  return (
    <div className="mx-8 md:mx-32 lg:mx-64 ">
      <h1 className="text-4xl">Politiques de confidentialité</h1>
      <p className="text-sm italic text-gray-500">mise à jour le 31 janvier 2023</p>
      <h2 className="text-xl font-semibold mt-24">ARTICLE 1&nbsp;: PRINCIPES GÉNÉRAUX EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DE DONNÉES</h2>
      <p className="pt-4">
        Conformément aux dispositions de l&apos;article 5 du Règlement européen 2016/679, la collecte et le traitement des données des utilisateurs du site respectent les principes suivants&nbsp;:
      </p>
      <ul className="list-disc pl-8 pt-4">
        <li>
          Licéité, loyauté et transparence&nbsp;: les données ne peuvent être collectées et traitées qu&apos;avec le consentement de l&apos;utilisateur propriétaire des données. A chaque fois que des
          données à caractère personnel seront collectées, il sera indiqué à l&apos;utilisateur que ses données sont collectées, et pour quelles raisons ses données sont collectées&nbsp;;
        </li>
        <li>
          Finalités limitées&nbsp;: la collecte et le traitement des données sont exécutés pour répondre à un ou plusieurs objectifs déterminés dans les présentes conditions générales
          d&apos;utilisation&nbsp;;
        </li>
        <li>Minimisation de la collecte et du traitement des données&nbsp;: seules les données nécessaires à la bonne exécution des objectifs poursuivis par le site sont collectées&nbsp;;</li>
        <li>
          Conservation des données réduites dans le temps&nbsp;: les données sont conservées pour une durée limitée, dont l&apos;utilisateur est informé. Lorsque cette information ne peut pas être
          communiquée, l&apos;utilisateur est informé des critères utilisés pour déterminer la durée de conservation&nbsp;;
        </li>
        <li>
          Intégrité et confidentialité des données collectées et traitées&nbsp;: le responsable du traitement des données s&apos;engage à garantir l&apos;intégrité et la confidentialité des données
          collectées.
        </li>
      </ul>
      {/* ###### */}
      <p className="pt-4">
        Afin d&apos;être licites, et ce conformément aux exigences de l&apos;article 6 du règlement européen 2016/679, la collecte et le traitement des données à caractère personnel ne pourront
        intervenir que s&apos;ils respectent au moins l&apos;une des conditions ci-après énumérées&nbsp;:
      </p>
      <ul className="list-disc pl-8 pt-4">
        <li>L&apos;utilisateur a expressément consenti au traitement&nbsp;;</li>
        <li>Le traitement est nécessaire à la bonne exécution d&apos;un contrat&nbsp;;</li>
        <li>Le traitement répond à une obligation légale&nbsp;;</li>
        <li>Le traitement s&apos;explique par une nécessité liée à la sauvegarde des intérêts vitaux de la personne concernée ou d&apos;une autre personne physique&nbsp;;</li>
        <li>
          Le traitement peut s&apos;expliquer par une nécessité liée à l&apos;exécution d&apos;une mission d&apos;intérêt public ou qui relève de l&apos;exercice de l&apos;autorité publique&nbsp;;
        </li>
        <li>Le traitement et la collecte des données à caractère personnel sont nécessaires aux fins des intérêts légitimes et privés poursuivis par le responsable du traitement ou par un tiers.</li>
      </ul>
      {/* ############### */}
      <h2 id="data" className="text-xl font-semibold mt-24">
        ARTICLE 2&nbsp;: DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES DANS LE CADRE DE LA NAVIGATION SUR LE SITE
      </h2>
      <p className="pt-4">
        Le responsable du traitement ne conserve pas dans ses systèmes informatiques du site l&apos;ensemble des données traitées sinon sont conservées le temps des échanges puis supprimées
        immédiatement.
      </p>
      <p className="pt-4">
        <strong>A. </strong>DONNÉES TRAITÉES ET MODE DE COLLECTE
      </p>
      <p className="pt-4">Les données à caractère personnel traitées sur le site sont les suivantes&nbsp;:</p>
      <ul className="list-disc pl-8 pt-4">
        <li>nom et prénom&nbsp;;</li>
        <li>numéro de téléphone&nbsp;;</li>
        <li>adresse de messagerie.</li>
      </ul>
      <p className="pt-4">Ces données sont traitées lorsque l&apos;utilisateur effectue l&apos;une des opérations suivantes sur le site&nbsp;:</p>
      <ul className="list-disc pl-8 pt-4">
        <li>soumet un formulaire de contact depuis le site.</li>
      </ul>
      <p className="pt-4">Les traitements de données effectués sont fondés sur les bases légales suivantes&nbsp;:</p>
      <ul className="list-disc pl-8 pt-4">
        <li>communiquer.</li>
      </ul>
      <p className="pt-4">
        <strong>B. </strong>TRANSMISSION DES DONNÉES A DES TIERS
      </p>
      <p className="pt-4">Les données à caractère personnel collectées par le site ne sont transmises à aucun tiers, et ne sont traitées que par l&apos;éditeur du site.</p>
      <p className="pt-4">
        <strong>C. </strong>HÉBERGEMENT DES DONNÉES
      </p>
      <p className="pt-4">
        Le site {siteurl} est hébergé par&nbsp;:{" "}
        <a className="text-blue-500" href="https://vercel.com" target="_blank" rel="noreferrer">
          Vercel.com
        </a>
        , dont le siège est situé à l&apos;adresse ci-après&nbsp;: San Francisco & Global.
      </p>
      {/* ####### */}
      <h2 className="text-xl font-semibold mt-24">ARTICLE 3&nbsp;: RESPONSABLE DU TRAITEMENT DES DONNÉES</h2>
      <p className="pt-4">
        <strong>A. </strong>LE RESPONSABLE DU TRAITEMENT DES DONNÉES
      </p>
      <p className="pt-4">
        Le responsable du traitement des données à caractère personnel est&nbsp;: Il peut être contacté de la manière suivante&nbsp;:{" "}
        <a className="text-blue-500" href="mailto:contact@rao-nagos.pf?subject=privacy">
          contact@rao-nagos.pf
        </a>
        .
      </p>
      <p className="pt-4">Le responsable du traitement des données est chargé de déterminer les finalités et les moyens mis au service du traitement des données à caractère personnel.</p>
      <p className="pt-4">
        <strong>B. </strong>OBLIGATIONS DU RESPONSABLE DU TRAITEMENT DES DONNÉES
      </p>
      <p className="pt-4">
        Le responsable du traitement s&apos;engage à protéger les données à caractère personnel collectées, à ne pas les transmettre à des tiers sans que l&apos;utilisateur n&apos;en ait été informé
        et à respecter les finalités pour lesquelles ces données ont été collectées.
      </p>
      <p className="pt-4">
        De plus, le responsable du traitement des données s&apos;engage à notifier l&apos;utilisateur en cas de rectification ou de suppression des données, à moins que cela n&apos;entraîne pour lui
        des formalités, coûts et démarches disproportionnés.
      </p>
      <p className="pt-4">
        Dans le cas où l&apos;intégrité, la confidentialité ou la sécurité des données à caractère personnel de l&apos;utilisateur est compromise, le responsable du traitement s&apos;engage à informer
        l&apos;utilisateur par tout moyen.
      </p>
      {/* ############# */}
      <h2 className="text-xl font-semibold mt-24">ARTICLE 4&nbsp;: DROITS DE L&apos;UTILISATEUR</h2>
      <p className="pt-4">Conformément à la réglementation concernant le traitement des données à caractère personnel, l&apos;utilisateur possède les droits ci-après énumérés.</p>
      <p className="pt-4">
        Afin que le responsable du traitement des données fasse droit à sa demande, l&apos;utilisateur est tenu de lui communiquer&nbsp;: ses prénom et nom ainsi que son adresse e-mail, et si cela est
        pertinent, son numéro de compte ou d&apos;espace personnel ou d&apos;abonné.
      </p>
      <p className="pt-4">Le responsable du traitement des données est tenu de répondre à l&apos;utilisateur dans un délai de 30 (trente) jours maximum.</p>
      <p className="pt-4">
        <strong>A.</strong> PRÉSENTATION DES DROITS DE L&apos;UTILISATEUR EN MATIÈRE DE COLLECTE ET TRAITEMENT DE DONNÉES
      </p>
      <p className="pt-4 pl-8">
        <em>a. Droit d&apos;accès, de rectification et droit à l&apos;effacement</em>
      </p>
      <p className="pt-4">L&apos;utilisateur peut prendre connaissance, mettre à jour, modifier ou demander la suppression des données le concernant en contactant le responsable du traitement.</p>
      {/* ################# */}
      <h2 id="cookies" className="text-xl font-semibold mt-24">
        ARTICLE 5&nbsp;: UTILISATION DES FICHIERS COOKIES
      </h2>
      <p className="pt-4">
        Un cookie est un fichier de petite taille (moins de 4 ko), stocké par le site sur le disque dur de l&apos;utilisateur, contenant des informations relatives aux habitudes de navigation de
        l&apos;utilisateur.
      </p>
      <p className="pt-4">
        Ces fichiers lui permettent de traiter des statistiques et des informations sur le trafic, de faciliter la navigation et d&apos;améliorer le service pour le confort de l&apos;utilisateur.
      </p>
      <p className="pt-4">
        Pour l&apos;utilisation de fichiers cookies impliquant la sauvegarde et l&apos;analyse de données à caractère personnel, le consentement de l&apos;utilisateur est nécessairement demandé.
      </p>
      <p className="pt-4">
        Ce consentement de l&apos;utilisateur est considéré comme valide pour une durée de 3 (trois) mois maximum. À l&apos;issue de cette période, le site demandera à nouveau l&apos;autorisation de
        l&apos;utilisateur pour enregistrer des fichiers cookies sur son disque dur.
      </p>
      {/* ################ */}
      <h2 className="text-xl font-semibold mt-24">ARTICLE 6&nbsp;: CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ</h2>
      <p className="pt-4">L&apos;éditeur du site se réserve le droit de la modifier afin de garantir sa conformité avec le droit en vigueur.</p>
      <p className="pt-4">
        Par conséquent, l&apos;utilisateur est invité à venir consulter régulièrement cette politique de confidentialité afin de se tenir informé des derniers changements qui lui seront apportés.
      </p>
      <p className="pt-4">
        Il est porté à la connaissance de l&apos;utilisateur que la dernière mise à jour de la présente politique de confidentialité est intervenue le&nbsp;: 31 (trente-un) / janvier / 2023 (deux
        mille vingt-trois).
      </p>
      {/* ################# */}
      <p className="pt-24 italic">Les prochains articles évoqueront comment les services proposés par l&apos;agence Rao Nagos doivent être considérés.</p>
      {/* ################# */}
      <h2 className="text-xl font-semibold mt-24">ARTICLE 7&nbsp;: SERVICES</h2>
      <p className="pt-4">Rao Nagos propose 3 services&nbsp;:</p>
      <ul className="list-disc pl-8 pt-4">
        <li>Rao web pour la conception de site web&nbsp;;</li>
        <li>Rao bot pour l&apos;automatisation de tâche répétitive&nbsp;;</li>
        <li>Rao mail server pour l&apos;installation d&apos;une messagerie électronique.</li>
      </ul>
      <p className="pt-4">Ces services peuvent être vendus en dehors de la Polynésie Française.</p>
      {/* ################# */}
      <h2 className="text-xl font-semibold mt-24">ARTICLE 8&nbsp;: EXONÉRATION DE RESPONSABILITÉ</h2>
      <p className="pt-4">
        Les services proposés par Rao Nagos, tels que Rao Web, Rao Bot et Rao Mail Server, sont fournis &quot;tels quels&quot; sans garantie expresse ou implicite. Bien que nous nous efforçions de
        fournir des services de qualité, nous ne garantissons pas que les services seront toujours disponibles, exempts d&apos;erreur ou de défauts, ni que les erreurs seront corrigées.
      </p>
      <p className="pt-4">
        En utilisant les services de Rao Nagos - ainsi que ce site web -, vous acceptez que l&apos;utilisation est à vos risques et périls. Nous ne serons pas responsables des dommages directs,
        indirects, accessoires, spéciaux, punitifs ou consécutifs de toute nature, y compris sans limitation les pertes de fonds, de bénéfices ou de revenus, qui découlent de l&apos;utilisation ou de
        l&apos;impossibilité d&apos;utiliser les services.
      </p>
      <p className="pt-4">
        Vous acceptez également de défendre, indemniser et de nous dégager de toute responsabilité en cas de réclamation ou de poursuite résultant de l&apos;utilisation de nos services.
      </p>
      <p className="pt-4">
        Cette section de exonération de responsabilité s&apos;applique à toutes les formes d&apos;utilisation des services de Rao Nagos, y compris sans limitation les utilisations par des clients, des
        utilisateurs finaux, des tiers et des partenaires commerciaux.
      </p>
      {/* ################# */}
      <h2 className="text-xl font-semibold mt-24">ARTICLE 9&nbsp;: PAIEMENT, FACTURATION ET TARIFICATION</h2>
      <p className="pt-4">
        <strong>9.1</strong> Les prix sont libelés en franc pacifique&nbsp;: XPF.
      </p>
      <p className="pt-4">
        <strong>9.2</strong> Les prix pour les services proposés par Rao Nagos sont disponibles sur le site web à l&apos;adresse{" "}
        <Link className="text-blue-500" href="/#prices">
          https://www.rao-nagos.pf/#prices
        </Link>
        . À la livraison du produit final, est appliqué un abonnement mensuel de 7000 (sept mille) XPF. Une intervention est facturée de 20 700 (vingt mille sept cents) XPF par journée.
      </p>
      <p className="pt-4">
        <strong>9.3</strong> Le paiement des services est effectué en trois étapes. 40% (quarante pour cent) du montant total est payé à la signature du contrat, 40% (quarante pour cent) après la
        livraison du prototype et 20% (vingt pour cent) pour le produit final.
      </p>
      <p className="pt-4">
        <strong>9.4</strong> Tous les paiements doivent être effectués en totalité avant la fin de la livraison. En cas de non-paiement ou de paiement tardif, Rao Nagos se réserve le droit de refuser
        de fournir les services.
      </p>
      <p className="pt-4">
        <strong>9.5</strong> Les prix peuvent être modifiés à tout moment sans préavis. Les prix en vigueur à la date de signature du contrat sont ceux qui s&apos;appliqueront pour la durée du
        contrat.
      </p>
      <p className="pt-4">
        <strong>9.6</strong> Le retard de paiement est de 1 (un) mois maximum.
      </p>
      <p className="pt-4">
        <strong>9.7</strong> Les moyens de paiement acceptés sont soit en liquide avec facture ou soit par virement bancaire sans facture.
      </p>
      <p className="pt-4">
        <strong>9.8</strong> S&apos;il y a lieu de dépenses autres, par exemple l&apos;achat d&apos;un serveur ou d&apos;un nom de domaine, elles seront facturées au demandeur du service et réglées
        sans délais.
      </p>
      {/* ################# */}
      <h2 className="text-xl font-semibold mt-24">ARTICLE 10&nbsp;: COMPÉTENCE</h2>
      <p className="pt-4">Toutes contestations qui découlent de ces présents services - ainsi que ce site web - seront tranchées définitivement par un tribunal compétent en Polynésie Française.</p>
    </div>
  )
}
