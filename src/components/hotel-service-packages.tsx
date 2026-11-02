import { hotelPackages, serviceTerms } from "../lib/hotel-services";

export default function HotelServicePackages() {
  return (
    <>
      <div className="engagement-grid">
        {hotelPackages.map((pkg) => (
          <article className={pkg.featured ? "engagement-featured" : ""} key={pkg.name}>
            <p>{pkg.eyebrow}</p>
            <h3>{pkg.name}</h3>
            <div className="package-price"><small>Package fee</small><strong>{pkg.price}</strong><span>{pkg.timeline}</span></div>
            <ul>{pkg.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <a className="package-link" href={pkg.href}>{pkg.cta ?? "Ask about this package"} <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </div>
      <div className="service-terms" aria-label="Service scope and booking terms">
        <h3>Before we begin</h3>
        {serviceTerms.map((note) => <p className="package-note" key={note}>{note}</p>)}
      </div>
    </>
  );
}
