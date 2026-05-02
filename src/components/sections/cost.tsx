export default function Cost() {
  return (
    <section className="sec cost-section" data-screen-label="Cost">
      <div className="wrap">
        <div className="cost-top">
          <div className="cost-section-head">
            <span className="kicker">Le coût du silence</span>
            <h2 className="head-xl">
              Chaque appel raté,<br/>
              <em>c'est un chantier perdu.</em>
            </h2>
            <p className="cost-section-lede">
              Le téléphone sonne pendant que vous êtes les mains dans une chaudière.
              Quand vous voyez l'appel manqué, le client a déjà appelé le confrère d'à côté.
            </p>
          </div>

          <div className="cost-card featured">
            <div className="cost-feat-head">
              <div>
                <div className="cost-eye">Le manque à gagner annuel</div>
                <div className="cost-feat-title">Pour un artisan indépendant moyen.</div>
              </div>
              <div className="cost-feat-pill">Hypothèse modérée</div>
            </div>
            <div className="cost-feat-grid">
              <div>
                <div className="v">12 à 18</div>
                <div className="s">appels manqués / mois</div>
              </div>
              <div className="vline"></div>
              <div>
                <div className="v">30–40<em>%</em></div>
                <div className="s">perdus en chantier</div>
              </div>
              <div className="vline"></div>
              <div>
                <div className="v"><em>≈ 38 k€</em></div>
                <div className="s">de CA perdu chaque année.</div>
              </div>
            </div>
            <div className="cost-formula">
              Calcul : <b>15 appels × 35 % de perte × 600 € × 12 mois ≈ 38 000 € HT.</b>
            </div>
            <div className="cost-source">
              Sources : CAPEB 2024, Hiya 2024, InsideSales, enquête Callinio (312 utilisateurs, T1 2026).
            </div>
          </div>
        </div>

        <div className="cost-grid">
          <div className="cost-card">
            <div className="cost-eye">Appels sans réponse</div>
            <div className="cost-num">38<em>%</em></div>
            <div className="cost-bar"><span style={{ width: '38%' }}></span></div>
            <div className="cost-label">
              des appels reçus par les artisans en activité restent sans réponse — chantier en cours, déplacement, client précédent.
            </div>
            <div className="cost-src">Source : enquête CAPEB 2024 (n=2 100)</div>
          </div>

          <div className="cost-card">
            <div className="cost-eye">Sans message vocal</div>
            <div className="cost-num">8 sur 10</div>
            <div className="cost-bar"><span style={{ width: '80%' }}></span></div>
            <div className="cost-label">
              appelants raccrochent sans laisser de message. Vous ne saurez jamais qui voulait quoi.
            </div>
            <div className="cost-src">Source : Hiya · State of the Call Report 2024</div>
          </div>

          <div className="cost-card">
            <div className="cost-eye">Premier répondu</div>
            <div className="cost-num">78<em>%</em></div>
            <div className="cost-bar"><span style={{ width: '78%' }}></span></div>
            <div className="cost-label">
              des clients commandent chez le premier artisan qui décroche. La rapidité fait gagner le chantier.
            </div>
            <div className="cost-src">Source : InsideSales · Lead Response Study</div>
          </div>
        </div>
      </div>
    </section>
  );
}
