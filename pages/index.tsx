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
    speed: 500,
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
          slidesToShow: 2,
        }
      },
    ]
  };

  return (
    <>
      <Header />
      <SecondSection />
      <FourthSection />
      <div className='bg-white'>
        <div className='w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto px-8 sm:px-0 min-h-[300px]'>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="p-2">
                <img className="mx-auto w-full h-full object-contain" src={img} alt={`Carrossel imagem ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>


      <LastSection />
    </>
  )
}
