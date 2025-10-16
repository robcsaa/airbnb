import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Properties | Oasis Airbnb",
  description:
    "Preview upcoming Oasis Airbnb properties and join the waitlist for serene stays curated with calm design and attentive service.",
};

export default function PropertiesPage() {
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
              <Link
                className={`${styles.navLink} ${styles.navLinkActive}`}
                href="/properties"
                aria-current="page"
              >
                Properties
              </Link>
              <Link className={styles.navLink} href="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="properties-hero">
          <div className={styles.heroOverlay} />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <span className={styles.heroEyebrow}>Properties</span>
              <h1 id="properties-hero" className={styles.heroHeading}>
                Coming soon.
              </h1>
              <p className={styles.heroText}>
                We&apos;re carefully preparing a portfolio of serene escapes—each one
                designed with the Oasis signature blend of calm interiors and thoughtful
                service. Be the first to know when reservations open.
              </p>
              <Link className={styles.heroCta} href="/contact">
                Join the waitlist
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.details} aria-labelledby="details-heading">
          <div className={styles.container}>
            <div className={styles.detailsCard}>
              <h2 id="details-heading" className={styles.detailsHeading}>
                What to expect
              </h2>
              <ul className={styles.list}>
                <li>Handpicked residences with restorative design and premium comforts.</li>
                <li>Dedicated concierge support from trip planning to on-call care.</li>
                <li>Curated local experiences, wellness partnerships, and effortless arrivals.</li>
              </ul>
              <p className={styles.backLinkWrapper}>
                Prefer to speak now?{" "}
                <a className={styles.inlineLink} href="mailto:hello@oasisairbnb.com">
                  hello@oasisairbnb.com
                </a>
              </p>
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
