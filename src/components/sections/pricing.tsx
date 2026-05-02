'use client';

import { useState, useEffect } from 'react';
import { Icons } from '../icons';

function Calculator({ onRecommend }: { onRecommend?: (name: string) => void }) {
  const [calls, setCalls] = useState(8);
  const [duration, setDuration] = useState(2.5);

  const minutesPerMonth = Math.round(calls * duration * 22);

  let recommended = 'Starter';
  let recPrice = 39;
  if (minutesPerMonth > 100) { recommended = 'Pro'; recPrice = 69; }
  if (minutesPerMonth > 300) { recommended = 'Business'; recPrice = 119; }

  useEffect(() => { onRecommend && onRecommend(recommended); }, [recommended]);

  const overage = recommended === 'Starter' && minutesPerMonth > 100 ? minutesPerMonth - 100
    : recommended === 'Pro' && minutesPerMonth > 300 ? minutesPerMonth - 300
    : recommended === 'Business' && minutesPerMonth > 700 ? minutesPerMonth - 700
    : 0;

  return (
    <div className="calc">
      <div className="calc-head">
        <div className="calc-eye">Quel forfait pour moi ?</div>
        <h4>Estimez en 10 secondes.</h4>
        <p>Deux curseurs. Le forfait recommandé s'ajuste tout seul.</p>
      </div>
      <div className="calc-body">
        <div className="calc-controls">
          <div className="calc-row">
            <div className="calc-row-head">
              <label>Appels manqués / jour ouvré</label>
              <span className="calc-val">{calls}</span>
            </div>
            <input type="range" min="1" max="30" step="1" value={calls}
              onChange={e => setCalls(parseInt(e.target.value))} />
            <div className="calc-row-foot"><span>1</span><span>15</span><span>30</span></div>
          </div>
          <div className="calc-row">
            <div className="calc-row-head">
              <label>Durée moyenne d'un message</label>
              <span className="calc-val">{duration} min</span>
            </div>
            <input type="range" min="1" max="6" step="0.5" value={duration}
              onChange={e => setDuration(parseFloat(e.target.value))} />
            <div className="calc-row-foot"><span>1 min</span><span>3 min</span><span>6 min</span></div>
          </div>
        </div>
        <div className="calc-result">
          <div className="calc-mins">
            <div className="lbl">Consommation estimée</div>
            <div className="v">{minutesPerMonth} <span>min / mois</span></div>
          </div>
          <div className="calc-rec">
            <div className="lbl">Forfait recommandé</div>
            <div className="rec-name">{recommended}</div>
            <div className="rec-price">{recPrice} € HT <span>/ mois</span></div>
            {overage > 0 && (
              <div className="rec-over">+ ~{overage} min en pack ou facturation à la minute</div>
            )}
            <a href="#pricing-plans" className="btn btn-dark btn-sm" style={{ marginTop: 14 }}>
              Voir le détail des forfaits
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [calcMatch, setCalcMatch] = useState('Pro');

  const plans = [
    {
      name: 'Starter',
      lead: "Pour démarrer en douceur, 1 ligne, faible volume d'appels.",
      price: 39,
      mins: '100 minutes incluses / mois',
      features: ["Assistante Callinio personnalisée", "100 minutes d'appels par mois", "App mobile iOS + Android", "Notifications push + email", "Tableau de bord web", "Numéro conservé"],
      cta: "Démarrer l'essai gratuit",
      style: '',
    },
    {
      name: 'Pro',
      lead: "Le choix des artisans en activité, qui reçoivent plusieurs appels par jour.",
      price: 69,
      mins: '300 minutes incluses / mois',
      features: ["Tout le plan Starter", "300 minutes d'appels par mois", "Filtrage du démarchage", "Audio + transcription archivés", "Export CSV", "Support dédié"],
      cta: "Démarrer l'essai gratuit",
      style: 'popular',
    },
    {
      name: 'Business',
      lead: "Pour les équipes, plusieurs intervenants, gros volume.",
      price: 119,
      mins: '700 minutes incluses / mois',
      features: ["Tout le plan Pro", "700 minutes d'appels par mois", "Multi-utilisateurs (jusqu'à 5)", "Plusieurs lignes / sociétés", "Personnalisation avancée", "Account manager dédié"],
      cta: "Parler à l'équipe",
      style: '',
    },
  ];

  return (
    <section className="sec pricing-section" id="pricing" data-screen-label="Pricing">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Tarifs</span>
            <h2 className="head-xl">
              Trois formules.<br/>
              <em>Sans engagement.</em>
            </h2>
          </div>
          <p>Essai gratuit pour chaque formule. Vous changez quand vous voulez. Vous arrêtez quand vous voulez.</p>
        </div>

        <Calculator onRecommend={setCalcMatch} />

        <div className="pricing" id="pricing-plans">
          {plans.map((p, i) => (
            <div className={`plan ${p.style} ${p.name === calcMatch ? 'calc-match' : ''}`} key={i}>
              <div className="plan-name">{p.name}</div>
              <div className="plan-lead">{p.lead}</div>
              <div className="plan-price">
                <span className="amt">{p.price}<span style={{ fontSize: '0.55em' }}>€</span></span>
                <span className="per">HT / mois</span>
              </div>
              <div className="plan-mins">{p.mins}</div>
              <ul className="plan-features">
                {p.features.map((f, j) => (
                  <li key={j}><Icons.check size={16}/><span>{f}</span></li>
                ))}
              </ul>
              <a href="#cta" className={`btn ${p.style === 'popular' ? 'btn-dark' : 'btn-amber'} btn-lg`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="packs">
          <div className="packs-head">
            <div>
              <h4>Vous avez un mois chargé ?</h4>
              <p>Achetez des minutes supplémentaires sans changer de formule. Crédit valable 12 mois.</p>
            </div>
          </div>
          <div className="packs-grid">
            <div className="pack"><div className="min">+ 50 min</div><div className="pr">19 € HT</div><div className="rate">0,38 €/min</div></div>
            <div className="pack"><div className="min">+ 150 min</div><div className="pr">49 € HT</div><div className="rate">0,33 €/min</div></div>
            <div className="pack best"><div className="min">+ 400 min</div><div className="pr">109 € HT</div><div className="rate">0,27 €/min</div></div>
            <div className="pack"><div className="min">+ 1000 min</div><div className="pr">239 € HT</div><div className="rate">0,24 €/min</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
