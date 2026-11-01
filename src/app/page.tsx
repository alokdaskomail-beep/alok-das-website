import Image from "next/image";
import Link from "next/link";

const phone = "+9779865711752";
const email = "alokdaskomail@gmail.com";
const hotelWhatsappText =
  "Hi Alok, I would like you to check my hotel's online booking presence.\n\nMy property name is:\nCurrent website or booking link:\nMain challenge:";
const hotelWhatsappUrl = `https://wa.me/9779865711752?text=${encodeURIComponent(
  hotelWhatsappText,
)}`;
const businessWhatsappText =
  "Hello Alok, I would like to discuss digital growth support for my business.\n\nBusiness name:\nWebsite or social page:\nMain goal:\nBiggest current challenge:";
const businessWhatsappUrl = `https://wa.me/9779865711752?text=${encodeURIComponent(
  businessWhatsappText,
)}`;

type Project = {
  name: string;
  url: string;
  domain: string;
  type: string;
  result: string;
  measure: string;
  color: string;
  featured?: boolean;
  proofQuote?: string;
  proofQuoteBy?: string;
  proofStat?: string;
  proofLabel?: string;
};

const projects: Project[] = [
  {
    name: "Shangri-La Boutique Hotel",
    url: "https://shangri-laboutiquehotel.com/",
    domain: "shangri-laboutiquehotel.com",
    type: "Hospitality - Direct guest discovery",
    result:
      "A boutique hotel presence designed to communicate the stay experience and move guests toward direct contact.",
    measure: "Direct booking enquiries",
    proofStat: "Direct booking path",
    proofLabel: "Primary outcome supported",
    color: "green",
    featured: true,
  },
  {
    name: "Kathmandu Wedding",
    url: "https://kathmandu.wedding/",
    domain: "kathmandu.wedding",
    type: "Premium service - Destination weddings",
    result:
      "Premium positioning and an enquiry journey designed for couples planning from Nepal and abroad.",
    measure: "Qualified wedding enquiries",
    proofStat: "Qualified enquiry flow",
    proofLabel: "Premium service journey",
    color: "rose",
    featured: true,
  },
  {
    name: "Travel Maker South Asia",
    url: "https://mytravelmakers.com/",
    domain: "mytravelmakers.com",
    type: "Tourism - Travel website",
    result:
      "A tourism website connecting destinations, travel services and practical customer enquiries.",
    measure: "Trip and itinerary enquiries",
    proofStat: "Trip enquiry structure",
    proofLabel: "Travel customer action path",
    color: "amber",
    featured: true,
  },
  {
    name: "TOTOPASA",
    url: "https://totopasa.com/",
    domain: "totopasa.com",
    type: "E-commerce - Personalised gifting",
    result:
      "A clearer shopping journey built around product discovery, customer trust and direct action.",
    measure: "Product enquiries and completed purchases",
    proofStat: "Product discovery",
    proofLabel: "Shopping journey focus",
    color: "coral",
  },
  {
    name: "Yatra Beauty",
    url: "https://yatrabeauty.com/",
    domain: "yatrabeauty.com",
    type: "Beauty & wellness - Brand and shopping journey",
    result:
      "A beauty brand presence designed to make products easier to discover, understand and buy.",
    measure: "Product discovery and customer enquiries",
    proofStat: "Brand-to-product path",
    proofLabel: "Beauty customer journey",
    color: "green",
  },
  {
    name: "World Merchant Investment",
    url: "https://wmicapitale.com/",
    domain: "wmicapitale.com",
    type: "Investment - Corporate credibility",
    result:
      "A structured corporate presence that presents the organisation, its focus and its investment proposition with clarity.",
    measure: "Qualified investor conversations",
    proofStat: "Investor clarity",
    proofLabel: "Corporate credibility focus",
    color: "amber",
  },
];

const capabilities = [
  [
    "Direct booking websites",
    "Help guests compare your rooms, trust your property and enquire directly without returning to an OTA.",
  ],
  [
    "SEO & discoverability",
    "Help travellers find your property through Google, local search and useful room and destination content.",
  ],
  [
    "Google & Meta advertising",
    "Reach travellers with clear stay offers and measure the direct enquiries your campaigns generate.",
  ],
  [
    "Organized guest communication",
    "Reply templates and follow-up routines across Booking.com, Airbnb and WhatsApp help reduce missed guest enquiries.",
  ],
  [
    "Guest follow-up & daily routines",
    "Make pre-arrival information, guest requests and review follow-up easier to manage alongside daily property operations.",
  ],
];

const process = [
  ["Review", "Understand the offer, audience, current channels and path from discovery to action."],
  [
    "Prioritize",
    "Identify the website, SEO, advertising, automation or tracking improvements most likely to matter.",
  ],
  [
    "Build",
    "Implement the agreed website, campaign, content, automation or operations workflow.",
  ],
  [
    "Measure",
    "Track meaningful actions, learn from the response and improve what is working.",
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
    href: hotelWhatsappUrl,
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
    href: hotelWhatsappUrl,
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
    href: hotelWhatsappUrl,
  },
  {
    eyebrow: "Additional option - focused review",
    name: "Digital Growth Review",
    price: "From NPR 15,000",
    timeline:
      "Find the gaps between being discovered and receiving an enquiry. A focused paid review for properties or selected service businesses that need a deeper plan after the free check.",
    items: [],
    href: businessWhatsappUrl,
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
    href: businessWhatsappUrl,
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
    href: businessWhatsappUrl,
  },
];

const pricingClarifications = [
  "Pricing reflects strategic review, setup quality, and hands-on implementation. Platform fees, paid ads, photography, subscriptions, channel manager costs, and third-party charges are not included unless clearly stated in the proposal.",
  "For small fixes, single-platform support, or advisory-only needs, lighter support may be available after review.",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectProof({
  quote,
  quoteBy,
  stat,
  label,
}: {
  quote?: string;
  quoteBy?: string;
  stat?: string;
  label?: string;
}) {
  if (!quote && !stat) {
    return null;
  }

  return (
    <div className="project-proof">
      {stat ? (
        <>
          <b>{stat}</b>
          {label ? <span>{label}</span> : null}
        </>
      ) : (
        <>
          <q>{quote}</q>
          {quoteBy ? <span>{quoteBy}</span> : null}
        </>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://alokdas.com.np/#alok-das",
                name: "Alok Das",
                jobTitle: "Independent Digital Growth Partner",
                url: "https://alokdas.com.np/",
                image: "https://alokdas.com.np/images/alok-das.jpg",
                telephone: phone,
                email,
                worksFor: {
                  "@id": "https://alokdas.com.np/#digital-growth",
                },
                knowsAbout: [
                  "Website conversion",
                  "Google Ads",
                  "Meta Ads",
                  "SEO",
                  "WhatsApp journeys",
                  "Automation",
                  "Hotel distribution",
                ],
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://alokdas.com.np/#digital-growth",
                name: "Alok Das - Digital Growth Partner",
                url: "https://alokdas.com.np/",
                description:
                  "Practical visibility, direct booking paths and guest communication systems for independent hotels, guesthouses, hostels and tourism properties in Nepal. Selected service business projects also available.",
                founder: { "@id": "https://alokdas.com.np/#alok-das" },
                areaServed: ["Nepal", "Kathmandu"],
                serviceType: [
                  "Website design and development",
                  "SEO",
                  "Google Ads",
                  "Meta Ads",
                  "Organized guest communication",
                  "Automation",
                  "Hotel growth systems",
                ],
              },
            ],
          }),
        }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Alok Das home">
          <span className="brand-mark">AD</span>
          <span>
            <strong>Alok Das</strong>
            <small>Independent Digital Growth Partner</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <Link href="/hotel-growth">Hotel Growth</Link>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href={hotelWhatsappUrl}>
          Free hotel check <Arrow />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel">
            <a href="#services">Services</a>
            <Link href="/hotel-growth">Hotel Growth</Link>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a className="mobile-menu-cta" href={hotelWhatsappUrl}>
              Free hotel check <Arrow />
            </a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" /> For independent hotels & guesthouses in Nepal
          </p>
          <h1>
            Digital systems that help independent hotels get <em>more direct guests</em> and reduce OTA commissions.
          </h1>
          <p className="hero-intro">
            Practical guest communication, visibility and booking systems so hotel
            owners spend less time chasing messages and more time running
            their property.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={hotelWhatsappUrl}>
              Free visibility & communication check <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              Explore hotel growth support
            </Link>
          </div>
          <div className="hero-terms" aria-label="Service highlights">
            <span>Hotel OTA setup from NPR 35,000</span>
            <span>Direct booking paths & guest follow-up</span>
            <span>Independent hospitality in Nepal</span>
          </div>
          <div className="hero-proof">
            <strong>15+</strong>
            <span>
              years around hospitality, technology, marketing and practical
              digital systems.
            </span>
          </div>
        </div>

        <div className="system-card" aria-label="Connected hotel booking and guest communication system">
          <div className="system-top">
            <span>Hotel growth system</span>
            <i>Practical</i>
          </div>
          <div className="system-score">
            <span>Property goal</span>
            <strong>Discovery → Direct guests</strong>
            <small>Less OTA dependency. Clearer replies. More direct enquiries.</small>
          </div>
          <div className="system-flow">
            <div>
              <b>01</b>
              <span>Get found</span>
              <small>Google & booking channels</small>
            </div>
            <i>→</i>
            <div>
              <b>02</b>
              <span>Build trust</span>
              <small>Property website & reviews</small>
            </div>
            <i>→</i>
            <div>
              <b>03</b>
              <span>Book direct</span>
              <small>WhatsApp & follow-up</small>
            </div>
          </div>
          <div className="system-tags">
            {["Booking.com", "Airbnb", "Google", "WhatsApp", "Direct bookings"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Core outcomes">
        <span>Attract more direct guests</span>
        <span>Reduce OTA dependency</span>
        <span>Organize guest communication</span>
        <span>Track booking enquiries</span>
      </section>

      <section className="section hotel-specialization" id="hotel-growth">
        <div>
          <p className="kicker">Practical hospitality systems</p>
          <h2>
            Fewer missed messages. Less OTA dependency. More direct booking opportunities.
          </h2>
        </div>
        <div>
          <p>
            Guest enquiries arrive through Booking.com, Airbnb, WhatsApp and other
            channels, while OTA commissions reduce what you keep from each stay.
            I help independent hotels, guesthouses, hostels and tourism properties
            in Nepal organize replies and follow-up, improve visibility and build
            clear paths to book directly.
          </p>
          <div className="hotel-specialization-actions">
            <a className="button button-primary" href={hotelWhatsappUrl}>
              Free visibility & communication check <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              View dedicated hotel page
            </Link>
          </div>
          <small>
            Send your property name and a website or booking link. I&apos;ll check
            your visibility, direct booking path and how guest enquiries are
            handled, then identify practical improvements.
          </small>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Live businesses. Real digital systems.</h2>
          </div>
          <p>
            Hotel and tourism experience, supported by work across other sectors.
            Each project makes the business easier to find, trust and contact.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              className={`project-card ${project.featured ? "featured" : ""} ${
                project.color
              }`}
              href={project.url}
              key={project.name}
              rel="noreferrer"
              target="_blank"
            >
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="project-window">
                <span />
                <span />
                <span />
                <strong>{project.domain}</strong>
              </div>
              <p>{project.type}</p>
              <h3>{project.name}</h3>
              <div className="project-result">{project.result}</div>
              <ProjectProof
                quote={project.proofQuote}
                quoteBy={project.proofQuoteBy}
                stat={project.proofStat}
                label={project.proofLabel}
              />
              <div className="project-measure">
                <b>Success measure</b>
                <span>{project.measure}</span>
              </div>
              <span className="project-link">Visit live website ↗</span>
            </a>
          ))}
        </div>
        <div className="additional-work">
          <p>Additional live work</p>
          <a href="https://shivashrestha.org.np/" target="_blank" rel="noreferrer">
            Shiva Shrestha Foundation <Arrow />
          </a>
          <a href="https://minakshitraders.com/" target="_blank" rel="noreferrer">
            Minakshi Traders <Arrow />
          </a>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="services-intro">
          <p className="kicker">How I help</p>
          <h2>Practical systems that help guests find you, reach you and book.</h2>
          <p>
            Your listings, website and guest replies need to work together.
            I focus on the gaps that cost enquiries: unclear room information,
            missed follow-ups and no simple way to book directly.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading light">
          <div>
            <p className="kicker">A practical engagement</p>
            <h2>Start with the gaps costing your property enquiries.</h2>
          </div>
          <p>
            Every engagement starts with how guests discover your property,
            where messages arrive and what happens before they book.
          </p>
        </div>
        <div className="process-grid">
          {process.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section engagement-section" id="packages">
        <div className="section-heading">
          <div>
            <p className="kicker">Engagement options</p>
            <h2>Core hotel offers, from OTA foundations to direct booking growth.</h2>
          </div>
          <p>
            Hotel OTA Foundation, Hotel Booking Launch System and Hotel Growth
            Partnership are the core offers. Selected service businesses can
            also use the review, launch page and website options. Every engagement
            starts with a fixed proposal.
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
              <a className="package-link" href={pkg.href}>
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

      <section className="section about-section" id="about">
        <div className="about-photo">
          <Image
            alt="Alok Das, Hotel Growth and Digital Systems"
            fill
            sizes="(max-width: 800px) 76vw, 34vw"
            src="/images/alok-das.jpg"
          />
          <span className="portrait-ring" aria-hidden="true" />
          <small>
            <b>AD</b> Hospitality
            <br />+ technology
          </small>
        </div>
        <div className="about-copy">
          <p className="kicker">Work directly with me</p>
          <h2>
            A hands-on systems partner for independent hospitality owners.
          </h2>
          <p>
            I&apos;m Alok Das. I have spent more than 15 years working around
            hospitality, technology, marketing and digital systems. I help
            independent properties in Nepal build direct booking paths and
            practical guest communication routines. I also take on selected
            website and enquiry-system projects for other service businesses.
          </p>
          <div className="about-facts">
            <span>Based in Nepal</span>
            <span>Available for remote work</span>
            <span>Focused on independent hospitality</span>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="kicker">A low-risk first step</p>
          <h2>Find the gaps in your visibility and guest communication.</h2>
          <p>
            Send your property name, website or booking link, and tell me where
            guest messages arrive. The free check identifies practical ways to
            improve replies, strengthen direct booking paths and reduce OTA dependency.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-light" href={hotelWhatsappUrl}>
            Get your free hotel check <Arrow />
          </a>
          <Link href="/hotel-growth">See how hotel growth support works</Link>
          <a href={`tel:${phone}`}>Call Alok: +977 9865711752</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">AD</span>
          <span>
            <strong>Alok Das</strong>
            <small>Independent Digital Growth Partner</small>
          </span>
        </a>
        <p>
          Hotel visibility - Direct booking paths - Guest communication
          <br />
          <a href="/privacy">Privacy & analytics</a>
        </p>
        <span>© 2026 Alok Das</span>
      </footer>

      <a
        className="floating-whatsapp"
        href={hotelWhatsappUrl}
        aria-label="Get a free hotel check on WhatsApp"
      >
        <span>WA</span>
        <strong>Free hotel check</strong>
      </a>
    </main>
  );
}
