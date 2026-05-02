import Image from 'next/image';

export default function Footer() {
  return (
    <footer data-screen-label="Footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Image src="/assets/logo_callinio.png" alt="Callinio" width={120} height={26}/>
            <p>Le répondeur intelligent des artisans français. Conçu pour ceux qui ont les mains prises, et qui ne peuvent pas se permettre de perdre un client.</p>
            <div className="foot-contact">
              <div className="foot-contact-row">
                <span className="ic">📞</span>
                <a href="tel:+33428290909">04 28 29 09 09</a>
                <span className="hr">·</span>
                <span>Lun–Ven · 9 h – 18 h</span>
              </div>
              <div className="foot-contact-row">
                <span className="ic">✉</span>
                <a href="mailto:bonjour@callinio.fr">bonjour@callinio.fr</a>
              </div>
              <div className="foot-contact-row">
                <span className="ic">📍</span>
                <span>14 rue de la République, 69002 Lyon</span>
              </div>
            </div>
          </div>
          <div className="foot-col">
            <h4>Produit</h4>
            <a href="#features">Fonctionnalités</a>
            <a href="#how">Comment ça marche</a>
            <a href="#product">App mobile</a>
            <a href="#pricing">Tarifs</a>
            <a href="#testimonials">Témoignages</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="foot-col">
            <h4>Société</h4>
            <a href="#">À propos</a>
            <a href="#">Métiers couverts</a>
            <a href="#">Blog</a>
            <a href="#">Presse</a>
            <a href="#">Contact</a>
            <a href="#">On recrute</a>
          </div>
          <div className="foot-col">
            <h4>Légal</h4>
            <a href="#">CGU</a>
            <a href="#">CGV</a>
            <a href="#">Confidentialité</a>
            <a href="#">RGPD · DPO</a>
            <a href="#">Mentions légales</a>
            <a href="#">Statut · 99,98 %</a>
          </div>
        </div>

        <div className="foot-wordmark">callinio</div>

        <div className="foot-bot">
          <div>
            <div>© 2026 Callinio SAS · Tous droits réservés</div>
            <div className="foot-legal">SIRET 928 412 765 00018 · RCS Lyon · TVA FR82928412765 · Capital 50 000 €</div>
          </div>
          <div className="foot-bot-r">
            <span>Hébergé en 🇫🇷 France · OVH Roubaix</span>
            <span className="dot"></span>
            <span>Conforme RGPD</span>
            <span className="dot"></span>
            <span>Made in Lyon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
