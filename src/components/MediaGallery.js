import React from "react";

function MediaGallery() {
  // Reuse the FeaturedProducts image URLs
  const productImages = [
        "https://th.bing.com/th/id/OIP.dn8amDf_AyQyysl_O5PqQQHaE8?w=276&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://i.ytimg.com/vi/OkNcofpl_kY/maxresdefault.jpg",
    "https://images.unsplash.com/photo-1576149369018-cde95948fdcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRqJTIwY29udHJvbGxlcnN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1664195074882-a4913ee143cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  ];

  return (
    <section className="gallery">
      <h2>Media Gallery</h2>
      <div className="gallery-grid">
        {productImages.map((img, index) => (
          <img key={index} src={img} alt={`product-${index}`} />
        ))}
      </div>
    </section>
  );
}

export default MediaGallery;