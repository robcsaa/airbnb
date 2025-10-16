"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import styles from "./page.module.css";

export function ContactContent() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    form.reset();
    window.alert("Thank you! Our team will reach out within one business day.");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <div className={styles.brand}>
              <Link href="/" className={styles.brandLink}>
                Oasis Airbnb
              </Link>
              <p className={styles.tagline}>A calm stay, made simple.</p>
            </div>
            <nav className={styles.nav} aria-label="Main navigation">
              <Link className={styles.navLink} href="/">
                Home
              </Link>
              <Link className={styles.navLink} href="/properties">
                Properties
              </Link>
              <Link
                className={`${styles.navLink} ${styles.navLinkActive}`}
                href="/contact"
                aria-current="page"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="contact-hero">
          <div className={styles.heroOverlay} />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <span className={styles.heroEyebrow}>Concierge</span>
              <h1 id="contact-hero" className={styles.heroHeading}>
                Let&apos;s plan your stay.
              </h1>
              <p className={styles.heroText}>
                Share a few details about your travel plans and we&apos;ll craft a serene
                itinerary with the Oasis touch—calm interiors, local rhythms, and personal
                support every step of the way.
              </p>
              <div className={styles.heroDetails}>
                <span>
                  Email: <a href="mailto:hello@oasisairbnb.com">hello@oasisairbnb.com</a>
                </span>
                <span>Response within one business day</span>
              </div>
            </div>
          </div>
        </section>

        <section id="form" className={styles.formSection} aria-labelledby="form-heading">
          <div className={styles.container}>
            <div className={styles.formShell}>
              <div className={styles.formIntro}>
                <h2 id="form-heading" className={styles.formHeading}>
                  Tell us about your visit.
                </h2>
                <p className={styles.formText}>
                  We personalize each stay—whether you&apos;re planning a quiet reset,
                  a desert retreat, or an extended escape. Let us know your dates,
                  group size, and any special requests.
                </p>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jamie Rivera"
                    required
                  />
                </div>

                <div className={styles.fieldGrid}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">
                      Email
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jamie@example.com"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="guests">
                      Number of guests
                    </label>
                    <input
                      className={styles.input}
                      type="number"
                      id="guests"
                      name="guests"
                      min={1}
                      placeholder="2"
                      required
                    />
                  </div>
                </div>

                <div className={styles.fieldGrid}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="arrival">
                      Arrival date
                    </label>
                    <input
                      className={styles.input}
                      type="date"
                      id="arrival"
                      name="arrival"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="departure">
                      Departure date
                    </label>
                    <input
                      className={styles.input}
                      type="date"
                      id="departure"
                      name="departure"
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">
                    How can we make it special?
                  </label>
                  <textarea
                    className={styles.textarea}
                    id="message"
                    name="message"
                    placeholder="Share your ideal experience..."
                    required
                  />
                </div>

                <button type="submit" className={styles.submit}>
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          © {new Date().getFullYear()} Oasis Airbnb. Crafted with care for your next escape.
        </div>
      </footer>
    </div>
  );
}
