import React, { useState, useEffect } from "react";
// import "./Carousel.css";

function Carousel() {

const images = [
"https://www.bajaao.com/cdn/shop/files/Drum_pc_d9678558-3a8f-415a-a747-9bfc31753588.jpg?v=1766058783&width=2000",
"https://www.bajaao.com/cdn/shop/files/Redone_banner.jpg?v=1772690261&width=1400",
"https://www.bajaao.com/cdn/shop/files/Waves_-_Hero_UPSCALED.jpg?v=1772610013&width=2000",
"https://www.bajaao.com/cdn/shop/files/uad_hero_-_final_redone.jpg?v=1772691287&width=1400",
"https://www.bajaao.com/cdn/shop/files/Buy_Pro_Tools_Studio_-_Hero_banner.jpg?v=1772690317&width=1400",
"https://www.bajaao.com/cdn/shop/files/studio_2e94c354-e4ec-49ce-90d5-665f183916df.jpg?v=1766058979&width=2000",
"https://www.bajaao.com/cdn/shop/files/studio_2e94c354-e4ec-49ce-90d5-665f183916df.jpg?v=1766058979&width=2000"
,
"https://www.bajaao.com/cdn/shop/files/studio_2e94c354-e4ec-49ce-90d5-665f183916df.jpg?v=1766058979&width=2000"
//yuh
];

const [index, setIndex] = useState(0);

useEffect(() => {

const interval = setInterval(() => {
setIndex((prev) => (prev + 1) % images.length);
}, 3000);

return () => clearInterval(interval);

}, []);

return (

<div className="carousel">

<div
className="carousel-track"
style={{ transform: `translateX(-${index * 100}%)` }}
>

{images.map((img, i) => (
<img key={i} src={img} alt={`slide-${i}`} />
))}

</div>

</div>

);
}

export default Carousel;

