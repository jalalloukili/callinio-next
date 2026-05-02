import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Callinio — L'assistante qui répond pour les artisans français",
  description: "Quand vous ne pouvez pas décrocher, Callinio prend le message, note ce que veut le client, et vous envoie tout dans la seconde. 14 jours offerts, sans carte bancaire.",
  openGraph: {
    title: "Callinio — L'assistante qui répond pour les artisans français",
    description: "Votre assistante téléphonique intelligente. Zéro appel manqué, zéro chantier perdu.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
