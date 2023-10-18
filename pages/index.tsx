import Image from 'next/image'
import Header from '@components/header'
import SecondSection from '@components/secondSection'
import ThirdSection from '@components/ThirdSection'
import FourthSection from '@components/fourthSection'
import FifthSection from '@components/fifthSection'
import LastSection from '@components/lastSection'
import Carousel from '@components/Carousel';
import Slider from 'react-slick'

export default function Home() {

  const images = [
    "https://i.imgur.com/jj9YP2d.png",
    "https://i.imgur.com/keszODb.png",
    "https://i.imgur.com/kjxB8x8.png",
    "https://i.imgur.com/oJqIafP.png",
    "https://i.imgur.com/9XaRudf.png",
    // "https://i.imgur.com/7Osfxv1.png"
  ];

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 640, // a partir de 640px
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024, // a partir de 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  return (
    <>
      <Header />
      <SecondSection />
      <FourthSection />
      <div className='bg-white flex flex-row items-center justify-center'>
        <div style={{width: 'calc(100% - 60px)', height: 'auto'}}>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="p-2">
                <img className="" src={img} alt={`Carrossel imagem ${index}`} style={{
                  width: 300,
                  height: 300,
                  objectFit: 'contain'
                }}/>
              </div>
            ))}
          </Slider>
        </div>
      </div>


      <LastSection />
    </>
  )
}
