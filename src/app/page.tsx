import Image from "next/image";
import Link from "next/link";

const phone = "+9779865711752";
const email = "alokdaskomail@gmail.com";
const hotelWhatsappText =
  "Hi Alok, I would like you to check my hotel's online booking presence.\n\nMy property name is:\nCurrent website or booking link:\nMain challenge:";
const hotelWhatsappUrl = `https://wa.me/9779865711752?text=${encodeURIComponent(
  hotelWhatsappText,
)}`;
const photographyWhatsappUrl = `https://wa.me/9779865711752?text=${encodeURIComponent(
  "Hello Alok, I would like to discuss property photography at Rs. 3,000 per room.\n\nProperty name:\nLocation:\nNumber of rooms:\nPreferred shoot date:",
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
    "OTA setup that makes your property easier to book",
    "Set up or improve your presence on relevant booking platforms. Bring clarity to property information, room types, rates, availability, amenities, photos and policies so guests can make informed booking decisions.",
  ],
  [
    "A website that supports your bookings",
    "Give guests a clear, trustworthy place to explore your property, understand your rooms and contact you directly. Your website supports your OTA presence while building your own booking channel.",
  ],
  [
    "Better visibility on Google",
    "Improve your website’s search foundations and local visibility so travellers searching for your property, location or type of accommodation can find useful information.",
  ],
  [
    "Clear guest messages and practical automation",
    "Prepare consistent replies and message templates for common questions, pre-arrival information, check-in instructions and follow-up. Configure automation where your platforms and tools support it.",
  ],
  [
    "Optional guest communication support",
    "If you prefer, my team can help handle guest enquiries and follow-up across agreed channels, including Booking.com, Airbnb and WhatsApp. We agree on coverage hours, responsibilities and when your property team needs to step in before the service begins.",
  ],
  [
    "Professional property photography",
    "Rs. 3,000 per room. Show guests a clear, inviting view of your rooms with photography shot by an industry professional. We plan the required angles and number of photographs per room around the room type and relevant OTA requirements. Images are professionally edited and prepared for your booking listings and property website.",
  ],
  [
    "Practical staff training",
    "Help your team use the systems confidently in day-to-day work. Training can cover OTA listing upkeep, room information, rates and availability, property website content, SEO basics, guest message templates, practical automation and guest enquiry handling. We also cover preparing rooms for photography and keeping listing photos current. Training topics, participants and scope are agreed around your property’s needs.",
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
      "Help more guests discover and confidently book your property through properly configured OTA listings. Suitable for properties starting online or correcting gaps in their existing setup.",
    items: [
      "Stronger presence on relevant booking channels",
      "Clear room details that support guest decisions",
      "Agreed scope based on platform requirements",
    ],
    href: hotelWhatsappUrl,
  },
  {
    eyebrow: "Core hotel offer - connected booking setup",
    name: "Hotel Booking Launch System",
    price: "From NPR 75,000",
    timeline:
      "Bring your booking channels, online visibility and guest communication foundations together. Build a clearer journey from discovering your property to making a booking, with scope agreed around your current setup.",
    featured: true,
    items: [
      "Clearer OTA and Airbnb listings",
      "Google visibility and clear booking paths",
      "Guest reply templates and room/rate clarity",
    ],
    href: hotelWhatsappUrl,
  },
  {
    eyebrow: "Core hotel offer - ongoing growth",
    name: "Hotel Growth Partnership",
    price: "From NPR 35,000/month",
    timeline:
      "Keep your online presence and booking channels working as your property grows. Ongoing support can include listing improvements, website and SEO updates, guest message workflows and performance reviews.",
    items: [
      "Consistent visibility and OTA information",
      "Pricing, reviews and enquiry reporting",
      "Website and guest message improvements",
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
  {
    eyebrow: "Additional service - photography",
    name: "Professional property photography",
    price: "Rs. 3,000 per room",
    timeline:
      "Show guests a clear, inviting view of your rooms with photography shot by an industry professional. We plan the required angles and number of photographs per room around the room type and relevant OTA requirements. Images are professionally edited and prepared for your booking listings and property website.",
    items: [
      "Room photography by an industry professional",
      "Planned angles covering the room and its key features",
      "Photo count agreed per room before the shoot",
      "Professional editing for clear, natural presentation",
      "Images prepared to suit relevant OTA requirements",
    ],
    href: photographyWhatsappUrl,
    cta: "Discuss property photography",
  },
];

const pricingClarifications = [
  "Pricing reflects strategic review, setup quality, and hands-on implementation. Platform fees, paid ads, photography, subscriptions, channel manager costs, and third-party charges are not included unless clearly stated in the proposal.",
  "For small fixes, single-platform support, or advisory-only needs, lighter support may be available after review.",
  "Optional managed communication: Ask about adding guest enquiry handling by my team. Channels, coverage and pricing are agreed separately.",
  "Photography is separately priced at Rs. 3,000 per room; the required angles and photo count per room are agreed before the shoot.",
  "Staff training is available for OTA upkeep, website content and SEO basics, guest messages, automation and enquiry handling. Topics, participants and scope are agreed around your property’s needs.",
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
                  "OTA setup and optimization, hotel websites, SEO, guest communication and professional property photography for independent hotels, guesthouses, hostels and tourism properties in Nepal. Selected service business projects also available.",
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
                  "Practical hotel and OTA training",
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
          <Link href="/hotel-training">Training</Link>
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
            <Link href="/hotel-training">Training</Link>
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
            <span aria-hidden="true" /> For independent hotels, guesthouses, hostels and tourism properties in Nepal
          </p>
          <h1>
            Get more bookings with better <em>OTA setup</em> and guest communication.
          </h1>
          <p className="hero-intro">
            I help your property get properly set up on booking platforms, improve
            its website and search visibility, and organize guest messages—from
            the first enquiry to arrival.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={hotelWhatsappUrl}>
              Get a free property visibility check <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              Explore hotel services
            </Link>
          </div>
          <div className="hero-terms" aria-label="Service highlights">
            <span>OTA setup & optimization</span>
            <span>Hotel websites & SEO</span>
            <span>Guest communication support</span>
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
            <strong>Discovery → Bookings</strong>
            <small>Better OTA setup. Stronger visibility. Timely guest replies.</small>
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
              <span>Get bookings</span>
              <small>WhatsApp & follow-up</small>
            </div>
          </div>
          <div className="system-tags">
            {["Booking.com", "Airbnb", "Google", "WhatsApp", "Property website"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Core outcomes">
        <span>Reach more potential guests</span>
        <span>Improve OTA performance</span>
        <span>Organize guest communication</span>
        <span>Track booking enquiries</span>
      </section>

      <section className="section hotel-specialization" id="hotel-growth">
        <div>
          <p className="kicker">Your property’s booking journey</p>
          <h2>
            Your property deserves a better chance to be found—and booked.
          </h2>
          <p>
            Incomplete listings, confusing room options, unclear policies and
            unanswered enquiries can stand between your property and its next guest.
          </p>
          <p>
            I help you improve how your property appears across Booking.com, Airbnb
            and other relevant platforms, then connect your website, Google visibility
            and guest communication into a practical booking journey.
          </p>
        </div>
        <div>
          <h3>From booking platform setup to guest follow-up.</h3>
          <p>
            Your guests discover your property through different channels. Each one
            needs clear information, a straightforward booking path and timely communication.
          </p>
          <p>
            Whether you need to correct existing listings, reach guests through
            additional platforms, improve your website or get help managing enquiries,
            I work around your property’s current needs.
          </p>
          <div className="hotel-specialization-actions">
            <a className="button button-primary" href={hotelWhatsappUrl}>
              Check my property’s online presence <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              View dedicated hotel page
            </Link>
          </div>
          <small>
            Send your property name and any existing website or booking links.
            I&apos;ll review its online presence and highlight practical improvements.
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
          <h2>Practical support for your property’s next booking.</h2>
          <p>
            Bring your OTA listings, property website, search visibility and guest
            communication together. Start with the setup or ongoing support your
            property needs now.
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

      <section className="section hotel-specialization" id="training">
        <div>
          <p className="kicker">Practical hotel & OTA training</p>
          <h2>Help your team manage booking channels and guest communication with confidence.</h2>
        </div>
        <div>
          <p>Training for owners, managers, front-desk and reservation staff, and individual learners. Learn OTA upkeep, rates and availability, website updates, SEO basics, guest communication, message automation and preparing rooms for photography.</p>
          <p>Taught personally by Alok Das in Nepali and/or English. Choose a focused workshop or several practical sessions, on-site, live online or in a group, with practice on your property’s accounts where access is available and agreed follow-up support.</p>
          <div className="hotel-specialization-actions">
            <Link className="button button-primary" href="/hotel-training">Explore the training program <Arrow /></Link>
            <a className="button button-secondary" href={`https://wa.me/9779865711752?text=${encodeURIComponent("Hello Alok, I would like to enquire about hotel training.\n\nName / property:\nNumber of participants:\nTopics of interest:\nPreferred format:")}`}>Enquire about training <Arrow /></a>
          </div>
          <small>Per-person, per-property/team and custom quotations available. Topics, duration and fees are agreed before booking.</small>
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
            <h2>Ways to work together</h2>
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
                {pkg.cta ?? "Ask about this"} <Arrow />
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
            independent properties in Nepal improve OTA setup, websites, search
            visibility and practical guest communication routines. I also take on selected
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
          <h2>Find out where your property could be missing booking opportunities.</h2>
          <p>
            Send your property name and any existing website or booking links.
            I&apos;ll review its online presence and highlight practical improvements
            to listings, visibility and the guest enquiry journey.
          </p>
          <p><em>I also work with selected service businesses on websites, search visibility and customer communication.</em></p>
        </div>
        <div className="cta-actions">
          <a className="button button-light" href={hotelWhatsappUrl}>
            Get my free property check <Arrow />
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
          OTA setup - Hotel websites & SEO - Guest communication
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
