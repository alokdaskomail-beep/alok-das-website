export const metadata = {
  title: "Privacy & Analytics | Alok Das",
  description:
    "How alokdas.com.np uses basic analytics, contact links and enquiry information.",
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <a className="brand" href="/">
        <span className="brand-mark">AD</span>
        <span>
          <strong>Alok Das</strong>
          <small>Independent Digital Growth Partner</small>
        </span>
      </a>
      <section>
        <p className="kicker">Privacy & analytics</p>
        <h1>Simple, practical privacy information.</h1>
        <p>
          This website may use basic analytics to understand page visits,
          traffic sources and enquiry actions. The purpose is to improve the
          website and understand which pages are useful to visitors.
        </p>
        <p>
          If you contact Alok Das through WhatsApp, phone or email, the details
          you provide are used only to respond to your enquiry and discuss the
          work you requested.
        </p>
        <p>
          This website links to external services such as WhatsApp, Google Tag
          Manager and live client websites. Those services may process data
          according to their own privacy policies.
        </p>
        <p>
          For privacy questions, email{" "}
          <a href="mailto:alokdaskomail@gmail.com">alokdaskomail@gmail.com</a>.
        </p>
        <a className="button button-primary" href="/">
          Back to home
        </a>
      </section>
    </main>
  );
}
