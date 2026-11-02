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
      "Team workshop: NPR 8,000 per property, 2–3 hours plus two scheduled follow-up calls within 14 days. Nepali or English, remote or on-site by arrangement.",
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
    text: "For existing users: one 2–3-hour session on agreed topics, plus two scheduled 20-minute follow-up calls within 14 days. NPR 8,000 per property/team.",
  },
  {
    title: "Several practical sessions",
    text: "Work through a wider set of topics over several sessions, with time to practise and review what participants have applied to their property’s setup.",
  },
  {
    title: "On-site, online or group learning",
    text: "Remote across Nepal or on-site by arrangement. Open workshops have up to 10 participants. On-site property-team sessions have no fixed participant cap; the practice format is agreed beforehand.",
  },
];

const faqs = [
  ["Who can join?", "Property owners, managers, front-desk and reservation staff can join. Individuals who are not currently employed by a property are welcome to enquire too. The topics and practical work are agreed around participants’ experience and available account access."],
  ["Is there a participant limit?", "Open workshops have up to 10 participants. On-site property-team training has no fixed participant cap; we agree on a suitable format and may split practice sessions for a large team."],
  ["Can you travel outside Kathmandu Valley?", "Yes, by arrangement. The client arranges or reimburses transport and accommodation, with any travel-time fee agreed in advance. Groups can share these expenses. Remote sessions are also available."],
  ["What are the payment terms?", "Pay 50% in advance to confirm training, with the balance at completion. Topics, timing, travel, any venue costs and the final payable amount are agreed before booking."],
  ["Who teaches the training?", "Alok Das teaches personally. Training can be delivered in Nepali, English or a combination of both, depending on the participants."],
  ["Will we practise on our own property accounts?", "Yes. Practical learning is built around your property’s accounts and existing tools where access is available. For individual learners, suitable practical work is discussed before confirming the program."],
  ["How long is the program?", "Existing users can book a focused 2–3-hour workshop. Beginners receive a quotation for several sessions, with topics and dates agreed after a needs assessment."],
  ["How much does training cost?", "A focused team workshop costs NPR 8,000 per property. Scheduled open workshops cost NPR 2,500 per participant, up to 10 participants, subject to announced dates and minimum enrolment. Beginner programs are quoted separately. Travel and any venue costs are agreed in the quote."],
  ["Is follow-up support available?", "The NPR 8,000 team workshop includes two scheduled 20-minute follow-up calls within 14 days. This covers questions on the agreed training topics. Further sessions or account implementation are quoted separately; other programs state their own follow-up allowance."],
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
          <p>A focused team workshop costs NPR 8,000 per property: 2–3 hours, plus two scheduled 20-minute follow-up calls within 14 days. Work with your own accounts and existing tools where access is available.</p>
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
          <p>Choose a focused team workshop or enquire about a scheduled open workshop. Beginners receive a quotation based on their starting point and required sessions.</p>
        </div>
        <div className="engagement-grid">
          <article className="engagement-featured"><p>For existing users</p><h3>Practical Team Workshop</h3><div className="package-price"><small>Per property / team</small><strong>NPR 8,000</strong><span>One 2–3-hour session on agreed topics.</span></div><ul><li>Practice on your property accounts</li><li>Nepali or English; taught personally by Alok</li><li>Two scheduled 20-minute follow-up calls within 14 days</li><li>No fixed on-site team-size cap; practice format agreed beforehand</li></ul><a className="package-link" href={trainingWhatsappUrl}>Discuss team training <Arrow /></a></article>
          <article><p>When a date is announced</p><h3>Open Group Workshop</h3><div className="package-price"><small>Per participant</small><strong>NPR 2,500</strong><span>A scheduled 2–3-hour workshop with up to 10 participants.</span></div><p>Dates, minimum enrolment, topics, venue and any follow-up allowance are confirmed before payment. Private account correction is excluded.</p><a className="package-link" href={trainingWhatsappUrl}>Ask about upcoming workshops <Arrow /></a></article>
          <article><p>For beginners or wider needs</p><h3>Several Practical Sessions</h3><div className="package-price"><small>Tailored program</small><strong>Custom quotation</strong><span>Learn step by step, with time to practise between sessions.</span></div><p>Session count, subjects, exercises and support are agreed after discussing your current knowledge and property setup.</p><a className="package-link" href={trainingWhatsappUrl}>Plan my training <Arrow /></a></article>
        </div>
        <div className="service-terms"><h3>Training terms</h3><p className="package-note">50% advance to confirm; balance at completion. Topics and available account access are agreed beforehand. Training does not include full listing setup or account correction.</p><p className="package-note">Kathmandu Valley on-site visits are included only where stated in the quote. Outside the Valley, clients arrange or reimburse transport and accommodation; any travel-time fee is agreed in advance. Groups may share travel costs.</p><p className="package-note">Venue and paid-tool costs, if needed, are agreed separately. Follow-up is limited to the booked program; additional work is quoted. The quote states applicable taxes and the final payable amount.</p></div>
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

