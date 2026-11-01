import Link from "next/link";

const phone = "+9779865711752";
const hotelWhatsappText =
  "Hi Alok, I would like you to check my hotel's online booking presence.\n\nMy property name is:\nCurrent website or booking link:\nMain challenge:";
const hotelWhatsappUrl = `https://wa.me/9779865711752?text=${encodeURIComponent(
  hotelWhatsappText,
)}`;

export const metadata = {
  title: "Hotel Direct Bookings & Guest Communication Systems in Nepal | Alok Das",
  description:
    "Help independent hotels, guesthouses, hostels and tourism properties in Nepal reduce OTA dependency, build direct booking paths and organize guest communication. Free visibility and communication check.",
  alternates: {
    canonical: "/hotel-growth",
  },
  openGraph: {
    title: "Hotel Direct Bookings & Guest Communication Systems in Nepal",
    description:
      "More direct booking opportunities, less OTA dependency and clearer guest communication for independent hospitality properties in Nepal.",
    url: "https://alokdas.com.np/hotel-growth",
    type: "website",
  },
};

const auditAreas = [
  "Booking.com, Agoda, Expedia, Airbnb, Hostelworld and other relevant booking channels",
  "Website, Google Business Profile, local SEO and direct enquiry path",
  "Guest replies and follow-up across Booking.com, Airbnb, WhatsApp and other channels",
];

const services = [
  {
    title: "Hotel Distribution Setup",
    text: "Audit current OTA presence, identify missing relevant booking channels, and improve property information, room types, amenities, policies, photos, rate plans and promotions.",
  },
  {
    title: "Turn Your Website Into a Booking Channel",
    text: "Give guests a trusted place to view rooms and enquire or book directly. Growing this channel can reduce OTA dependency and commission costs over time.",
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
    title: "Organize Guest Messages & Follow-up",
    text: "Create reply templates and follow-up routines for Booking.com, Airbnb, WhatsApp and other channels. Make pre-arrival details, check-in instructions and review reminders easier to manage.",
  },
];

const searchQuestions = [
  [
    "How can I reduce OTA dependency and commissions?",
    "Keep relevant OTA listings working while building your own booking paths through your website, Google visibility and guest follow-up. As more guests book directly, fewer stays need to come through commission-based channels.",
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
    "How can I keep up with guest messages across channels?",
    "Start with clear responsibility for each channel, reusable replies and a routine for following up open enquiries. Practical workflows across Booking.com, Airbnb and WhatsApp help the team manage communication alongside daily operations.",
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
    eyebrow: "Core hotel offer - get found",
    name: "Hotel OTA Foundation",
    price: "From NPR 35,000",
    timeline:
      "Help the right guests find and trust your property on selected OTAs. Improve listing clarity and room information, with scope agreed around your channels, content, rate complexity and platform approvals.",
    items: [
      "Stronger presence on relevant booking channels",
      "Clear room details that support guest decisions",
      "Agreed scope based on platform requirements",
    ],
  },
  {
    eyebrow: "Core hotel offer - build direct bookings",
    name: "Hotel Booking Launch System",
    price: "From NPR 75,000",
    timeline:
      "Give guests a clearer path to book directly while strengthening your OTA presence. Connect listing improvements, Google visibility, room and rate clarity, and guest reply templates for independent properties in Nepal.",
    featured: true,
    items: [
      "Clearer OTA and Airbnb listings",
      "Google visibility and a direct booking path",
      "Guest reply templates and room/rate clarity",
    ],
  },
  {
    eyebrow: "Core hotel offer - ongoing growth",
    name: "Hotel Growth Partnership",
    price: "From NPR 35,000/month",
    timeline:
      "Build a stronger direct booking channel over time and reduce reliance on commission-based bookings. Ongoing support keeps visibility, OTA information, guest follow-up and booking enquiry reporting working together.",
    items: [
      "Consistent visibility and OTA information",
      "Pricing, reviews and enquiry reporting",
      "Direct booking and guest follow-up improvements",
    ],
  },
  {
    eyebrow: "Additional option - focused review",
    name: "Digital Growth Review",
    price: "From NPR 15,000",
    timeline:
      "Find the gaps between being discovered and receiving an enquiry. A focused paid review for properties or selected service businesses that need a deeper plan after the free check.",
    items: [],
  },
  {
    eyebrow: "Additional option - one offer",
    name: "Launch Page",
    price: "From NPR 45,000",
    timeline:
      "Give one stay offer, campaign or service a clear path to enquiry. A focused page helps visitors understand the offer and contact you through WhatsApp or an enquiry form.",
    items: [
      "One conversion-focused page",
      "Mobile-first design and CTA path",
      "Analytics and basic SEO foundation",
    ],
  },
  {
    eyebrow: "Additional option - service businesses",
    name: "Business Website",
    price: "From NPR 95,000",
    timeline:
      "Help prospective customers understand your services, trust your business and enquire. A website option for selected service businesses, with search foundations and launch support.",
    items: [
      "Core business pages",
      "Clear enquiry journey",
      "SEO, analytics and launch support",
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
    "Send your property name, a website or booking link, and the channels where guest messages arrive. The free check looks at visibility, direct booking paths and communication gaps.",
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
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel">
            <Link href="/">Home</Link>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a className="mobile-menu-cta" href={hotelWhatsappUrl}>
              Check My Hotel <Arrow />
            </a>
          </div>
        </details>
      </header>

      <section className="hotel-page-hero">
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" /> Practical systems for independent hospitality in Nepal
          </p>
          <h1>More direct bookings. Less OTA dependency. Clearer guest communication.</h1>
          <p>
            Help your independent hotel, guesthouse, hostel or tourism property
            in Nepal build direct booking paths and reduce OTA commissions.
            Organize guest communication across Booking.com, Airbnb, WhatsApp
            and other channels so fewer enquiries are missed.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={hotelWhatsappUrl}>
              Free visibility & communication check <Arrow />
            </a>
            <a className="button button-secondary" href={`tel:${phone}`}>
              Call Alok
            </a>
          </div>
        </div>
        <aside className="hotel-audit-card">
          <span>Free visibility & communication check</span>
          <h2>Where are guests finding you—and getting stuck?</h2>
          <p>
            Send your property name and website or booking link. I&apos;ll review
            how guests find you, how they can book directly and where guest
            replies or follow-ups may need attention.
          </p>
        </aside>
      </section>

      <section className="section missing-bookings">
        <div className="section-heading">
          <div>
            <p className="kicker">Are you missing bookings?</p>
            <h2>Missed enquiries and OTA commissions both cost your property.</h2>
          </div>
          <p>
            Travellers find you on Booking.com, Airbnb, Google and other channels,
            then ask questions through different inboxes. Slow replies can lose
            the enquiry. A clear direct booking path and practical follow-up
            routines help you rely less on commission-based bookings over time.
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
          <h2>Make it easier for guests to find you, get a reply and book directly.</h2>
          <p>
            Start with the gaps that affect bookings today. Connect clearer
            listings, direct booking paths and guest reply routines in a
            practical system your property can use every day.
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
            <h2>Three core hotel offers, matched to your next booking priority.</h2>
          </div>
          <p>
            Start with Hotel OTA Foundation, Hotel Booking Launch System or
            Hotel Growth Partnership. The free check helps identify the right
            starting point. Focused review and website options remain available
            for smaller needs and selected service businesses.
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
                <small>Investment</small>
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
          <h2>Get a free visibility & communication check.</h2>
          <p>
            Send your property name and a current website or booking link.
            I&apos;ll identify practical ways to improve visibility, organize
            guest follow-up and strengthen your direct booking path.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-light" href={hotelWhatsappUrl}>
            Free visibility & communication check <Arrow />
          </a>
          <a href={`tel:${phone}`}>Call Alok: +977 9865711752</a>
        </div>
      </section>
    </main>
  );
}
