const items = [
  { name: "Julien M.", job: "Plombier-chauffagiste", city: "Lyon 7e", initials: "JM", quote: "En deux mois, j'ai récupéré 12 chantiers que j'aurais perdus avant. Mes clients me disent qu'ils ont parlé à ma 'secrétaire'.", stat: "+12 chantiers récupérés", stat_d: "en 2 mois" },
  { name: "Sophie B.", job: "Électricienne", city: "Villeurbanne", initials: "SB", quote: "Avant je rappelais le soir, fatiguée, et la moitié n'avait plus besoin de moi. Maintenant je sais qui veut quoi avant de rappeler.", stat: "30 min/jour gagnées", stat_d: "à trier les appels" },
  { name: "Karim T.", job: "Serrurier", city: "Saint-Étienne", initials: "KT", quote: "Le démarchage m'usait. Callinio filtre tout ça. Je ne reçois que les vrais clients, avec le motif clair.", stat: "0 démarchage", stat_d: "qui passe la barrière" },
  { name: "François L.", job: "Couvreur", city: "Bourg-en-Bresse", initials: "FL", quote: "Je suis seul. Je n'ai pas les moyens d'une vraie secrétaire. Pour 69 € par mois j'ai l'équivalent. C'est un confort dingue.", stat: "69 € / mois", stat_d: "vs 280 € télésecrétariat" },
];

export default function Testimonials() {
  return (
    <section className="sec testimonials" id="testimonials" data-screen-label="Testimonials">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Ils sont déjà passés à Callinio</span>
            <h2 className="head-xl">
              1 240 artisans<br/>
              <em>nous font confiance.</em>
            </h2>
          </div>
          <p>Plombiers, électriciens, couvreurs, serruriers — partout en France. Voici ce qu'ils en disent, dans leurs mots.</p>
        </div>

        <div className="trust-row">
          <div className="trust-stat"><div className="v">1 240</div><div className="s">artisans actifs</div></div>
          <div className="trust-vline"></div>
          <div className="trust-stat"><div className="v">87 000+</div><div className="s">messages captés</div></div>
          <div className="trust-vline"></div>
          <div className="trust-stat"><div className="v">4,8 / 5</div><div className="s">note moyenne · 312 avis</div></div>
          <div className="trust-vline"></div>
          <div className="trust-stat"><div className="v">96 %</div><div className="s">renouvellent au bout de 14 jours</div></div>
        </div>

        <div className="testi-grid">
          {items.map((it, i) => (
            <figure className="testi" key={i}>
              <div className="testi-stars">★★★★★</div>
              <blockquote>« {it.quote} »</blockquote>
              <div className="testi-stat">
                <span className="v">{it.stat}</span>
                <span className="d">{it.stat_d}</span>
              </div>
              <figcaption>
                <div className="av">{it.initials}</div>
                <div>
                  <div className="nm">{it.name}</div>
                  <div className="jb">{it.job} · {it.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
