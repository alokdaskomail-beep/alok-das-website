import Image from "next/image";

const phone = "+9779865711752";
const email = "alokdaskomail@gmail.com";
const whatsappText =
  "Hello Alok, I would like a free 15-minute website opportunity review.\n\nBusiness name:\nWebsite or social page:\nMain goal: More enquiries / Online sales / Better visibility\nBiggest current challenge:";
const whatsappUrl = `https://wa.me/9779865711752?text=${encodeURIComponent(
  whatsappText,
)}`;

const projects = [
  {
    name: "TOTOPASA",
    url: "https://totopasa.com/",
    domain: "totopasa.com",
    type: "E-commerce - Personalised gifting",
    result:
      "A clearer shopping journey built around product discovery, customer trust and direct action.",
    measure: "Product enquiries and completed purchases",
    color: "coral",
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
    name: "Minakshi Traders",
    url: "https://minakshitraders.com/",
    domain: "minakshitraders.com",
    type: "Local services - Commercial SEO",
    result:
      "A search-ready service website that helps customers quickly understand, trust and contact the business.",
    measure: "Calls and service enquiries from search",
    color: "amber",
  },
  {
    name: "My Travel Makers",
    url: "https://mytravelmakers.com/",
    domain: "mytravelmakers.com",
    type: "Travel - Enquiry journey",
    result:
      "A content-rich travel presence connecting destinations and services to practical customer enquiries.",
    measure: "Trip and itinerary enquiries",
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
    "Clear positioning, stronger trust and simpler paths from interest to enquiry or purchase.",
  ],
  [
    "Google & Meta advertising",
    "Campaign structure, targeting and creative direction built around a real business objective.",
  ],
  [
    "SEO & discoverability",
    "Technical foundations and useful content that help the right customers find your business.",
  ],
  [
    "WhatsApp customer journeys",
    "Structured conversations that collect useful details and make follow-up easier.",
  ],
  [
    "Tracking & improvement",
    "Measurement that shows which pages, campaigns and actions are creating opportunities.",
  ],
];

const process = [
  [
    "Review",
    "We identify where attention, trust or conversion is breaking down.",
  ],
  [
    "Prioritise",
    "You receive a focused recommendation based on impact, effort and budget.",
  ],
  [
    "Build",
    "I implement the agreed website, campaign, SEO or customer-journey improvements.",
  ],
  [
    "Measure",
    "We track meaningful actions, learn from the response and improve what works.",
  ],
];

const packages = [
  {
    eyebrow: "A focused first step",
    name: "Launch Page",
    price: "NPR 35,000",
    timeline: "Delivered in 5-7 working days",
    items: [
      "One conversion-focused landing page",
      "Mobile-first design",
      "WhatsApp or enquiry form",
      "Analytics and basic SEO setup",
    ],
  },
  {
    eyebrow: "Most popular",
    name: "Business Website",
    price: "NPR 75,000",
    timeline: "Delivered in 10-14 working days",
    items: [
      "Up to 6 core pages",
      "Clear enquiry journey",
      "Speed, SEO and analytics setup",
      "Two weeks of post-launch support",
    ],
    featured: true,
  },
  {
    eyebrow: "Sell online",
    name: "E-commerce Website",
    price: "NPR 150,000",
    timeline: "Delivered in 3-5 weeks",
    items: [
      "Product catalogue and checkout",
      "Payment and delivery setup",
      "Conversion tracking",
      "Store handover and training",
    ],
  },
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
                  "WhatsApp marketing",
                  "Analytics",
                ],
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://alokdas.com.np/#digital-growth",
                name: "Alok Das - Digital Growth Partner",
                url: "https://alokdas.com.np/",
                description:
                  "Conversion-focused websites, digital advertising, SEO, WhatsApp customer journeys and performance tracking.",
                founder: { "@id": "https://alokdas.com.np/#alok-das" },
                areaServed: "Worldwide",
                serviceType: [
                  "Digital growth strategy",
                  "Website design and development",
                  "Google Ads",
                  "Meta Ads",
                  "SEO",
                  "Conversion tracking",
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
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href={whatsappUrl}>
          Discuss your business <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" /> Websites for service businesses and
            growing brands
          </p>
          <h1>
            Turn more visitors into <em>qualified enquiries</em> and customers.
          </h1>
          <p className="hero-intro">
            I build fast, credible websites with a clear path to action-then
            connect SEO, advertising, WhatsApp and tracking when your business
            is ready to grow.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl}>
              Book a free 15-minute review <Arrow />
            </a>
            <a className="button button-secondary" href="#packages">
              View packages & prices
            </a>
          </div>
          <div className="hero-terms" aria-label="Service highlights">
            <span>From NPR 35,000</span>
            <span>5-14 day website delivery</span>
            <span>Fixed scope before work begins</span>
          </div>
          <div className="hero-proof">
            <strong>10</strong>
            <span>
              live websites across e-commerce, events, travel, hospitality,
              services and nonprofit work.
            </span>
          </div>
        </div>

        <div className="system-card" aria-label="Connected digital growth system">
          <div className="system-top">
            <span>Digital growth system</span>
            <i>Live</i>
          </div>
          <div className="system-score">
            <span>Business goal</span>
            <strong>Attention → Action</strong>
            <small>Build the path. Measure the response. Improve what works.</small>
          </div>
          <div className="system-flow">
            <div>
              <b>01</b>
              <span>Get found</span>
              <small>SEO & ads</small>
            </div>
            <i>→</i>
            <div>
              <b>02</b>
              <span>Build trust</span>
              <small>Website</small>
            </div>
            <i>→</i>
            <div>
              <b>03</b>
              <span>Take action</span>
              <small>WhatsApp & sales</small>
            </div>
          </div>
          <div className="system-tags">
            {["Google", "Meta", "SEO", "WhatsApp", "Analytics"].map((tag) => (
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

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Live businesses. Real digital systems.</h2>
          </div>
          <p>
            Different industries, one consistent job: make the business easier
            to understand, trust and choose.
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
            <p className="kicker">Website packages</p>
            <h2>Clear scope, starting price and delivery date.</h2>
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
              <ul>
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="package-link" href={whatsappUrl}>
                Ask about this package <Arrow />
              </a>
            </article>
          ))}
        </div>
        <p className="package-note">
          Need advertising, SEO or ongoing improvement? These are quoted
          separately after the website and tracking foundations are clear.
        </p>
      </section>

      <section className="section about-section" id="about">
        <div className="about-photo">
          <Image
            alt="Alok Das, Independent Digital Growth Partner"
            fill
            sizes="(max-width: 800px) 76vw, 34vw"
            src="/images/alok-das.jpg"
          />
          <span className="portrait-ring" aria-hidden="true" />
          <small>
            <b>AD</b> Strategy
            <br />+ execution
          </small>
        </div>
        <div className="about-copy">
          <p className="kicker">Work directly with me</p>
          <h2>
            A hands-on partner for businesses that need progress-not more
            digital noise.
          </h2>
          <p>
            I&apos;m Alok Das. I work across strategy and implementation,
            connecting websites, advertising, SEO, WhatsApp and measurement into
            a clearer commercial system. You speak with the person doing the
            thinking and the work.
          </p>
          <div className="about-facts">
            <span>Based in Nepal</span>
            <span>Available for remote work</span>
            <span>Direct, practical collaboration</span>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="kicker">A low-risk first step</p>
          <h2>Get a free 15-minute website opportunity review.</h2>
          <p>
            Send your website or social page and your main business goal.
            I&apos;ll identify the clearest opportunity and tell you which
            package-if any-fits.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-light" href={whatsappUrl}>
            Book your free review <Arrow />
          </a>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${phone}`}>+977 9865711752</a>
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
          Websites - Google & Meta Ads - SEO - WhatsApp - Tracking
          <br />
          <a href="/privacy">Privacy & analytics</a>
        </p>
        <span>© 2026 Alok Das</span>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        aria-label="Discuss your business on WhatsApp"
      >
        <span>WA</span>
        <strong>Discuss your business</strong>
      </a>
    </main>
  );
}
