import Link from "next/link";
import type { Metadata } from "next";
import LocalBusinessCheckForm from "../../components/ui/LocalBusinessCheckForm";

const phone = "+9779865711752";
const businessWhatsappText =
  "Hello Alok, I would like to discuss local business growth support.\n\nBusiness name:\nLocation / service area:\nMain goal:";
const businessWhatsappUrl = `https://wa.me/9779865711752?text=${encodeURIComponent(
  businessWhatsappText,
)}`;

export const metadata: Metadata = {
  title: "Local Business Growth in Kathmandu Valley | Alok Das",
  description:
    "Practical Google visibility, service pages and enquiry journeys for local businesses in Kathmandu Valley, especially Lalitpur.",
  alternates: { canonical: "/local-business-growth" },
  openGraph: {
    title: "Local Business Growth in Kathmandu Valley | Alok Das",
    description:
      "Practical online visibility and enquiry setup for local service businesses in Kathmandu Valley.",
    url: "https://alokdas.com.np/local-business-growth",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Business Growth in Kathmandu Valley | Alok Das",
    description:
      "Practical Google visibility and enquiry setup for local service businesses in Kathmandu Valley.",
    images: ["/og.png"],
  },
};

const audiences = [
  ["Custom furniture & carpentry", "Show completed wardrobes, beds, cabinets and made-to-measure work."],
  ["Modular kitchens & interiors", "Present project photos and capture the requirements behind a quotation."],
  ["Painting & renovation", "Make service areas, project scope and next steps easier to understand."],
  ["UPVC & aluminium fabrication", "Organize product and service categories around clear customer enquiries."],
  ["Other local services", "Start with a review to see whether the approach fits your business."],
];

const problems = [
  ["Hard to find", "Your Google, website or public business information is incomplete or inconsistent."],
  ["Hard to evaluate", "Customers cannot quickly see services, finished work or the information that builds trust."],
  ["Hard to contact", "Enquiries arrive without enough detail, get missed, or have no clear follow-up path."],
];

const steps = [
  ["01", "Visibility check", "Review your current website, public Google listing and customer contact journey."],
  ["02", "Setup and improve", "Implement the profile, service-page and enquiry improvements agreed for your scope."],
  ["03", "Track and refine", "Use a simple lead register and practical next actions. Organic SEO can take time and is not a ranking guarantee."],
];

const faqs = [
  ["Is a Google Business Profile free?", "Yes. Google does not charge for a profile. The fee is for professional review, setup assistance and optimization."],
  ["Can you guarantee rankings or customers?", "No. Search visibility and enquiries depend on many factors. The work focuses on a sound, useful setup and clear next actions."],
  ["Do I need a website?", "Not always. It depends on your current presence, the work you need to show and how customers should contact you."],
  ["Can you work with an existing Facebook page or website?", "Yes, after a quick review of the current information, access and practical priorities."],
  ["Who owns my accounts and website?", "You do. Any Google, website or advertising accounts should remain under your ownership, subject to the agreed setup."],
  ["Is advertising spend included?", "No. Paid ads, third-party subscriptions, domains, hosting and major integrations are separately quoted unless clearly included."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function LocalBusinessGrowthPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Local Business Growth",
            url: "https://alokdas.com.np/local-business-growth",
            description:
              "Practical Google visibility, service pages and enquiry journeys for local service businesses in Kathmandu Valley.",
            provider: {
              "@type": "Person",
              name: "Alok Das",
              url: "https://alokdas.com.np/",
            },
            areaServed: ["Kathmandu Valley", "Lalitpur"],
            serviceType: [
              "Google Business Profile setup assistance",
              "Local business website and landing pages",
              "Local SEO foundations",
              "WhatsApp enquiry journeys",
            ],
          }),
        }}
      />

      <section className="local-hero" id="top">
        <div>
          <p className="eyebrow"><span aria-hidden="true" /> Local Business Growth · Kathmandu Valley</p>
          <h1>Help more customers find your business — and make it easier for them to contact you.</h1>
          <p>
            I help furniture workshops, home-improvement contractors and other local service businesses improve their Google presence, showcase their work, and organize customer enquiries — without complicated software or expensive marketing commitments.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#check">Request a Free Visibility Check <Arrow /></a>
            <a className="button button-secondary" href="#included">See What&apos;s Included</a>
          </div>
          <p className="local-trust-note">Practical setup <span>•</span> Clear deliverables <span>•</span> Your accounts remain yours</p>
        </div>
        <aside className="local-hero-panel" aria-label="Local business visibility review">
          <span>Starting point</span>
          <h2>Make the next customer action obvious.</h2>
          <ul>
            <li>Accurate public business information</li>
            <li>Finished work people can understand</li>
            <li>A clear route to WhatsApp or a quotation request</li>
          </ul>
        </aside>
      </section>

      <section className="section local-audience-section">
        <div className="section-heading">
          <div><p className="kicker">Who this is for</p><h2>Built for hands-on local businesses with good work to show.</h2></div>
          <p>Start with the customer&apos;s real question: what do you do, where do you work, and how can they take the next step?</p>
        </div>
        <div className="local-card-grid">
          {audiences.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section local-problems-section">
        <div className="section-heading"><div><p className="kicker">The practical problems</p><h2>Visibility is only useful when it leads somewhere clear.</h2></div></div>
        <div className="local-card-grid three-up">
          {problems.map(([title, text]) => <article key={title}><span>{title}</span><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section local-process-section" id="included">
        <div className="section-heading light"><div><p className="kicker">How it works</p><h2>Review first. Then focus on the work that will help most.</h2></div><p>Setup completion is not a Google ranking guarantee. The aim is a sound public presence and an easier customer journey.</p></div>
        <div className="local-steps">
          {steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section local-deliverables-section">
        <div className="section-heading"><div><p className="kicker">What can be included</p><h2>A practical local presence, scoped around what you actually need.</h2></div></div>
        <div className="local-deliverables">
          <span>Google Business Profile setup assistance or optimization, subject to eligibility and verification</span>
          <span>Simple mobile-friendly service or portfolio page with client-supplied assets</span>
          <span>Clear services, service areas, contact methods and work presentation</span>
          <span>WhatsApp click-to-chat and a structured quotation request journey</span>
          <span>Basic on-page SEO and indexability checks</span>
          <span>Appropriate local business schema where it matches visible content</span>
          <span>Lightweight lead tracking in your existing spreadsheet or CRM, with permission</span>
          <span>Accurate, useful public content that is easier for search and AI systems to understand</span>
        </div>
      </section>

      <section className="section local-pricing-section">
        <div className="section-heading"><div><p className="kicker">Engagement options</p><h2>Start small, keep ownership clear, and scope larger work separately.</h2></div><p>Final scope depends on your current presence, business information, content readiness and account access.</p></div>
        <div className="local-package-grid">
          <article><p>Focused starting point</p><h3>Local Visibility Starter</h3><strong>Request a quote</strong><span>Initial review, one eligible Google profile setup or optimization path, a simple service page, WhatsApp enquiry route, basic on-page SEO and handover.</span><a className="package-link" href={businessWhatsappUrl}>Discuss this option <Arrow /></a></article>
          <article><p>Ongoing support</p><h3>Ongoing Visibility Care</h3><strong>Price on request</strong><span>Periodic content updates, listing hygiene, lead reporting and defined support hours. No guaranteed traffic, lead quantity or rankings.</span><a className="package-link" href={businessWhatsappUrl}>Ask about support <Arrow /></a></article>
          <article><p>Broader scope</p><h3>Custom Growth Projects</h3><strong>Custom quote</strong><span>Multi-page sites, advanced SEO, advertising, CRM and automation are separately scoped.</span><a className="package-link" href={businessWhatsappUrl}>Discuss a project <Arrow /></a></article>
        </div>
        <p className="package-note">Domains, hosting, paid advertising, third-party subscriptions, content production, taxes and major integrations are excluded unless clearly stated in a proposal.</p>
      </section>

      <section className="section local-proof-section">
        <div className="section-heading"><div><p className="kicker">Selected digital projects</p><h2>Transferable work across hospitality, tourism, e-commerce and service businesses.</h2></div><p>These are genuine digital projects, shown for the skills involved rather than as local workshop case studies.</p></div>
        <div className="local-project-links"><a href="https://totopasa.com/" target="_blank" rel="noreferrer">TOTOPASA — product discovery and shopping journey <Arrow /></a><a href="https://kathmandu.wedding/" target="_blank" rel="noreferrer">Kathmandu Wedding — premium enquiry journey <Arrow /></a><a href="https://shangri-laboutiquehotel.com/" target="_blank" rel="noreferrer">Shangri-La Boutique Hotel — direct guest discovery <Arrow /></a></div>
      </section>

      <section className="section faq-section">
        <div className="section-heading"><div><p className="kicker">FAQ</p><h2>Clear expectations from the start.</h2></div></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </section>

      <section className="section local-check-section" id="check">
        <div><p className="kicker">Free visibility check</p><h2>Want to know what customers see when they search for your business?</h2><p>Share your business name and website or Google listing. I&apos;ll review the basics and suggest practical improvements.</p><a href={`tel:${phone}`}>Prefer to call? +977 9865711752</a></div>
        <LocalBusinessCheckForm />
      </section>

      <footer>
        <Link className="brand" href="/"><span className="brand-mark">AD</span><span><strong>Alok Das</strong><small>Independent Digital Growth Partner</small></span></Link>
        <p>Local Business Growth · Hotel Growth · Websites · SEO · WhatsApp<br /><Link href="/privacy">Privacy & analytics</Link></p>
        <span>© 2026 Alok Das</span>
      </footer>
    </main>
  );
}

