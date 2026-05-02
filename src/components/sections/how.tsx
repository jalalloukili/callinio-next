'use client';

import { useState, useEffect, useRef } from 'react';
import { Icons } from '../icons';

export default function How() {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.45;
      let nearest = 0, dist = Infinity;
      stepsRef.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const c = (r.top + r.bottom) / 2;
        const d = Math.abs(c - mid);
        if (d < dist) { dist = d; nearest = i; }
      });
      setActive(nearest);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const steps = [
    {
      n: '01',
      title: <><span>Vous transférez vos appels manqués </span><em>sur Callinio.</em></>,
      desc: "Pas de nouveau numéro à donner. On configure le renvoi en 5 minutes — quand vous êtes occupé ou injoignable, l'appel arrive chez votre assistante."
    },
    {
      n: '02',
      title: <><span>Votre assistante répond, </span><em>écoute, comprend.</em></>,
      desc: "Une voix calme et naturelle, en français. Elle se présente, demande le nom, le numéro, et le motif de l'appel. Elle reformule pour être sûre."
    },
    {
      n: '03',
      title: <><span>Le message est </span><em>résumé pour vous.</em></>,
      desc: "Nom, numéro, motif, contexte. Tout est mis en forme — sans rien décider à votre place. Vous voyez le message exactement comme le client l'a laissé."
    },
    {
      n: '04',
      title: <><span>Vous recevez tout </span><em>en moins de 30 secondes.</em></>,
      desc: "Notification push sur votre mobile, email en doublon. Vous rappelez quand vous êtes prêt — entre deux interventions, en pause, le soir."
    },
  ];

  return (
    <section className="sec how" id="how" data-screen-label="How it works">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Comment ça marche</span>
            <h2 className="head-xl">
              Quatre étapes.<br/>
              <em>Aucune en pleine intervention.</em>
            </h2>
          </div>
          <p>Vous ne touchez à rien. Callinio travaille pendant que vous travaillez. Quand vous reposez l'outil, vos messages sont là — clairs, lisibles, regroupés.</p>
        </div>

        <div className="how-grid">
          <div className="steps">
            {steps.map((s, i) => (
              <div
                key={i}
                ref={el => { stepsRef.current[i] = el; }}
                className={`step ${active === i ? 'on' : ''}`}
                onMouseEnter={() => setActive(i)}
              >
                <div className="step-n">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="how-visual">
            <div className="how-eye">
              <span><span className="live-dot"></span>Démo en direct</span>
              <span>{steps[active].n} / 04</span>
            </div>
            <div className="how-stage">
              <div className={`how-screen ${active === 0 ? 'on' : ''}`}>
                <div className="scr-call">
                  <div className="ring-wrap">
                    <span className="ring r1"></span>
                    <span className="ring r2"></span>
                    <span className="core"><Icons.phone size={24}/></span>
                  </div>
                  <h4>M. Bernard appelle</h4>
                  <p>Vous êtes sur un chantier. L'appel est transféré à Callinio en une sonnerie.</p>
                </div>
              </div>

              <div className={`how-screen ${active === 1 ? 'on' : ''}`}>
                <div className="scr-listen">
                  <div className="transcript">
                    <div className="lbl">Conversation · en direct</div>
                    <div className="line"><b>Callinio</b>Bonjour, vous êtes chez Plomberie Martin. Je suis l'assistante de Julien. Comment puis-je vous aider ?</div>
                    <div className="line client"><b>Client</b>Oui bonjour, j'ai un volet roulant qui ne remonte plus.</div>
                    <div className="line"><b>Callinio</b>Je note. Vous êtes à quelle adresse ?</div>
                    <div className="line client"><b>Client</b>14 rue Gambetta à Villeurbanne.</div>
                  </div>
                </div>
              </div>

              <div className={`how-screen ${active === 2 ? 'on' : ''}`}>
                <div className="scr-summary">
                  <div className="summary-card">
                    <div className="top">
                      <span className="who">M. Bernard</span>
                      <span className="when">à l'instant</span>
                    </div>
                    <div className="row"><span className="k">Numéro</span><span className="v">06 23 45 78 91</span></div>
                    <div className="row"><span className="k">Motif</span><span className="v">Volet roulant bloqué</span></div>
                    <div className="row"><span className="k">Adresse</span><span className="v">Villeurbanne</span></div>
                    <div className="row"><span className="k">Disponibilité</span><span className="v">Cette semaine</span></div>
                    <div className="actions">
                      <div className="a-btn">Écouter</div>
                      <div className="a-btn primary">Rappeler</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`how-screen ${active === 3 ? 'on' : ''}`}>
                <div className="scr-notif">
                  <div className="mini-notif">
                    <div className="h">
                      <div className="ic"></div>
                      <div className="a">CALLINIO</div>
                      <div className="t">à l'instant</div>
                    </div>
                    <div className="ti">M. Bernard — Volet roulant</div>
                    <div className="b">Villeurbanne · 06 23 45 78 91 · dispo cette semaine</div>
                  </div>
                  <div className="mini-notif" style={{ opacity: 0.65, transform: 'scale(0.95)' }}>
                    <div className="h">
                      <div className="ic"></div>
                      <div className="a">EMAIL · CALLINIO</div>
                      <div className="t">à l'instant</div>
                    </div>
                    <div className="ti">Récap + audio joint</div>
                    <div className="b">Pour archive et partage avec votre comptable.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
