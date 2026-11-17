"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "9779865711752";

export default function LocalBusinessCheckForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const message = [
      "Hello Alok, I would like a free local business visibility check.",
      "",
      `Business / contact name: ${data.get("name")}`,
      `Phone or WhatsApp: ${data.get("phone")}`,
      `Business type: ${data.get("businessType")}`,
      `Location / service area: ${data.get("location")}`,
      `Website or Google Maps link: ${data.get("website") || "Not provided"}`,
      `Main problem: ${data.get("problem")}`,
      `Message: ${data.get("message") || "Not provided"}`,
    ].join("\n");

    setStatus("Opening WhatsApp with your enquiry. Please review and send the message there.");
    window.location.assign(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    );
  }

  return (
    <form className="visibility-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Business / contact name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Phone or WhatsApp number
          <input
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            pattern="[+0-9][0-9 -]{6,20}"
            title="Use a valid phone or WhatsApp number."
            required
          />
        </label>
        <label>
          Business type
          <select name="businessType" defaultValue="Furniture / Carpentry" required>
            <option>Furniture / Carpentry</option>
            <option>Modular Kitchen / Interiors</option>
            <option>Painting / Renovation</option>
            <option>UPVC / Aluminium Fabrication</option>
            <option>Other local service business</option>
          </select>
        </label>
        <label>
          Location / service area
          <input name="location" autoComplete="address-level2" required />
        </label>
        <label>
          Website or Google Maps link <span>Optional</span>
          <input name="website" type="url" inputMode="url" />
        </label>
        <label>
          Main problem
          <select name="problem" defaultValue="Not sure" required>
            <option>Not found online</option>
            <option>Need a website</option>
            <option>Few enquiries</option>
            <option>Poor follow-up</option>
            <option>Not sure</option>
          </select>
        </label>
      </div>
      <label>
        Short message <span>Optional</span>
        <textarea name="message" rows={4} />
      </label>
      <label className="consent-field">
        <input name="consent" type="checkbox" required />
        <span>
          I agree to be contacted about this enquiry. Read the <a href="/privacy">privacy information</a>.
        </span>
      </label>
      <button className="button button-primary" type="submit">
        Request a Free Visibility Check <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note" aria-live="polite">
        {status || "Your details stay in this browser until you choose to send the WhatsApp message."}
      </p>
    </form>
  );
}

