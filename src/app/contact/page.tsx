import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact | Oasis Airbnb",
  description:
    "Connect with the Oasis Airbnb concierge team to plan your serene stay, request availability, or ask a question.",
};

export default function ContactPage() {
  return <ContactContent />;
}
