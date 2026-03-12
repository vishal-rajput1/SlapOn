import React from "react";

function PromoAnimation() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden">

      {/* Background Video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="https://www.youtube.com/embed/dN84afLKwfQ?start=27&autoplay=1&mute=1&loop=1&playlist=dN84afLKwfQ&controls=0&showinfo=0&modestbranding=1"
        title="DJ Promo"
        frameBorder="0"
        allow="autoplay"
      ></iframe>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-4">
          Feel The Beat
        </h1>

        <p className="text-gray-200 text-sm md:text-lg mb-6">
          Upgrade your DJ setup with professional gear
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
          Shop DJ Gear
        </button>

      </div>

    </section>
  );
}

export default PromoAnimation;