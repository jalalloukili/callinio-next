import { Icons } from '../icons';

export default function Product() {
  return (
    <section className="sec product" id="product" data-screen-label="Product">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Vos outils</span>
            <h2 className="head-xl">
              L'app dans votre poche.<br/>
              <em>Le tableau de bord</em> au bureau.
            </h2>
          </div>
          <p>Conçus pour aller vite : vous lisez le message, vous rappelez en un appui. Sans clics inutiles, sans menus profonds.</p>
        </div>

        <div className="prod-grid">
          <div className="prod-copy">
            <h3>Tous vos messages, <em>dans une seule app.</em></h3>
            <p>iOS et Android. Notifications push instantanées. Vous voyez le motif, le numéro, le contexte — et vous rappelez d'un appui.</p>
            <ul className="bullets">
              <li><Icons.check/><span><b>Audio + transcription</b> de chaque appel, conservés.</span></li>
              <li><Icons.check/><span><b>Rappel en un appui</b> — l'app compose pour vous.</span></li>
              <li><Icons.check/><span><b>Marquer comme traité</b>, classer, retrouver.</span></li>
              <li><Icons.check/><span><b>Hors ligne</b> : les messages restent lisibles sans réseau.</span></li>
            </ul>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <span className="btn btn-outline-dark btn-sm" style={{ cursor: 'default' }}>App Store</span>
              <span className="btn btn-outline-dark btn-sm" style={{ cursor: 'default' }}>Google Play</span>
            </div>
          </div>

          <div className="app-frame">
            <div className="app-phone">
              <div className="app-screen">
                <div className="app-status"><span>9:42</span><span>●●● 5G</span></div>
                <div className="app-head">
                  <div>
                    <div className="app-h-title">Messages</div>
                    <div className="app-h-sub">3 nouveaux · aujourd'hui</div>
                  </div>
                  <div className="app-h-avatar">JM</div>
                </div>
                <div className="app-tabs">
                  <span className="on">À traiter</span>
                  <span>Traités</span>
                  <span>Filtrés</span>
                </div>
                <div className="app-list">
                  <div className="app-item unread">
                    <div className="av">MB</div>
                    <div className="body">
                      <div className="top"><span className="name">M. Bernard</span><span className="time">9:42</span></div>
                      <div className="preview">Volet roulant bloqué — Villeurbanne</div>
                      <div className="tags"><span className="tag">Volet</span><span className="tag gray">5 min</span></div>
                    </div>
                    <span className="unread-dot"></span>
                  </div>
                  <div className="app-item unread">
                    <div className="av">SL</div>
                    <div className="body">
                      <div className="top"><span className="name">Mme Laurent</span><span className="time">9:18</span></div>
                      <div className="preview">Fuite sous évier — dispo après 15 h</div>
                      <div className="tags"><span className="tag">Plomberie</span><span className="tag amber">Devis</span></div>
                    </div>
                    <span className="unread-dot"></span>
                  </div>
                  <div className="app-item">
                    <div className="av">PG</div>
                    <div className="body">
                      <div className="top"><span className="name">P. Garnier</span><span className="time">8:55</span></div>
                      <div className="preview">Devis chaudière — rappel demandé</div>
                      <div className="tags"><span className="tag gray">Traité</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="prod-grid flip">
          <div className="prod-copy">
            <h3>Au bureau, <em>tout l'historique</em> sous les yeux.</h3>
            <p>Tableau de bord web pour suivre votre activité téléphonique : appels reçus, messages capturés, minutes consommées, taux de joignabilité.</p>
            <ul className="bullets">
              <li><Icons.check/><span><b>Historique complet</b> avec recherche par nom, motif, date.</span></li>
              <li><Icons.check/><span><b>Statistiques mensuelles</b> — appels, minutes, conversion.</span></li>
              <li><Icons.check/><span><b>Export</b> en CSV pour comptabilité ou suivi commercial.</span></li>
              <li><Icons.check/><span><b>Multi-utilisateurs</b> : partagez l'accès à votre équipe.</span></li>
            </ul>
          </div>

          <div className="dash-frame">
            <div className="dash-window">
              <div className="dash-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <div className="url">app.callinio.fr / messages</div>
              </div>
              <div className="dash-side">
                <div className="brand-row">
                  <div className="brand-mark"></div>
                  <div className="brand-name">Callinio</div>
                </div>
                <a className="on">Messages <span className="badge-mini">3</span></a>
                <a>Historique appels</a>
                <a>Statistiques</a>
                <a>Réglages assistante</a>
                <a>Facturation</a>
                <a>Équipe</a>
              </div>
              <div className="dash-main">
                <div><h5>Aperçu — octobre 2026</h5></div>
                <div className="dash-stats">
                  <div className="dash-stat"><div className="lbl">Appels reçus</div><div className="v">142</div><div className="d">+18% vs sept.</div></div>
                  <div className="dash-stat"><div className="lbl">Messages captés</div><div className="v">98</div><div className="d">69% capture</div></div>
                  <div className="dash-stat"><div className="lbl">Minutes</div><div className="v">187 / 300</div><div className="d">62% du forfait</div></div>
                </div>
                <div className="dash-table">
                  <div className="th"><span>Appelant</span><span>Motif</span><span>État</span><span>Heure</span></div>
                  <div className="tr"><span className="nm">M. Bernard</span><span className="mt">Volet roulant bloqué</span><span><span className="tag-pill new">Nouveau</span></span><span className="time">9:42</span></div>
                  <div className="tr"><span className="nm">Mme Laurent</span><span className="mt">Fuite sous évier — Lyon 3</span><span><span className="tag-pill amber">Devis</span></span><span className="time">9:18</span></div>
                  <div className="tr"><span className="nm">P. Garnier</span><span className="mt">Demande de devis chaudière</span><span><span className="tag-pill done">Traité</span></span><span className="time">8:55</span></div>
                  <div className="tr"><span className="nm">A. Costa</span><span className="mt">Demande de passage</span><span><span className="tag-pill done">Traité</span></span><span className="time">Hier</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
