// components/Carousel.js
import Slider from "react-slick";

export default function Carousel({ images }) {
  const settings = {
    className: 'center',
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <img src={img} alt={`Carrossel imagem ${index}`} />
      ))}
    </Slider>
  );
}
