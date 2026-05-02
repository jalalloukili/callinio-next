const items = [
  { q: "Est-ce que mes clients vont savoir qu'ils parlent à un répondeur ?", a: "Votre assistante Callinio se présente clairement comme l'assistante de votre société. Elle parle avec une voix calme et naturelle. La majorité des clients laissent leur message sans hésiter — comme avec une vraie secrétaire. Vous pouvez écouter un exemple en haut de cette page." },
  { q: "Et si l'IA ne comprend pas mon client (accent, bruit de fond, jargon métier) ?", a: "Callinio est entraînée sur le vocabulaire des métiers du bâtiment et tolère les accents régionaux français. En cas de doute, elle reformule pour être sûre — et l'audio brut est toujours conservé en pièce jointe : si la transcription rate un mot, vous écoutez l'original en un appui. On ne masque jamais la voix du client." },
  { q: "Qui prend les appels la nuit, le week-end, les jours fériés ?", a: "Callinio. 24h/24, 7j/7, 365 jours par an, sans pause ni jour férié. Chaque appel est traité de la même manière : message capté, motif noté, notification envoyée. Vous lisez le matin ou rappelez si c'est urgent — vous décidez." },
  { q: "Est-ce que je dois changer de numéro de téléphone ?", a: "Non. Vous gardez votre numéro actuel. Callinio fonctionne par renvoi d'appel : quand vous ne décrochez pas (occupé, absent, hors zone), l'appel bascule automatiquement sur votre assistante. La configuration prend cinq minutes — on vous accompagne par téléphone si besoin." },
  { q: "Que se passe-t-il si je dépasse mes minutes incluses ?", a: "Rien ne se coupe. Vous pouvez activer la facturation à la minute (0,29 € HT/min) ou acheter un pack supplémentaire — au choix. Vous êtes prévenu à 80 % et 100 % du forfait, par email et notification." },
  { q: "Est-ce que Callinio peut prendre des rendez-vous à ma place ?", a: "Non. Callinio note ce que dit le client : motif, disponibilités, numéro, contexte. Mais elle ne décide jamais d'un créneau dans votre agenda — c'est vous qui rappelez et vous qui validez. Vous restez maître de votre planning." },
  { q: "Comment je résilie ?", a: "En un clic depuis votre espace de facturation. Pas de préavis, pas de courrier, pas de justification. Votre abonnement s'arrête à la fin du mois en cours. Pas de pénalité, pas de pénibilité." },
  { q: "Mes données téléphoniques sont-elles en sécurité ?", a: "Oui. Callinio est hébergé en France (datacenter OVH Roubaix), conforme RGPD. Les enregistrements sont chiffrés au repos comme en transit. Vous pouvez exporter ou supprimer vos données à tout moment depuis votre tableau de bord. Audit annuel par un cabinet indépendant." },
  { q: "Je suis seul, est-ce que ça vaut le coup ?", a: "C'est même conçu pour ça. Un artisan seul perd en moyenne 30 à 40 k€ par an en appels non transformés. Callinio coûte entre 39 et 119 € par mois. Le calcul est rapide — un seul chantier récupéré dans l'année rembourse plusieurs fois l'abonnement." },
];

export default function Faq() {
  return (
    <section className="sec faq-section tight" id="faq" data-screen-label="FAQ">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <span className="kicker">Questions</span>
            <h2 className="head-xl" style={{ fontSize: 'clamp(34px, 4vw, 56px)' }}>
              Les questions<br/>
              <em>qu'on nous pose</em><br/>
              <span className="faded">le plus souvent.</span>
            </h2>
            <div className="faq-help">
              <div className="faq-help-eye">Une autre question ?</div>
              <div className="faq-help-row">
                <a href="tel:+33428290909" className="faq-help-cta">
                  <span className="ic">📞</span>
                  <div><div className="t">04 28 29 09 09</div><div className="s">Lun–Ven · 9 h – 18 h</div></div>
                </a>
                <a href="mailto:bonjour@callinio.fr" className="faq-help-cta">
                  <span className="ic">✉</span>
                  <div><div className="t">bonjour@callinio.fr</div><div className="s">Réponse sous 24 h</div></div>
                </a>
              </div>
            </div>
          </div>
          <div className="faq-list">
            {items.map((it, i) => (
              <details className="faq-item" key={i} open={i === 0}>
                <summary>
                  <span>{it.q}</span>
                  <span className="icn">+</span>
                </summary>
                <div className="a">{it.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
