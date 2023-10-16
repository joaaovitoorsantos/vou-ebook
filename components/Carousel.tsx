// components/Carousel.js
import Slider from "react-slick";

export default function Carousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img className="mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl" src={img} alt={`Carrossel imagem ${index}`}/>
          </div>
        ))}
      </Slider>
  );
}
