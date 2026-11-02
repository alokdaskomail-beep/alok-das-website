import type { Metadata } from "next";
import Link from "next/link";
import HotelServicePackages from "../../components/hotel-service-packages";
import { email, phone, hotelWhatsappUrl, hotelPackages } from "../../lib/hotel-services";

export const metadata: Metadata = {
  title: "Hotel OTA Setup, Listing Review & Prices in Nepal | Alok Das",
  description: "OTA account reviews from NPR 5,000, corrections from NPR 15,000 and new-property setup from NPR 25,000. Practical help for small hotels, resorts and homestays in Nepal.",
  alternates: { canonical: "/hotel-growth" },
  openGraph: {
    title: "Hotel OTA Setup & Listing Improvement | Alok Das",
    description: "Clear packages for OTA reviews, listing corrections, new-property setup, websites and practical training. Start with a free 5-minute discovery call.",
    url: "https://alokdas.com.np/hotel-growth", type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Alok Das — hotel OTA and digital services" }],
  },
  twitter: { card: "summary_large_image", title: "Hotel OTA Setup & Listing Improvement", description: "Review, correct or set up your property's booking channels with Alok Das.", images: ["/og.png"] },
};

const faqs = [
  ["Which platforms can you help with?", "Booking.com, Airbnb, Expedia, Agoda, Hostelworld and MakeMyTrip, where suitable and available for your property. The setup package includes up to three agreed platforms; extra platforms are quoted separately. Platform eligibility and verification must be checked."],
  ["What do you check in an existing account?", "Property and room details, photographs, rates, availability, policies, promotions and guest-message templates. Rate checks compare equivalent rooms, inclusions, cancellation terms, taxes and promotions; unlike offers do not need identical prices."],
  ["Does the free call include an account audit?", "The free five-minute discovery call identifies your needs and the appropriate service. A detailed account review, written findings and recommendations are included in the paid review package."],
  ["How long does setup take?", "Fresh OTA setup typically takes about one week once the required documents, information, photographs and account access are ready. Platform verification can take longer. An initial existing-listing review usually takes 2–3 working days. Correction and website timelines are agreed separately."],
  ["Do you guarantee more bookings or better rankings?", "No. I commit to the agreed setup, review, corrections and training. Bookings and visibility also depend on demand, location, rates, competition, reviews and platform decisions."],
  ["Can you automate all our guest messages?", "I prepare templates and configure available triggers where the selected platforms and tools support them. A unified inbox, paid messaging tools or a channel manager are separate decisions and costs."],
  ["Can you manage the accounts after setup?", "Ongoing maintenance, promotion handling and review support can be scoped through a custom quotation. Standard support is during agreed office hours. Live guest-message handling, reservation work and out-of-hours coverage require a separate agreement."],
  ["Can you visit properties outside Kathmandu Valley?", "Yes, by arrangement. Clients arrange or reimburse transport and accommodation, with any travel-time fee agreed beforehand. A group can share those expenses. Remote delivery is available across Nepal."],
];

export default function HotelGrowthPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: "Hotel OTA Setup and Listing Improvement",
        url: "https://alokdas.com.np/hotel-growth", areaServed: "Nepal",
        provider: { "@type": "Person", name: "Alok Das", url: "https://alokdas.com.np/" },
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Hotel service packages", itemListElement: hotelPackages.slice(0, 5).map((pkg) => ({
          "@type": "Offer", priceCurrency: "NPR", price: pkg.price.replace(/[^0-9]/g, ""), url: "https://alokdas.com.np/hotel-growth#pricing",
          itemOffered: { "@type": "Service", name: pkg.name, description: [pkg.timeline, ...pkg.items].join(" ") },
        })) },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }) }} />
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Alok Das home"><span className="brand-mark">AD</span><span><strong>Alok Das</strong><small>Independent Digital Growth Partner</small></span></Link>
        <nav aria-label="Primary navigation"><Link href="/">Home</Link><a href="#services">Services</a><a href="#pricing">Pricing</a><Link href="/hotel-training">Training</Link></nav>
        <a className="header-cta" href={hotelWhatsappUrl}>Free 5-minute call ↗</a>
        <details className="mobile-menu"><summary aria-label="Open navigation menu"><span /><span /><span /></summary><div className="mobile-menu-panel"><Link href="/">Home</Link><a href="#services">Services</a><a href="#pricing">Pricing</a><Link href="/hotel-training">Training</Link><a href={hotelWhatsappUrl}>Free 5-minute call ↗</a></div></details>
      </header>
      <section className="hotel-page-hero">
        <div><p className="eyebrow">For small hotels, resorts, homestays and properties opening soon</p><h1>Get your booking platforms working together.</h1><p>Set up your property correctly, improve existing listings, organise rates and guest messages, and give your team a practical handover.</p><div className="hero-actions"><a className="button button-primary" href={hotelWhatsappUrl}>Book a free 5-minute discovery call ↗</a><a className="button button-secondary" href="#pricing">View packages and prices</a></div><div className="hero-terms"><span>10+ years of hotel online marketing</span><span>Work directly with Alok</span><span>Nepali or English</span></div></div>
        <aside className="hotel-audit-card"><span>Already listed online?</span><h2>Check the setup before adding more complexity.</h2><p>Start with a paid review of up to three OTA accounts and your Google Business Profile. Receive written priorities and a 30-minute explanation.</p><a className="button button-light" href={hotelPackages[0].href}>Account review · NPR 5,000 ↗</a></aside>
      </section>
      <section className="section services-section hotel-services" id="services">
        <div className="services-intro"><p className="kicker">Practical help for your property</p><h2>Start with the work you need now.</h2><p>One agreed scope, a clear price and direct communication with the person doing the work.</p></div>
        <div className="capability-list">
          <article><span>01</span><h3>New property setup</h3><p>Prepare listings, descriptions, client-photo uploads, room types, rates, availability and policies on suitable platforms. Get guest-message templates, supported triggers and a handover.</p></article>
          <article><span>02</span><h3>Existing account review and correction</h3><p>Identify incomplete information, confusing room options and unexplained rate differences. Review Google Business Profile and available message automation, then implement the agreed changes.</p></article>
          <article><span>03</span><h3>Website and guest communication</h3><p>Give guests a clear place to understand the property and contact you. Prepare reusable enquiry replies, pre-arrival information and check-in instructions.</p></article>
          <article><span>04</span><h3>Training and further support</h3><p>Teach your team on its own accounts. Photography, SEO, advertising and ongoing maintenance are available through a defined scope and quotation.</p></article>
        </div>
      </section>
      <section className="section engagement-section" id="pricing"><div className="section-heading"><div><p className="kicker">Services and prices</p><h2>Choose a clear starting point.</h2></div><p>These packages cover the base scope below. Additional platforms, larger properties and complex requirements receive a written quotation before work begins.</p></div><HotelServicePackages /></section>
      <section className="section hotel-specialization"><div><p className="kicker">Keep the knowledge with your team</p><h2>Practical training using your own accounts.</h2></div><div><p>A focused 2–3-hour workshop for existing users, with two scheduled 20-minute follow-up calls within 14 days: NPR 8,000 per property. Beginners receive a plan for several sessions.</p><Link className="button button-primary" href="/hotel-training">See training options ↗</Link></div></section>
      <section className="section faq-section"><div className="section-heading"><div><p className="kicker">Before we start</p><h2>Your questions, answered.</h2></div></div><div className="faq-list">{faqs.map(([q, a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</div></section>
      <section className="final-cta"><div><p className="kicker">A simple first step</p><h2>Tell me about your property.</h2><p>Send your property name, location and existing listing link, if any. A free five-minute call helps us choose the right service. Detailed reviews and recommendations are paid work.</p></div><div className="cta-actions"><a className="button button-light" href={hotelWhatsappUrl}>Arrange my free discovery call ↗</a><a href={`tel:${phone}`}>Call Alok: +977 9865711752</a><a href={`mailto:${email}`}>{email}</a></div></section>
      <footer><Link className="brand" href="/"><span className="brand-mark">AD</span><span><strong>Alok Das</strong><small>Independent Digital Growth Partner</small></span></Link><p><Link href="/hotel-training">Practical hotel training</Link><br /><Link href="/privacy">Privacy & analytics</Link></p><span>© 2026 Alok Das</span></footer>
      <a className="floating-whatsapp" href={hotelWhatsappUrl} aria-label="Arrange a free five-minute discovery call on WhatsApp"><span>WA</span><strong>Free 5-minute call</strong></a>
    </main>
  );
}
