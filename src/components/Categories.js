
import React from "react";
// import "./Categories.css";

function Categories() {
  const categories = [
    {
      name: "Dj Mixer",
      image: "https://static.vecteezy.com/system/resources/previews/036/393/156/large_2x/ai-generated-electronic-dance-music-edm-background-electro-sound-poster-techno-dance-banner-abstract-dj-music-cover-free-photo.jpeg",
    },
    {
      name: "Dj Controller",
      image: "https://thumbs.dreamstime.com/z/close-up-djs-controller-black-background-photo-generative-ai-close-up-djs-controller-black-background-photo-generative-284485373.jpg?w=992",
    },
    {
      name: "Dj TurnTabel",
      image: "https://th.bing.com/th/id/OIP.AG9ci3OCnZeSnHhL4CTtogHaEK?w=275&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      name: "Dj Players",
      image: "https://th.bing.com/th/id/OIP.dn8amDf_AyQyysl_O5PqQQHaE8?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
      name: "Lightning Controllers",
      image: "https://m.media-amazon.com/images/I/817JXR6RWmS.jpg",
    },
  ];

  return (
    <section className="categories-section">
      <div className="section-header">
        <h1>Explore By Category</h1>
      </div>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="category-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
