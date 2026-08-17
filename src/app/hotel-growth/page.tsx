import Link from "next/link";

const phone = "+9779865711752";
const hotelWhatsappText =
  "Hi Alok, I would like you to check my hotel's online booking presence.\n\nMy property name is:\nCurrent website or booking link:\nMain challenge:";
const hotelWhatsappUrl = `https://wa.me/9779865711752?text=${encodeURIComponent(
  hotelWhatsappText,
)}`;

export const metadata = {
  title: "Hotel OTA Setup, Marketing & Direct Booking Support in Nepal | Alok Das",
  description:
    "Help for hotels, hostels and guesthouses in Nepal with OTA setup, Booking.com, Agoda, Expedia, Airbnb, Hostelworld, hotel websites, SEO, ads and guest automation.",
  alternates: {
    canonical: "/hotel-growth",
  },
  openGraph: {
    title: "Hotel OTA Setup, Marketing & Direct Booking Support in Nepal",
    description:
      "OTA setup, direct-booking websites, hotel SEO, ads and guest automation for hotels, hostels and guesthouses in Nepal.",
    url: "https://alokdas.com.np/hotel-growth",
    type: "website",
  },
};

const auditAreas = [
  "Booking.com, Agoda, Expedia, Airbnb, Hostelworld and other relevant booking channels",
  "Website, Google Business Profile, local SEO and direct enquiry path",
  "Room information, amenities, photos, policies, promotions and listing consistency",
];

const services = [
  {
    title: "Hotel Distribution Setup",
    text: "Audit current OTA presence, identify missing relevant booking channels, and improve property information, room types, amenities, policies, photos, rate plans and promotions.",
  },
  {
    title: "Turn Your Website Into a Booking Channel",
    text: "OTAs are important, but your property should also own a channel where guests can discover you, trust you and contact or book with you directly.",
  },
  {
    title: "SEO & Google Visibility",
    text: "Build structured, Google-friendly pages for your rooms, location and destination searches around Kathmandu, Thamel, Nagarkot and other relevant markets.",
  },
  {
    title: "Reach Travelers Beyond OTAs",
    text: "Use Google Search, Meta campaigns, landing pages and conversion tracking to support direct enquiries, calls, WhatsApp conversations and brand demand.",
  },
  {
    title: "Hotel Operations & Guest Automation",
    text: "Plan practical workflows for internal reservations, check-in and check-out, consumed guest services, housekeeping tasks, review reminders and repeated messages.",
  },
  {
    title: "Automate Repetitive Guest Communication",
    text: "Create practical workflows for pre-arrival information, check-in instructions, service reminders, check-out messages, thank-you notes and review reminders.",
  },
];

const searchQuestions = [
  [
    "How can I list my hotel on more OTAs?",
    "Start by checking where your property is already visible, where it is missing, and whether your photos, room details, policies, prices and promotions are consistent across major channels.",
  ],
  [
    "Why is my hotel not getting enough online bookings?",
    "The issue may be limited distribution, weak listing content, poor photos, unclear room information, pricing gaps, weak Google visibility, low review flow or no direct-booking path.",
  ],
  [
    "Do I need only OTA setup or a hotel website too?",
    "OTAs help you reach travelers, but a hotel website gives your property its own trusted channel for Google searches, direct enquiries, WhatsApp conversations and long-term SEO value.",
  ],
  [
    "Can hotel marketing connect with daily operations?",
    "Yes. Booking visibility works better when guest communication, housekeeping reminders, service records, review requests and internal booking workflows are also organized.",
  ],
];

const process = [
  ["Check", "Audit the property's OTA, Google, website and direct-booking presence."],
  [
    "Prioritize",
    "Identify the channels and improvements most likely to matter for that specific property.",
  ],
  [
    "Build & Optimize",
    "Configure listings, website, tracking, campaigns and automations included in the agreed scope.",
  ],
  [
    "Improve",
    "Review performance and continue optimizing under an optional monthly plan.",
  ],
];

const packages = [
  {
    eyebrow: "Strategy review",
    name: "Digital Growth Review",
    price: "From NPR 15,000",
    timeline:
      "A focused review of the business offer, website, visibility, customer journey, and priority digital growth opportunities.",
    items: [],
  },
  {
    eyebrow: "Focused launch",
    name: "Launch Page",
    price: "From NPR 45,000",
    timeline:
      "A focused conversion page for one offer, campaign, service, or booking journey. Includes mobile-first design, WhatsApp/enquiry CTA, analytics, and basic SEO setup.",
    items: [
      "One conversion-focused page",
      "Mobile-first design and CTA path",
      "Analytics and basic SEO foundation",
    ],
  },
  {
    eyebrow: "Most common",
    name: "Business Website",
    price: "From NPR 95,000",
    timeline:
      "A conversion-focused website with core pages, clear enquiry journey, SEO foundation, analytics, and launch support.",
    items: [
      "Core business pages",
      "Clear enquiry journey",
      "SEO, analytics and launch support",
    ],
    featured: true,
  },
  {
    eyebrow: "Hotel setup",
    name: "Hotel OTA Foundation",
    price: "From NPR 35,000",
    timeline:
      "Setup or optimization support across selected major booking channels. Exact scope depends on platform requirements, content readiness, room/rate complexity, and approval status.",
    items: [
      "Selected major booking channels",
      "Listing content and structure support",
      "Platform requirements reviewed before scope",
    ],
  },
  {
    eyebrow: "Hotel launch",
    name: "Hotel Booking Launch System",
    price: "From NPR 75,000",
    timeline:
      "A practical launch package for hotels, guesthouses, apartments, and independent properties. Includes OTA setup, Airbnb/listing optimization, Google visibility, guest message templates, room/rate structure, and direct inquiry improvements.",
    items: [
      "OTA and Airbnb/listing optimization",
      "Google visibility and direct inquiry path",
      "Guest templates and room/rate structure",
    ],
  },
  {
    eyebrow: "Ongoing support",
    name: "Hotel Growth Partnership",
    price: "From NPR 35,000/month",
    timeline:
      "Ongoing support for visibility, OTA updates, pricing/review support, website improvements, reporting, and guest communication workflows.",
    items: [
      "Visibility and OTA updates",
      "Pricing, review and reporting support",
      "Website and guest workflow improvements",
    ],
  },
];

const pricingClarifications = [
  "Pricing reflects strategic review, setup quality, and hands-on implementation. Platform fees, paid ads, photography, subscriptions, channel manager costs, and third-party charges are not included unless clearly stated in the proposal.",
  "For small fixes, single-platform support, or advisory-only needs, lighter support may be available after review.",
];

const faqs = [
  [
    "Which OTA platforms can you help with?",
    "Depending on the property, the work can include setup or optimization guidance for major platforms such as Booking.com, Agoda, Expedia, Airbnb, Hostelworld, Trip.com, MakeMyTrip, Goibibo and other relevant channels. Platform eligibility and approval remain controlled by each platform.",
  ],
  [
    "Are you an official partner of Booking.com, Agoda or other OTAs?",
    "No. This service is setup and optimization support for major booking platforms where appropriate. It does not claim official partnership or agency status with any OTA.",
  ],
  [
    "Is this only OTA setup?",
    "No. OTA setup can be the first step, but the broader work can include direct-booking websites, SEO, Google and Meta advertising, guest communication automation and hotel operations workflows.",
  ],
  [
    "Do you guarantee bookings or rankings?",
    "No. The work focuses on improving visibility, presentation, direct enquiry paths, tracking and repeatable systems. Results depend on the property, market, pricing, reviews, content and execution.",
  ],
  [
    "What do you need for the free check?",
    "Send your hotel name and any current website or booking link. The first check is designed to identify practical gaps and priority opportunities.",
  ],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HotelGrowthPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Hotel Distribution, Direct Booking & Growth Systems",
            provider: {
              "@type": "Person",
              name: "Alok Das",
              url: "https://alokdas.com.np/",
            },
            areaServed: ["Nepal", "Kathmandu", "Thamel"],
            serviceType: [
              "OTA setup Nepal",
              "Booking.com hotel setup Nepal",
              "Agoda hotel setup Nepal",
              "Hotel direct booking Nepal",
              "Hotel marketing Nepal",
              "Hotel website Nepal",
              "Hotel SEO Nepal",
              "Hotel booking system Nepal",
            ],
            url: "https://alokdas.com.np/hotel-growth",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          }),
        }}
      />

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Alok Das home">
          <span className="brand-mark">AD</span>
          <span>
            <strong>Alok Das</strong>
            <small>Independent Digital Growth Partner</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="header-cta" href={hotelWhatsappUrl}>
          Check My Hotel <Arrow />
        </a>
      </header>

      <section className="hotel-page-hero">
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" /> Hotel marketing, OTA setup and direct bookings
          </p>
          <h1>Hotel Distribution, Direct Booking & Growth Systems</h1>
          <p>
            For independent hotels, hostels, guesthouses and resorts that want
            to reach more travelers, reduce repetitive work and build stronger
            direct channels.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={hotelWhatsappUrl}>
              Check My Hotel - Free <Arrow />
            </a>
            <a className="button button-secondary" href={`tel:${phone}`}>
              Call Alok
            </a>
          </div>
        </div>
        <aside className="hotel-audit-card">
          <span>Free intro check</span>
          <h2>Where is your property visible today?</h2>
          <p>
            Send your hotel name. I&apos;ll check where your property currently
            appears online and identify practical opportunities to improve its
            booking visibility.
          </p>
        </aside>
      </section>

      <section className="section missing-bookings">
        <div className="section-heading">
          <div>
            <p className="kicker">Are you missing bookings?</p>
            <h2>Your next guest may be searching somewhere your hotel is not visible.</h2>
          </div>
          <p>
            Travelers compare properties across Booking.com, Agoda, Expedia,
            Airbnb, Hostelworld, Trip.com, Google, Maps, social media and hotel
            websites. Being listed somewhere is not the same as being well
            distributed.
          </p>
        </div>
        <div className="audit-grid">
          {auditAreas.map((area, index) => (
            <article key={area}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{area}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section search-questions">
        <div className="section-heading">
          <div>
            <p className="kicker">Search questions hotel owners ask</p>
            <h2>Clear answers for properties trying to improve online bookings.</h2>
          </div>
          <p>
            These are the practical questions behind most hotel growth work:
            where the property appears, how it is presented, and what happens
            after the guest enquiry arrives.
          </p>
        </div>
        <div className="question-grid">
          {searchQuestions.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section hotel-services" id="services">
        <div className="services-intro">
          <p className="kicker">Connected services</p>
          <h2>Distribution, direct acquisition and operations should work together.</h2>
          <p>
            The work can start with a focused OTA foundation, then expand into
            website, SEO, advertising, guest communication and operations
            workflows as the property needs it.
          </p>
        </div>
        <div className="capability-list">
          {services.map((service, index) => (
            <article key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading light">
          <div>
            <p className="kicker">Process</p>
            <h2>From current presence to practical implementation.</h2>
          </div>
          <p>
            The goal is not to hand over a report and disappear. The work moves
            from visibility gaps to an agreed setup, optimization or care plan.
          </p>
        </div>
        <div className="process-grid">
          {process.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <div>
          <p className="kicker">Experience</p>
          <h2>Built From 15+ Years Around Hospitality</h2>
        </div>
        <div>
          <p>
            I have spent more than 15 years working around hospitality, hotel
            technology and digital systems. That means I approach hotel
            marketing differently: the job is not simply to run ads or build a
            website. Distribution, rates, guest communication, operations and
            direct acquisition need to work together.
          </p>
          <p>
            I have also worked on hotel operations system ideas for reservations,
            check-in and check-out, consumed services, housekeeping, guest
            reminders and review automation. A public demo can be added later,
            but the workflow understanding already informs the hotel growth
            service.
          </p>
          <div className="experience-list" aria-label="Properties and hospitality work">
            {[
              "Shangri-La",
              "Pomelo",
              "Alchemy Bed and Breakfast",
              "Hotel Sunflower",
              "Greenland Nagarkot",
              "Sauraha Safari",
              "Silver Home",
              "Funky Monkey",
            ].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section engagement-section hotel-pricing" id="pricing">
        <div className="section-heading">
          <div>
            <p className="kicker">Pricing starting points</p>
            <h2>Choose the level of support your property needs now.</h2>
          </div>
          <p>
            Start with a practical review, focused setup or full launch system.
            After review, the final proposal reflects your property, channels,
            content readiness and commercial priorities.
          </p>
        </div>
        <div className="engagement-grid">
          {packages.map((pkg) => (
            <article
              className={pkg.featured ? "engagement-featured" : ""}
              key={pkg.name}
            >
              <p>{pkg.eyebrow}</p>
              <h3>{pkg.name}</h3>
              <div className="package-price">
                <small>Starting at</small>
                <strong>{pkg.price}</strong>
                <span>{pkg.timeline}</span>
              </div>
              {pkg.items.length > 0 ? (
                <ul>
                  {pkg.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <a className="package-link" href={hotelWhatsappUrl}>
                Ask about this <Arrow />
              </a>
            </article>
          ))}
        </div>
        {pricingClarifications.map((note) => (
          <p className="package-note" key={note}>
            {note}
          </p>
        ))}
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <div>
            <p className="kicker">FAQ</p>
            <h2>Clear expectations before the first conversation.</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="kicker">Free first step</p>
          <h2>Check where your hotel is missing online.</h2>
          <p>
            Send your property name and current booking link. I&apos;ll identify
            practical visibility, presentation and direct-booking opportunities.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-light" href={hotelWhatsappUrl}>
            Check My Hotel - Free <Arrow />
          </a>
          <a href={`tel:${phone}`}>Call Alok: +977 9865711752</a>
        </div>
      </section>
    </main>
  );
}
