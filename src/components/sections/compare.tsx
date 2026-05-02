const rows = [
  { label: "Coût mensuel", a: "0 €", b: "150 à 300 €", c: "39 à 119 € HT" },
  { label: "Disponibilité", a: "24/7 mais muet", b: "Heures de bureau", c: "24/7" },
  { label: "Message capté ?", a: "20 % seulement", b: "Oui, si décroche", c: "Oui, à chaque appel", c_strong: true },
  { label: "Motif structuré", a: "Non, audio brut", b: "Oui, manuel", c: "Oui, automatique" },
  { label: "Filtrage démarchage", a: "Non", b: "Variable", c: "Oui, intégré", c_strong: true },
  { label: "Notification immédiate", a: "Non", b: "Email différé", c: "Push + email · 30 s", c_strong: true },
  { label: "Numéro conservé", a: "Oui", b: "Oui", c: "Oui" },
  { label: "Engagement", a: "Aucun", b: "3 à 12 mois", c: "Aucun", c_strong: true },
  { label: "Mise en place", a: "Auto", b: "1 à 2 semaines", c: "5 minutes" },
];

export default function Compare() {
  return (
    <section className="sec compare-section" data-screen-label="Compare">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Comparaison</span>
            <h2 className="head-xl">
              Trois façons de gérer vos appels.<br/>
              <em>Une seule sans compromis.</em>
            </h2>
          </div>
          <p>Le répondeur ne capte rien. Le télésecrétariat coûte cher et ne répond qu'aux heures de bureau. Callinio fait le travail à votre place, tout le temps.</p>
        </div>

        <div className="compare-table">
          <div className="ct-head">
            <div className="ct-label"></div>
            <div className="ct-col">
              <div className="ct-eye">Option 1</div>
              <div className="ct-name">Répondeur classique</div>
              <div className="ct-sub">Messagerie opérateur</div>
            </div>
            <div className="ct-col">
              <div className="ct-eye">Option 2</div>
              <div className="ct-name">Télésecrétariat</div>
              <div className="ct-sub">Plateforme humaine</div>
            </div>
            <div className="ct-col winner">
              <div className="ct-eye">Recommandé</div>
              <div className="ct-name">Callinio</div>
              <div className="ct-sub">Assistante intelligente</div>
            </div>
          </div>
          {rows.map((r, i) => (
            <div className="ct-row" key={i}>
              <div className="ct-label">{r.label}</div>
              <div className="ct-cell muted">{r.a}</div>
              <div className="ct-cell muted">{r.b}</div>
              <div className={`ct-cell winner ${r.c_strong ? 'strong' : ''}`}>{r.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
