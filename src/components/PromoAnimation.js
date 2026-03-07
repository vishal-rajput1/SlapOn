import React from "react";

function PromoAnimation() {
  return (
    <section className="promo-section">

      <div className="promo-container">

        <iframe
          className="promo-video"
          src="https://www.youtube.com/embed/dN84afLKwfQ?start=27&autoplay=1&mute=1&loop=1&playlist=dN84afLKwfQ"
          title="DJ Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <div className="promo-text">
          <h1>Feel The Beat</h1>
          <p>Upgrade your DJ setup with pro gear</p>
        </div>

      </div>

    </section>
  );
}

export default PromoAnimation;