"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FormEvent } from "react";
import styles from "./page.module.css";

export default function Home() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? `${styles.navLink} ${styles.navLinkActive}`
      : styles.navLink;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    form.reset();
    window.alert("Thanks for reaching out! We'll be in touch shortly.");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <div className={styles.brand}>
              <h1 className={styles.title}>Oasis Airbnb</h1>
              <p className={styles.tagline}>A calm stay, made simple.</p>
            </div>
            <nav className={styles.nav} aria-label="Main navigation">
              <Link
                className={linkClass("/")}
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
              <Link
                className={linkClass("/properties")}
                href="/properties"
                aria-current={pathname === "/properties" ? "page" : undefined}
              >
                Properties
              </Link>
              <Link
                className={linkClass("/contact")}
                href="/contact"
                aria-current={pathname === "/contact" ? "page" : undefined}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero} aria-labelledby="hero-heading">
            <div className={styles.heroInner}>
              <span className={styles.heroEyebrow}>Boutique retreat</span>
              <h2 id="hero-heading" className={styles.heroHeading}>
                Find your pocket of tranquility in the heart of the desert.
              </h2>
              <p className={styles.heroText}>
                Oasis Airbnb is designed for slow mornings, golden sunsets, and
                effortless itineraries. Let our team help you plan a stay that
                feels personal from arrival to departure.
              </p>
              <Link className={styles.heroLink} href="/contact">
                Plan your stay
              </Link>
            </div>
          </section>
        </div>

        <section className={styles.about} aria-labelledby="about-heading">
          <div className={styles.container}>
            <div className={styles.aboutCard}>
              <h2 id="about-heading" className={styles.aboutHeading}>
                Warm, thoughtful, and refreshingly simple.
              </h2>
              <p className={styles.aboutText}>
                From curated local partnerships to seamless self check-in, we
                combine calm interiors with attentive service. Whether you are
                mapping out a weekend reset or an extended escape, our team
                handles the details so you can truly unwind.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={styles.contact}
          aria-labelledby="contact-heading"
        >
          <div className={styles.container}>
            <div className={styles.contactShell}>
              <div className={styles.contactCopy}>
                <h2 id="contact-heading" className={styles.contactHeading}>
                  Let&apos;s plan your stay.
                </h2>
                <p className={styles.contactText}>
                  Share a few details and our concierge will reach out within one
                  business day. Prefer email? Write to{" "}
                  <a href="mailto:hello@oasisairbnb.com">
                    hello@oasisairbnb.com
                  </a>
                  .
                </p>
                <div className={styles.details}>
                  <span>Boutique casita</span>
                  <span>On-call itinerary support</span>
                  <span>Sunset patio lounge</span>
                </div>
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
                  <label className={styles.label} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className={styles.textarea}
                    id="message"
                    name="message"
                    placeholder="Tell us about your travel plans..."
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
          © {new Date().getFullYear()} Oasis Airbnb. Crafted with care for your
          next escape.
        </div>
      </footer>
    </div>
  );
}
