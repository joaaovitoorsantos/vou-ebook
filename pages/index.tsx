import Image from 'next/image'
import Header from '@components/header'
import SecondSection from '@components/secondSection'
import ThirdSection from '@components/ThirdSection'
import FourthSection from '@components/fourthSection'
import FifthSection from '@components/fifthSection'
import LastSection from '@components/lastSection'
import Carousel from '../components/Carousel';

export default function Home() {

  const images = [
    "https://i.imgur.com/jj9YP2d.png",
    "https://i.imgur.com/keszODb.png",
    "https://i.imgur.com/kjxB8x8.png",
    "https://i.imgur.com/oJqIafP.png",
    "https://i.imgur.com/9XaRudf.png",
    // "https://i.imgur.com/7Osfxv1.png"
  ];

  return (
    <>
      <Header />
      <SecondSection />
      {/* <ThirdSection/> */}
      <FourthSection />
      {/* <FifthSection/> */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
          <Carousel images={images} />
        </div>
      </div>

      <LastSection />
    </>
  )
}
