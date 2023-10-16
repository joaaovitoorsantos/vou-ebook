// components/Carousel.js
import Slider from "react-slick";

export default function Carousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img className="mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl" src={img} alt={`Carrossel imagem ${index}`}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}
