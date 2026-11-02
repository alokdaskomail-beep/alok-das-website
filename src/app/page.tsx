import Image from "next/image";
import Link from "next/link";
import HotelServicePackages from "../components/hotel-service-packages";
import { hotelWhatsappUrl } from "../lib/hotel-services";

const phone = "+9779865711752";
const email = "alokdaskomail@gmail.com";
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
    "Ongoing support by agreement",
    "Ongoing listing maintenance, promotions and review support can be quoted separately. Standard support is during agreed office hours. Live guest-message handling, reservation operations and out-of-hours coverage require a separate agreement.",
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
  ["Discovery call", "A free five-minute conversation to understand your property, existing setup and priorities."],
  ["Agree the scope", "Receive a written scope, fee, required-information checklist and timeline. Pay 50% to confirm."],
  ["Review or implement", "I carry out the agreed review, corrections, setup or training once the required access and information are ready."],
  ["Handover", "Review the completed work together, receive your handover and settle the balance. Follow-up is limited to the agreed package."],
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
                jobTitle: "Hotel OTA and Digital Growth Consultant",
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
                name: "Alok Das - Hotel OTA and Digital Growth Services",
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



      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" /> For small hotels, resorts, homestays and properties opening soon in Nepal
          </p>
          <h1>
            Get your property ready to be <em>found—and booked.</em>
          </h1>
          <p className="hero-intro">
            I help you set up or improve your booking-platform listings, organise
            rates and guest messages, and train your team to manage the
            day-to-day work confidently.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={hotelWhatsappUrl}>
              Book a free 5-minute discovery call <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              Explore hotel services
            </Link>
          </div>
          <div className="hero-terms" aria-label="Service highlights">
            <span>OTA setup & optimization</span>
            <span>Hotel websites & SEO</span>
            <span>Practical team training</span>
          </div>
          <div className="hero-proof">
            <strong>10+</strong>
            <span>
              years of hotel online marketing experience. Work directly with me in Nepali or English.
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
              Discuss my property <Arrow />
            </a>
            <Link className="button button-secondary" href="/hotel-growth">
              View dedicated hotel page
            </Link>
          </div>
          <small>
            Send your property name and any existing website or booking links.
            We&apos;ll discuss your needs on a free five-minute call. Detailed account reviews and action plans are paid services.
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
            These examples show website and enquiry journeys across different sectors.
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
          <p>For existing users: one 2–3-hour workshop at NPR 8,000 per property, plus two scheduled 20-minute follow-up calls within 14 days. Taught personally by Alok Das in Nepali or English, with practice on your property accounts. Beginners receive a quotation for several sessions.</p>
          <div className="hotel-specialization-actions">
            <Link className="button button-primary" href="/hotel-training">Explore the training program <Arrow /></Link>
            <a className="button button-secondary" href={`https://wa.me/9779865711752?text=${encodeURIComponent("Hello Alok, I would like to enquire about hotel training.\n\nName / property:\nNumber of participants:\nTopics of interest:\nPreferred format:")}`}>Enquire about training <Arrow /></a>
          </div>
          <small>Remote across Nepal; on-site by arrangement. Open workshops: NPR 2,500 per person, up to 10 participants, subject to announced dates and minimum enrolment. No fixed on-site team-size cap; format agreed beforehand.</small>
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
            Choose a paid review, agreed corrections, new OTA setup or a combined
            OTA-and-website launch. Training and photography are also available.
            Larger or more complex properties receive a custom quotation.
          </p>
        </div>
        <HotelServicePackages />
      </section>


      <section className="section hotel-specialization" id="other-services">
        <div><p className="kicker">Additional digital services</p><h2>Websites, SEO and advertising support.</h2></div>
        <div><p>Hotel website improvements, search visibility, Meta and Google campaigns, and guest communication workflows can be quoted separately. I also take on selected website and enquiry-system projects for other service businesses.</p><a className="button button-secondary" href={businessWhatsappUrl}>Discuss a custom project <Arrow /></a></div>
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
            I&apos;m Alok Das, with more than 10 years of hotel online marketing
            experience. I work personally with each property. I help
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
            We&apos;ll use a free five-minute discovery call to identify the right service.
            Detailed account reviews, correction plans and training are paid services.
          </p>
          <p><em>I also work with selected service businesses on websites, search visibility and customer communication.</em></p>
        </div>
        <div className="cta-actions">
          <a className="button button-light" href={hotelWhatsappUrl}>
            Book my free 5-minute call <Arrow />
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
        aria-label="Arrange a free 5-minute discovery call on WhatsApp"
      >
        <span>WA</span>
        <strong>Free 5-minute call</strong>
      </a>
    </main>
  );
}

