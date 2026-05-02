'use client';

import { useState, useEffect } from 'react';
import { Icons } from '../icons';

export function Hero() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!playing) return;
    if (progress >= 100) { setPlaying(false); setProgress(0); return; }
    const t = setTimeout(() => setProgress(p => Math.min(100, p + 0.7)), 60);
    return () => clearTimeout(t);
  }, [playing, progress]);

  const words = ["Bonjour,", "vous", "êtes", "chez", "Plomberie", "Martin.", "Je", "suis", "l'assistante", "de", "Julien.", "Comment", "puis-je", "vous", "aider", "?"];
  const activeWord = Math.floor((progress / 100) * words.length);

  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="hero-grid"></div>
      <div className="hero-bg"></div>
      <div className="wrap hero-inner">
        <div className="hero-layout">
          <div>
            <a className="hero-pill" href="#testimonials">
              <span className="tag">★★★★★</span>
              <span>1 240 artisans · note 4,8/5 · 14 jours offerts</span>
              <span className="arr"><Icons.arrow size={12}/></span>
            </a>
            <h1 className="hero-title">
              <span>Vos appels</span><br/>
              <em>captés.</em><br/>
              <span className="faded">Vos chantiers gardés.</span>
            </h1>
            <p className="hero-lede">
              Quand vous ne pouvez pas décrocher, votre assistante Callinio prend le message,
              note ce que veut le client, et vous envoie tout dans la seconde — par notification et email.
            </p>
            <div className="hero-actions">
              <a className="btn btn-amber btn-lg" href="#pricing">
                Démarrer l'essai gratuit <Icons.arrow className="arr" size={14}/>
              </a>
              <button
                className={`btn btn-audio btn-lg ${playing ? 'on' : ''}`}
                onClick={() => { if (progress >= 100) setProgress(0); setPlaying(p => !p); }}
                aria-label="Écouter un exemple de Callinio"
              >
                <span className="audio-icon">
                  {playing ? (
                    <span className="bars" aria-hidden="true">
                      <span></span><span></span><span></span><span></span>
                    </span>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M3 1.5v11l9-5.5L3 1.5z"/></svg>
                  )}
                </span>
                {playing ? "En écoute…" : "Écouter la voix"}
                <span className="audio-dur">0:18</span>
              </button>
            </div>
            <div className="hero-trust">
              <span>14 jours offerts</span>
              <span className="dot"></span>
              <span>Sans carte bancaire</span>
              <span className="dot"></span>
              <span>Hébergé en France</span>
            </div>
          </div>

          <div className="scene" aria-hidden="true">
            <div className="float-card fc-1">
              <div className="lbl"><span className="pulse-dot"></span>Appel en cours</div>
              <div className="v">M. Bernard</div>
              <div className="s">06 23 45 78 91</div>
            </div>
            <div className="float-card fc-2">
              <div className="lbl">Message livré</div>
              <div className="v">Push + Email</div>
              <div className="s">en moins de 30 secondes</div>
            </div>

            {playing && (
              <div className="hero-wave">
                <div className="hero-wave-lbl">
                  <span className="rec-dot"></span>
                  Démo · Callinio parle
                </div>
                <div className="hero-transcript">
                  {words.map((w, i) => (
                    <span key={i} className={i <= activeWord ? 'on' : ''}>{w} </span>
                  ))}
                </div>
                <div className="hero-bars">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <span key={i} style={{ animationDelay: `${(i * 40) % 600}ms`, opacity: i <= (progress / 100) * 28 ? 1 : 0.25 }}></span>
                  ))}
                </div>
                <div className="hero-progress">
                  <div className="hero-progress-bar" style={{ width: progress + '%' }}></div>
                </div>
              </div>
            )}

            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="lock-time">jeudi 24 octobre</div>
                <div className="lock-date">9:42</div>
                <div className="lock-day">3 nouveaux messages</div>
                <div className="notif notif-old">
                  <div className="notif-head">
                    <div className="notif-icon"></div>
                    <div className="notif-app">CALLINIO</div>
                    <div className="notif-time">il y a 12 min</div>
                  </div>
                  <div className="notif-title">Mme Laurent — fuite sous évier</div>
                </div>
                <div className="notif">
                  <div className="notif-head">
                    <div className="notif-icon"></div>
                    <div className="notif-app">CALLINIO</div>
                    <div className="notif-time">à l'instant</div>
                  </div>
                  <div className="notif-title">Nouveau message — M. Bernard</div>
                  <div className="notif-body">Volet roulant bloqué en position fermée. Souhaite un passage.</div>
                  <div className="notif-meta">
                    <span>📍 Villeurbanne</span>
                    <span>📞 06 23 45 78 91</span>
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

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-head">Ils nous font confiance — 1 240 artisans dans toute la France</div>
      <div className="mq-track">
        <span className="mq-logo serif">Plomberie</span>
        <span className="mq-logo"><span className="mark"></span>Électricité</span>
        <span className="mq-logo thin">SERRURERIE</span>
        <span className="mq-logo serif">Chauffagiste</span>
        <span className="mq-logo"><span className="dot-mk"></span>Couverture</span>
        <span className="mq-logo thin">MENUISERIE</span>
        <span className="mq-logo serif">Maçonnerie</span>
        <span className="mq-logo"><span className="mark"></span>Carrelage</span>
        <span className="mq-logo serif">Plomberie</span>
        <span className="mq-logo"><span className="mark"></span>Électricité</span>
        <span className="mq-logo thin">SERRURERIE</span>
        <span className="mq-logo serif">Chauffagiste</span>
        <span className="mq-logo"><span className="dot-mk"></span>Couverture</span>
        <span className="mq-logo thin">MENUISERIE</span>
        <span className="mq-logo serif">Maçonnerie</span>
        <span className="mq-logo"><span className="mark"></span>Carrelage</span>
      </div>
    </div>
  );
}
