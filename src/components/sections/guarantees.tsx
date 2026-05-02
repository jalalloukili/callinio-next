import { Icons } from '../icons';

export default function Guarantees() {
  return (
    <section className="sec guarantees tight" data-screen-label="Guarantees">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Vos garanties</span>
            <h2 className="head-xl">Sans risque. <em>Sans piège.</em></h2>
          </div>
          <p>On a fait simple : vous testez, vous gardez si ça vous convient, vous arrêtez si ça ne vous convient pas.</p>
        </div>
        <div className="guar-grid">
          <div className="guar">
            <div className="guar-icon"><Icons.zap/></div>
            <h4>14 jours offerts</h4>
            <p>Toutes les fonctions débloquées. Aucune carte bancaire demandée pour démarrer.</p>
          </div>
          <div className="guar">
            <div className="guar-icon"><Icons.shield/></div>
            <h4>Sans engagement</h4>
            <p>Vous résiliez en un clic depuis votre compte. Pas de préavis, pas de formulaire papier.</p>
          </div>
          <div className="guar">
            <div className="guar-icon"><Icons.globe/></div>
            <h4>Hébergé en France</h4>
            <p>Vos appels et données restent en France. Conforme RGPD. Audit annuel.</p>
          </div>
          <div className="guar">
            <div className="guar-icon"><Icons.user/></div>
            <h4>Support humain</h4>
            <p>Une équipe française au téléphone, du lundi au vendredi. Pour de vrai.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
