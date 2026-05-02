import { Icons } from '../icons';

export default function ClosingCta() {
  return (
    <section className="cta-final-section" id="cta" data-screen-label="Final CTA">
      <div className="wrap">
        <div className="cta-final">
          <div className="cta-final-inner">
            <span className="kicker" style={{ color: 'var(--teal-soft)' }}>Démarrez en 5 minutes</span>
            <h2>
              Le prochain appel,<br/>
              <em>vous ne le manquerez pas.</em>
            </h2>
            <p>
              Configuration en 5 minutes. 14 jours offerts. Sans carte bancaire.
              Vous testez avec votre vraie ligne, vos vrais clients.
            </p>
            <div className="actions">
              <a className="btn btn-amber btn-lg" href="#pricing">
                Démarrer l'essai gratuit <Icons.arrow size={14}/>
              </a>
              <a className="btn btn-outline-light btn-lg" href="#how">Voir une démo</a>
            </div>
            <div className="cta-final-trust">
              <span>★★★★★ 4,8 / 5 · 312 avis</span>
              <span className="dot"></span>
              <span>1 240 artisans actifs</span>
              <span className="dot"></span>
              <span>Résiliable en un clic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
