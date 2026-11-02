export const phone = "+9779865711752";
export const email = "alokdaskomail@gmail.com";

export function enquiryUrl(service: string) {
  return `https://wa.me/9779865711752?text=${encodeURIComponent(
    `Hello Alok, I would like to discuss ${service}.\n\nProperty name:\nLocation:\nExisting website or booking link (if any):\nMain challenge:\nPreferred time for a free 5-minute discovery call:`,
  )}`;
}

export const hotelWhatsappUrl = enquiryUrl("OTA setup or improvements");

export type HotelPackage = {
  eyebrow: string;
  name: string;
  price: string;
  timeline: string;
  items: string[];
  href: string;
  featured?: boolean;
  cta?: string;
};

export const hotelPackages: HotelPackage[] = [
  {
    eyebrow: "Understand your existing setup",
    name: "OTA Account Review",
    price: "NPR 5,000",
    timeline: "A clear action list for a property already listed online. Initial review usually takes 2–3 working days after access is available.",
    items: ["One property; up to 3 existing OTA accounts", "Room details, rates, policies and guest-message checks", "Google Business Profile check", "Written priorities + a 30-minute explanation", "Review only; implementation quoted separately"],
    href: enquiryUrl("the NPR 5,000 OTA Account Review"),
  },
  {
    eyebrow: "Put agreed improvements into practice",
    name: "OTA Review + Correction",
    price: "NPR 15,000",
    timeline: "For existing listings with a defined set of corrections. Scope and delivery date are confirmed after an initial account assessment.",
    items: ["One property; up to 3 existing OTA accounts", "Agreed listing, room/rate and policy corrections", "Guest-message templates and supported triggers", "Google Business Profile corrections where access permits", "One 60-minute handover; complex repairs quoted separately"],
    href: enquiryUrl("the NPR 15,000 OTA Review + Correction package"),
  },
  {
    eyebrow: "For new properties and first-time listings",
    name: "New Property OTA Setup",
    price: "NPR 25,000",
    timeline: "Set up the booking channels that suit your property, with clear information and a practical handover.",
    items: ["One property; up to 3 suitable platforms and 5 room types", "Descriptions + upload of client-provided photos", "Agreed room/rate, availability and policy configuration", "Guest-message templates and supported triggers", "One 90-minute handover; additional platforms quoted separately"],
    href: enquiryUrl("the NPR 25,000 New Property OTA Setup package"),
  },
  {
    eyebrow: "Booking channels and your own website",
    name: "Property Launch: OTA + Website",
    price: "NPR 35,000",
    timeline: "Combine the New Property OTA Setup package with a simple property website and clear paths to contact you directly.",
    featured: true,
    items: ["OTA setup: up to 3 platforms and 5 room types", "Website: up to 5 pages in one language", "Client-provided photos; WhatsApp, call and enquiry links", "Basic page titles/descriptions + 2 consolidated revision rounds", "Domain, hosting and custom booking engine excluded"],
    href: enquiryUrl("the NPR 35,000 Property Launch: OTA + Website package"),
  },
  {
    eyebrow: "Learn on your own property accounts",
    name: "Practical Team Workshop",
    price: "NPR 8,000 / property",
    timeline: "A focused workshop for teams who already know the basics. Beginners receive a quotation for several sessions.",
    items: ["One 2–3-hour session on agreed topics", "Delivered personally in Nepali or English", "Two scheduled 20-minute follow-up calls within 14 days", "No fixed on-site team-size cap; format agreed in advance", "Training only; full account setup/correction is separate"],
    href: enquiryUrl("the NPR 8,000 Practical Team Workshop"),
    cta: "Discuss team training",
  },
  {
    eyebrow: "Photography arranged with a professional",
    name: "Property Photography",
    price: "NPR 3,000 / room",
    timeline: "Professionally edited room images prepared for your booking listings and website.",
    items: ["Room angles and edited photo count agreed before booking", "Client usage rights and delivery date confirmed in the quote", "Travel and common-area photography quoted separately"],
    href: enquiryUrl("property photography at NPR 3,000 per room"),
    cta: "Discuss property photography",
  },
];

export const serviceTerms = [
  "Start with a free 5-minute discovery call. Detailed account checks, action plans and implementation are paid services. The full scope and fee are agreed before work begins.",
  "One-time projects and training: 50% advance, balance at completion or handover. Monthly services, where agreed, are paid at the start of each service month.",
  "Fresh OTA setup typically takes about one week after all documents, photos, information and access are ready. Platform verification can take longer. Website and correction timelines are confirmed separately.",
  "Kathmandu Valley on-site visits are included only when stated in the quote. Outside the Valley, clients arrange or reimburse transport and accommodation; any travel-time fee is agreed beforehand. Groups can share these expenses by arrangement.",
  "Domains, hosting, paid tools, channel managers, photography and advertising spend are separate unless explicitly included. A quotation states applicable taxes and the final payable amount.",
  "Ongoing maintenance, promotions and review support are available by custom quotation during agreed office hours. Live guest-message handling, reservation operations and out-of-hours coverage require a separate agreement.",
  "You retain ownership of property accounts. Use authorised account access wherever available. Platform approval, search rankings, bookings and revenue are not guaranteed.",
];
