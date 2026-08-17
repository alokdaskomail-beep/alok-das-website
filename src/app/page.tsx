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

const projects = [
  {
    name: "Shangri-La Boutique Hotel",
    url: "https://shangri-laboutiquehotel.com/",
    domain: "shangri-laboutiquehotel.com",
    type: "Hospitality - Direct guest discovery",
    result:
      "A boutique hotel presence designed to communicate the stay experience and move guests toward direct contact.",
    measure: "Direct booking enquiries",
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
    color: "amber",
  },
];

const capabilities = [
  [
    "Conversion-focused websites",
    "Clear positioning, stronger trust and simpler paths from visitor interest to enquiry, booking or purchase.",
  ],
  [
    "SEO & discoverability",
    "Technical foundations, local visibility and useful content that help the right customers find your business.",
  ],
  [
    "Google & Meta advertising",
    "Campaign structure, targeting, landing pages and conversion tracking built around real business outcomes.",
  ],
  [
    "WhatsApp customer journeys",
    "Structured conversations, enquiry prompts and follow-up workflows that make action easier.",
  ],
  [
    "Automation & operations workflows",
    "Practical systems for repetitive communication, internal tracking and smoother customer or guest handling.",
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
    eyebrow: "Strategy review",
    name: "Digital Growth Review",
    price: "From NPR 15,000",
    timeline:
      "A focused review of the business offer, website, visibility, customer journey, and priority digital growth opportunities.",
    items: [],
    href: businessWhatsappUrl,
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
    href: businessWhatsappUrl,
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
    href: businessWhatsappUrl,
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
    href: hotelWhatsappUrl,
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
    href: hotelWhatsappUrl,
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
    href: hotelWhatsappUrl,
  },
];

const pricingClarifications = [
  "Pricing reflects strategic review, setup quality, and hands-on implementation. Platform fees, paid ads, photography, subscriptions, channel manager costs, and third-party charges are not included unless clearly stated in the proposal.",
  "For small fixes, single-platform support, or advisory-only needs, lighter support may be available after review.",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
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
                  "Practical websites, SEO, advertising, WhatsApp journeys, automation and tracking for service businesses, with specialist hotel growth support.",
                founder: { "@id": "https://alokdas.com.np/#alok-das" },
                areaServed: ["Nepal", "Kathmandu", "Worldwide"],
                serviceType: [
                  "Website design and development",
                  "SEO",
                  "Google Ads",
                  "Meta Ads",
                  "WhatsApp customer journeys",
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
        <a className="header-cta" href={businessWhatsappUrl}>
          Discuss your business <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" /> Digital systems for service businesses and growing brands
          </p>
          <h1>
            Build a clearer digital path from <em>attention</em> to action.
          </h1>
          <p className="hero-intro">
            I help service businesses and independent properties build practical
            digital systems: websites, SEO, advertising, WhatsApp journeys,
            automation, tracking and operations workflows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={businessWhatsappUrl}>
              Discuss Your Business <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              Hotel Growth Support
            </Link>
          </div>
          <div className="hero-terms" aria-label="Service highlights">
            <span>Launch pages from NPR 45,000</span>
            <span>SEO, ads and WhatsApp journeys</span>
            <span>Specialist hotel growth practice</span>
          </div>
          <div className="hero-proof">
            <strong>15+</strong>
            <span>
              years around hospitality, technology, marketing and practical
              digital systems.
            </span>
          </div>
        </div>

        <div className="system-card" aria-label="Connected digital growth system">
          <div className="system-top">
            <span>Digital growth system</span>
            <i>Practical</i>
          </div>
          <div className="system-score">
            <span>Business goal</span>
            <strong>Attention → Action</strong>
            <small>Get found. Build trust. Make follow-up easier.</small>
          </div>
          <div className="system-flow">
            <div>
              <b>01</b>
              <span>Get found</span>
              <small>SEO, ads & channels</small>
            </div>
            <i>→</i>
            <div>
              <b>02</b>
              <span>Build trust</span>
              <small>Website & proof</small>
            </div>
            <i>→</i>
            <div>
              <b>03</b>
              <span>Take action</span>
              <small>WhatsApp & tracking</small>
            </div>
          </div>
          <div className="system-tags">
            {["Website", "SEO", "Ads", "WhatsApp", "Automation"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Core outcomes">
        <span>Get found by the right people</span>
        <span>Earn trust faster</span>
        <span>Make action easier</span>
        <span>Know what is working</span>
      </section>

      <section className="section hotel-specialization" id="hotel-growth">
        <div>
          <p className="kicker">Specialist hospitality practice</p>
          <h2>
            Specialized support for hotels, hostels, guesthouses and independent
            properties.
          </h2>
        </div>
        <div>
          <p>
            Your guests do not all search in the same place. I help independent
            hotels expand and improve their presence across relevant booking
            channels, strengthen direct bookings, and automate the repetitive
            work behind the guest journey.
          </p>
          <div className="hotel-specialization-actions">
            <a className="button button-primary" href={hotelWhatsappUrl}>
              Check My Hotel - Free <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              View dedicated hotel page
            </Link>
          </div>
          <small>
            Send me your hotel name. I&apos;ll check where your property
            currently appears online and identify practical opportunities to
            improve its booking visibility.
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
            Different industries, one consistent job: make the business easier
            to find, understand, trust and choose.
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
          <h2>Not isolated digital tasks. One connected path to growth.</h2>
          <p>
            A website cannot fix a weak offer. Advertising cannot rescue a
            confusing customer journey. I look at how the pieces work together,
            then focus effort where it can make the biggest commercial
            difference.
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
            <h2>Start with the business problem-not a list of deliverables.</h2>
          </div>
          <p>
            Every engagement begins by understanding the customer, the offer and
            the current path to action.
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
            <h2>Clear starting points, then deeper growth support where needed.</h2>
          </div>
          <p>
            Choose a practical starting point. After a short review, you receive
            a fixed proposal before work begins.
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
            A hands-on digital growth partner with a strong hospitality
            background.
          </h2>
          <p>
            I&apos;m Alok Das. I have spent more than 15 years working around
            hospitality, technology, marketing and digital systems. I work
            across strategy and implementation, connecting websites,
            advertising, SEO, WhatsApp, automation and measurement into a
            clearer commercial system.
          </p>
          <div className="about-facts">
            <span>Based in Nepal</span>
            <span>Available for remote work</span>
            <span>Hospitality specialization available</span>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="kicker">A low-risk first step</p>
          <h2>Let&apos;s find the clearest digital growth opportunity.</h2>
          <p>
            Send your website, social page or business goal. I&apos;ll help
            identify the clearest opportunity and the right starting point.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-light" href={businessWhatsappUrl}>
            Discuss Your Business <Arrow />
          </a>
          <Link href="/hotel-growth">Hotel owner? Get a free visibility check</Link>
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
          Websites - SEO - Ads - WhatsApp - Automation - Hotel Growth
          <br />
          <a href="/privacy">Privacy & analytics</a>
        </p>
        <span>© 2026 Alok Das</span>
      </footer>

      <a
        className="floating-whatsapp"
        href={hotelWhatsappUrl}
        aria-label="Discuss your business on WhatsApp"
      >
        <span>WA</span>
        <strong>Discuss your business</strong>
      </a>
    </main>
  );
}
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

const projects = [
  {
    name: "Shangri-La Boutique Hotel",
    url: "https://shangri-laboutiquehotel.com/",
    domain: "shangri-laboutiquehotel.com",
    type: "Hospitality - Direct guest discovery",
    result:
      "A boutique hotel presence designed to communicate the stay experience and move guests toward direct contact.",
    measure: "Direct booking enquiries",
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
    color: "coral",
  },
  {
    name: "Minakshi Traders",
    url: "https://minakshitraders.com/",
    domain: "minakshitraders.com",
    type: "Local services - Commercial SEO",
    result:
      "A search-ready service website that helps customers quickly understand, trust and contact the business.",
    measure: "Calls and service enquiries from search",
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
    color: "amber",
  },
];

const capabilities = [
  [
    "Conversion-focused websites",
    "Clear positioning, stronger trust and simpler paths from visitor interest to enquiry, booking or purchase.",
  ],
  [
    "SEO & discoverability",
    "Technical foundations, local visibility and useful content that help the right customers find your business.",
  ],
  [
    "Google & Meta advertising",
    "Campaign structure, targeting, landing pages and conversion tracking built around real business outcomes.",
  ],
  [
    "WhatsApp customer journeys",
    "Structured conversations, enquiry prompts and follow-up workflows that make action easier.",
  ],
  [
    "Automation & operations workflows",
    "Practical systems for repetitive communication, internal tracking and smoother customer or guest handling.",
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
    eyebrow: "Strategy review",
    name: "Digital Growth Review",
    price: "From NPR 15,000",
    timeline:
      "A focused review of the business offer, website, visibility, customer journey, and priority digital growth opportunities.",
    items: [],
    href: businessWhatsappUrl,
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
    href: businessWhatsappUrl,
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
    href: businessWhatsappUrl,
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
    href: hotelWhatsappUrl,
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
    href: hotelWhatsappUrl,
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
    href: hotelWhatsappUrl,
  },
];

const pricingClarifications = [
  "Pricing reflects strategic review, setup quality, and hands-on implementation. Platform fees, paid ads, photography, subscriptions, channel manager costs, and third-party charges are not included unless clearly stated in the proposal.",
  "For small fixes, single-platform support, or advisory-only needs, lighter support may be available after review.",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
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
                  "Practical websites, SEO, advertising, WhatsApp journeys, automation and tracking for service businesses, with specialist hotel growth support.",
                founder: { "@id": "https://alokdas.com.np/#alok-das" },
                areaServed: ["Nepal", "Kathmandu", "Worldwide"],
                serviceType: [
                  "Website design and development",
                  "SEO",
                  "Google Ads",
                  "Meta Ads",
                  "WhatsApp customer journeys",
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
        <a className="header-cta" href={businessWhatsappUrl}>
          Discuss your business <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" /> Digital systems for service businesses and growing brands
          </p>
          <h1>
            Build a clearer digital path from <em>attention</em> to action.
          </h1>
          <p className="hero-intro">
            I help service businesses and independent properties build practical
            digital systems: websites, SEO, advertising, WhatsApp journeys,
            automation, tracking and operations workflows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={businessWhatsappUrl}>
              Discuss Your Business <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              Hotel Growth Support
            </Link>
          </div>
          <div className="hero-terms" aria-label="Service highlights">
            <span>Launch pages from NPR 45,000</span>
            <span>SEO, ads and WhatsApp journeys</span>
            <span>Specialist hotel growth practice</span>
          </div>
          <div className="hero-proof">
            <strong>15+</strong>
            <span>
              years around hospitality, technology, marketing and practical
              digital systems.
            </span>
          </div>
        </div>

        <div className="system-card" aria-label="Connected digital growth system">
          <div className="system-top">
            <span>Digital growth system</span>
            <i>Practical</i>
          </div>
          <div className="system-score">
            <span>Business goal</span>
            <strong>Attention → Action</strong>
            <small>Get found. Build trust. Make follow-up easier.</small>
          </div>
          <div className="system-flow">
            <div>
              <b>01</b>
              <span>Get found</span>
              <small>SEO, ads & channels</small>
            </div>
            <i>→</i>
            <div>
              <b>02</b>
              <span>Build trust</span>
              <small>Website & proof</small>
            </div>
            <i>→</i>
            <div>
              <b>03</b>
              <span>Take action</span>
              <small>WhatsApp & tracking</small>
            </div>
          </div>
          <div className="system-tags">
            {["Website", "SEO", "Ads", "WhatsApp", "Automation"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Core outcomes">
        <span>Get found by the right people</span>
        <span>Earn trust faster</span>
        <span>Make action easier</span>
        <span>Know what is working</span>
      </section>

      <section className="section hotel-specialization" id="hotel-growth">
        <div>
          <p className="kicker">Specialist hospitality practice</p>
          <h2>
            Specialized support for hotels, hostels, guesthouses and independent
            properties.
          </h2>
        </div>
        <div>
          <p>
            Your guests do not all search in the same place. I help independent
            hotels expand and improve their presence across relevant booking
            channels, strengthen direct bookings, and automate the repetitive
            work behind the guest journey.
          </p>
          <div className="hotel-specialization-actions">
            <a className="button button-primary" href={hotelWhatsappUrl}>
              Check My Hotel - Free <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              View dedicated hotel page
            </Link>
          </div>
          <small>
            Send me your hotel name. I&apos;ll check where your property
            currently appears online and identify practical opportunities to
            improve its booking visibility.
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
            Different industries, one consistent job: make the business easier
            to find, understand, trust and choose.
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
          <a href="https://yatrabeauty.com/" target="_blank" rel="noreferrer">
            Yatra Beauty <Arrow />
          </a>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="services-intro">
          <p className="kicker">How I help</p>
          <h2>Not isolated digital tasks. One connected path to growth.</h2>
          <p>
            A website cannot fix a weak offer. Advertising cannot rescue a
            confusing customer journey. I look at how the pieces work together,
            then focus effort where it can make the biggest commercial
            difference.
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
            <h2>Start with the business problem-not a list of deliverables.</h2>
          </div>
          <p>
            Every engagement begins by understanding the customer, the offer and
            the current path to action.
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
            <h2>Clear starting points, then deeper growth support where needed.</h2>
          </div>
          <p>
            Choose a practical starting point. After a short review, you receive
            a fixed proposal before work begins.
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
            A hands-on digital growth partner with a strong hospitality
            background.
          </h2>
          <p>
            I&apos;m Alok Das. I have spent more than 15 years working around
            hospitality, technology, marketing and digital systems. I work
            across strategy and implementation, connecting websites,
            advertising, SEO, WhatsApp, automation and measurement into a
            clearer commercial system.
          </p>
          <div className="about-facts">
            <span>Based in Nepal</span>
            <span>Available for remote work</span>
            <span>Hospitality specialization available</span>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="kicker">A low-risk first step</p>
          <h2>Let&apos;s find the clearest digital growth opportunity.</h2>
          <p>
            Send your website, social page or business goal. I&apos;ll help
            identify the clearest opportunity and the right starting point.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-light" href={businessWhatsappUrl}>
            Discuss Your Business <Arrow />
          </a>
          <Link href="/hotel-growth">Hotel owner? Get a free visibility check</Link>
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
          Websites - SEO - Ads - WhatsApp - Automation - Hotel Growth
          <br />
          <a href="/privacy">Privacy & analytics</a>
        </p>
        <span>© 2026 Alok Das</span>
      </footer>

      <a
        className="floating-whatsapp"
        href={hotelWhatsappUrl}
        aria-label="Discuss your business on WhatsApp"
      >
        <span>WA</span>
        <strong>Discuss your business</strong>
      </a>
    </main>
  );
}
