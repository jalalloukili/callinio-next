export default function Features() {
  return (
    <section className="sec features dark" id="features" data-screen-label="Features">
      <div className="wrap">
        <div className="feat-top">
          <div className="b-card b-1">
            <div>
              <div className="b-eye">Voix française naturelle</div>
              <div className="b-t" style={{ marginTop: 14 }}>
                Une voix calme, en français, qui se présente avec votre nom de société et explique pourquoi vous ne pouvez pas répondre.
              </div>
            </div>
            <div className="b-art">
              <div className="art-rings">
                <span className="ring r1"></span>
                <span className="ring r2"></span>
                <span className="ring r3"></span>
                <span className="core"></span>
                <span className="blip b1"></span>
                <span className="blip b2"></span>
              </div>
            </div>
            <div className="b-d">Vos clients pensent parler à votre secrétariat. Ils laissent un vrai message.</div>
          </div>

          <div className="feat-header">
            <span className="kicker">Ce que fait Callinio</span>
            <h2 className="head-xl">
              Un standard téléphonique<br/>
              <em>invisible.</em><span className="faded"> Qui travaille à votre place.</span>
            </h2>
            <p className="feat-lede">
              Callinio prend les appels que vous ne pouvez pas prendre, capte le message,
              et vous le transmet. Il ne décide rien — c'est vous qui choisissez ce qui compte.
            </p>
          </div>
        </div>

        <div className="bento-row-1">
          <div className="b-card b-2">
            <div className="b-eye">Notification + email</div>
            <div className="b-art">
              <div className="art-msg m1"><span className="lbl">Message</span>M. Bernard — volet bloqué · Villeurbanne</div>
              <div className="art-msg m3"><span className="lbl">Message</span>Mme Laurent — fuite sous évier · Lyon 3</div>
              <div className="art-msg m2"><span className="lbl">Email · pièce jointe</span>Audio + récap · 12.4 ko</div>
            </div>
            <div className="b-t" style={{ fontSize: 20 }}>Tout reçu en 30 secondes.<br/>Sur mobile et par email.</div>
          </div>

          <div className="b-card b-3">
            <div className="b-eye">Application mobile</div>
            <div className="b-art">
              <div className="art-msglist">
                <div className="ml-row">
                  <div className="ml-av">MB</div>
                  <div className="ml-body">
                    <div className="ml-top"><b>M. Bernard</b><span>9:42</span></div>
                    <div className="ml-prv">Volet roulant — Villeurbanne</div>
                  </div>
                  <span className="ml-dot"></span>
                </div>
                <div className="ml-row">
                  <div className="ml-av">SL</div>
                  <div className="ml-body">
                    <div className="ml-top"><b>Mme Laurent</b><span>9:18</span></div>
                    <div className="ml-prv">Fuite sous évier — Lyon 3</div>
                  </div>
                  <span className="ml-dot"></span>
                </div>
              </div>
            </div>
            <div className="b-t" style={{ fontSize: 20 }}>Tous vos messages, regroupés. iOS et Android.</div>
          </div>
        </div>

        <div className="bento-row-2">
          <div className="b-card b-4">
            <div className="b-eye">Filtrage</div>
            <div className="b-art">
              <div className="art-filter">
                <div className="row killed">Démarchage assurance</div>
                <div className="row killed">Crédit conso</div>
                <div className="row pass">Mme Laurent · client</div>
              </div>
            </div>
            <div className="b-d" style={{ fontSize: 12.5 }}>Le démarchage est écarté poliment. Pas dans votre liste.</div>
          </div>

          <div className="b-card b-5">
            <div className="b-eye">Numéro conservé</div>
            <div className="b-art">
              <div className="art-num">
                <div className="art-num-old">06 23 45 67 89</div>
                <div className="art-num-arrow">→</div>
                <div className="art-num-new">06 23 45 67 89<div className="art-num-tag">Inchangé</div></div>
              </div>
            </div>
            <div className="b-d">Pas de nouveau numéro à donner. Vos cartes de visite restent valides.</div>
          </div>

          <div className="b-card b-6">
            <div className="b-eye">Tableau de bord</div>
            <div className="b-art">
              <div className="art-mins">
                <span style={{ height: '30%' }}></span><span style={{ height: '55%' }}></span>
                <span style={{ height: '40%' }}></span><span className="h" style={{ height: '72%' }}></span>
                <span style={{ height: '48%' }}></span><span style={{ height: '65%' }}></span>
                <span className="h" style={{ height: '82%' }}></span><span style={{ height: '58%' }}></span>
              </div>
            </div>
            <div className="b-t" style={{ fontSize: 20, color: '#fff' }}>Suivi mensuel des appels et minutes consommées.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
