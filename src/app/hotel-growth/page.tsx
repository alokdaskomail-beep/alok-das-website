import type { Metadata } from "next";
import Link from "next/link";

const phone = "+9779865711752";
const email = "alokdaskomail@gmail.com";
const trainingWhatsappUrl = `https://wa.me/9779865711752?text=${encodeURIComponent(
  "Hello Alok, I would like to enquire about hotel training.\n\nName / property:\nLocation:\nRole: Owner / Manager / Staff / Individual learner\nNumber of participants:\nTopics of interest:\nPreferred format: On-site / Online / Group workshop\nPreferred dates:",
)}`;

export const metadata: Metadata = {
  title: "Practical Hotel & OTA Training in Nepal | Alok Das",
  description:
    "Practical training for hotel owners, managers, front-desk and reservation staff, and individual learners. OTA management, websites, SEO, guest communication and automation. Taught personally by Alok Das in Nepali or English.",
  alternates: { canonical: "/hotel-training" },
  openGraph: {
    title: "Practical Hotel & OTA Training in Nepal",
    description:
      "Focused workshops or practical sessions in OTA management, websites, SEO and guest communication. On-site, online or group formats, with follow-up support.",
    url: "https://alokdas.com.np/hotel-training",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Practical hotel training with Alok Das" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical Hotel & OTA Training in Nepal",
    description: "Learn to manage booking channels and guest communication. Taught by Alok Das in Nepali or English.",
    images: ["/og.png"],
  },
};

const modules = [
  {
    title: "OTA setup and daily management",
    text: "Understand property listings on Booking.com, Airbnb and other relevant OTAs. Practise updating room information, amenities, policies and listing content so guests get a clear picture of the stay.",
  },
  {
    title: "Room rates and availability",
    text: "Work through room types, rates, availability calendars and booking information. Build a practical routine for checking the details your property publishes across its channels.",
  },
  {
    title: "Property website updates",
    text: "Learn to keep room descriptions, photos, property information and enquiry details current on your existing website. Exercises are tailored to the website tools your property uses.",
  },
  {
    title: "SEO and Google visibility basics",
    text: "Understand clear page titles, useful room and location content, and consistent property information. Learn which routine updates your team can manage to support search visibility.",
  },
  {
    title: "Guest communication and enquiry handling",
    text: "Practise clear replies to enquiries, common questions and booking requests across Booking.com, Airbnb, WhatsApp and other channels. Agree when staff should follow up or refer a question to the property manager.",
  },
  {
    title: "Message templates and practical automation",
    text: "Prepare reusable replies, pre-arrival details, check-in instructions and follow-up messages. Learn how to configure and review automated messages where your platforms and tools support them.",
  },
  {
    title: "Preparing rooms and managing listing photos",
    text: "Learn how to prepare rooms before a property shoot, identify useful room views and keep listing photos current. Professional photography is also available as a separate service.",
  },
];

const formats = [
  {
    title: "Focused workshop",
    text: "Concentrate on a specific need, such as OTA upkeep, guest replies or message templates. The topics and length are agreed around the participants’ starting point.",
  },
  {
    title: "Several practical sessions",
    text: "Work through a wider set of topics over several sessions, with time to practise and review what participants have applied to their property’s setup.",
  },
  {
    title: "On-site, online or group learning",
    text: "Arrange training at your property, through live online sessions or in a group setting. Location, dates and delivery format are confirmed when planning the program.",
  },
];

const faqs = [
  ["Who can join?", "Property owners, managers, front-desk and reservation staff can join. Individuals who are not currently employed by a property are welcome to enquire too. The topics and practical work are agreed around participants’ experience and available account access."],
  ["Who teaches the training?", "Alok Das teaches personally. Training can be delivered in Nepali, English or a combination of both, depending on the participants."],
  ["Will we practise on our own property accounts?", "Yes. Practical learning is built around your property’s accounts and existing tools where access is available. For individual learners, suitable practical work is discussed before confirming the program."],
  ["How long is the program?", "You can choose a focused workshop or several practical sessions. Duration, topics and dates are agreed after discussing your goals, current skills and preferred format."],
  ["How much does training cost?", "Pricing can be per person, per property or team, or through a custom quotation. Request a quote with your participant count, topics, location and preferred format; the scope and fee are agreed before booking."],
  ["Is follow-up support available?", "Yes. Follow-up support helps participants apply what they have learned. The support scope and period are agreed as part of the training arrangement."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HotelTrainingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Practical Hotel and OTA Training",
        description: "Personally taught workshops and practical sessions for property owners, managers, staff and individual learners, covering OTAs, websites, SEO, guest communication and automation.",
        url: "https://alokdas.com.np/hotel-training",
        provider: { "@type": "Person", name: "Alok Das", url: "https://alokdas.com.np/" },
        areaServed: "Nepal",
        availableLanguage: ["Nepali", "English"],
        serviceType: "Hospitality staff and property owner training",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question", name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }) }} />

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Alok Das home">
          <span className="brand-mark">AD</span>
          <span><strong>Alok Das</strong><small>Independent Digital Growth Partner</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <a href="#topics">Topics</a>
          <a href="#formats">Formats</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="header-cta" href={trainingWhatsappUrl}>Enquire about training <Arrow /></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
          <div className="mobile-menu-panel">
            <Link href="/">Home</Link>
            <a href="#topics">Topics</a>
            <a href="#formats">Formats</a>
            <a href="#pricing">Pricing</a>
            <Link href="/hotel-growth">Hotel growth services</Link>
            <a className="mobile-menu-cta" href={trainingWhatsappUrl}>Enquire about training <Arrow /></a>
          </div>
        </details>
      </header>

      <section className="hotel-page-hero">
        <div>
          <p className="eyebrow"><span aria-hidden="true" /> Practical hotel & OTA training in Nepal</p>
          <h1>Run your property’s booking channels with confidence.</h1>
          <p>Learn the practical work behind OTA listings, website updates, search visibility and guest communication. For property owners, managers, front-desk and reservation staff, and individual learners.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={trainingWhatsappUrl}>Enquire about training <Arrow /></a>
            <a className="button button-secondary" href="#topics">Explore training topics</a>
          </div>
          <div className="hero-terms" aria-label="Training highlights">
            <span>Taught personally by Alok Das</span><span>Nepali and/or English</span><span>Practical learning & follow-up support</span>
          </div>
        </div>
        <aside className="hotel-audit-card">
          <span>Built around your learning needs</span>
          <h2>Learn it. Practise it. Use it at your property.</h2>
          <p>Choose a focused workshop or several practical sessions. Work with your own property accounts and existing tools where access is available, with follow-up support to help you apply the learning.</p>
        </aside>
      </section>

      <section className="section hotel-specialization">
        <div><p className="kicker">Who it is for</p><h2>Practical skills for the people running your property.</h2></div>
        <div>
          <p>Owners and managers can build a clearer understanding of their online setup. Front-desk and reservation teams can practise the daily tasks behind listings, enquiries and guest messages.</p>
          <p>Individual learners are also welcome. Before confirming training, we discuss your starting point, goals and the accounts or tools available for practical exercises.</p>
        </div>
      </section>

      <section className="section services-section hotel-services" id="topics">
        <div className="services-intro">
          <p className="kicker">What you can learn</p><h2>Work on the tasks your property needs every day.</h2>
          <p>All of these subjects are available. Choose a focused set of topics or plan several sessions around the wider booking journey.</p>
        </div>
        <div className="capability-list">
          {modules.map((module, index) => <article key={module.title}>
            <span>{String(index + 1).padStart(2, "0")}</span><h3>{module.title}</h3><p>{module.text}</p>
          </article>)}
        </div>
      </section>

      <section className="section engagement-section" id="formats">
        <div className="section-heading">
          <div><p className="kicker">Flexible delivery</p><h2>A workshop or practical sessions, planned around you.</h2></div>
          <p>On-site, live online and group formats are available. We agree on the location, schedule and participant needs before confirming the arrangement.</p>
        </div>
        <div className="engagement-grid">
          {formats.map((format) => <article key={format.title}><p>Training format</p><h3>{format.title}</h3><p>{format.text}</p><a className="package-link" href={trainingWhatsappUrl}>Discuss this format <Arrow /></a></article>)}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading light">
          <div><p className="kicker">How training works</p><h2>From your current setup to confident daily practice.</h2></div>
          <p>You learn directly with Alok Das, in Nepali, English or both, with practical exercises and follow-up support.</p>
        </div>
        <div className="process-grid">
          <article><span>01</span><h3>Discuss your goals</h3><p>Share your role, property setup, current challenges and the skills you want to develop.</p></article>
          <article><span>02</span><h3>Agree the program</h3><p>Confirm topics, delivery format, participants, duration, fees and follow-up support.</p></article>
          <article><span>03</span><h3>Practise together</h3><p>Work through relevant tasks using the property accounts and tools available to you.</p></article>
          <article><span>04</span><h3>Apply the learning</h3><p>Use the agreed follow-up support to discuss questions as you put the training into practice.</p></article>
        </div>
      </section>

      <section className="section engagement-section" id="pricing">
        <div className="section-heading">
          <div><p className="kicker">Training arrangements</p><h2>Pricing that fits your participants and scope.</h2></div>
          <p>Training is available per person, per property/team or by custom quotation. Share your needs for an agreed scope and fee before booking.</p>
        </div>
        <div className="engagement-grid">
          <article><p>For individual learners</p><h3>Per person</h3><p>Discuss your experience, preferred subjects and suitable individual or group learning arrangements.</p><a className="package-link" href={trainingWhatsappUrl}>Ask for a quote <Arrow /></a></article>
          <article className="engagement-featured"><p>For owners and property teams</p><h3>Per property / team</h3><p>Plan training around your own setup, staff responsibilities and daily booking and guest communication tasks.</p><a className="package-link" href={trainingWhatsappUrl}>Discuss team training <Arrow /></a></article>
          <article><p>For a tailored program</p><h3>Custom quotation</h3><p>Combine topics and delivery formats into a focused workshop or several practical sessions.</p><a className="package-link" href={trainingWhatsappUrl}>Plan your program <Arrow /></a></article>
        </div>
        <p className="package-note">Topics, participants, location, session length and follow-up support are confirmed in the training proposal.</p>
      </section>

      <section className="section faq-section">
        <div className="section-heading"><div><p className="kicker">Before you book</p><h2>Training questions, answered.</h2></div></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </section>

      <section className="final-cta">
        <div><p className="kicker">Plan your training</p><h2>What would you like your team to handle more confidently?</h2><p>Send your role or property name, participant count, topics of interest and preferred format. I’ll help shape a practical training arrangement.</p></div>
        <div className="cta-actions">
          <a className="button button-light" href={trainingWhatsappUrl}>Enquire about training <Arrow /></a>
          <a href={`tel:${phone}`}>Call Alok: +977 9865711752</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </section>
      <footer>
        <Link className="brand" href="/"><span className="brand-mark">AD</span><span><strong>Alok Das</strong><small>Independent Digital Growth Partner</small></span></Link>
        <p><Link href="/hotel-growth">Hotel growth services</Link><br /><Link href="/privacy">Privacy & analytics</Link></p><span>© 2026 Alok Das</span>
      </footer>
      <a className="floating-whatsapp" href={trainingWhatsappUrl} aria-label="Enquire about hotel training on WhatsApp"><span>WA</span><strong>Training enquiry</strong></a>
    </main>
  );
}
