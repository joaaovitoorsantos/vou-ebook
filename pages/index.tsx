import Image from 'next/image'
import Header from '@components/header'
import SecondSection from '@components/secondSection'
import ThirdSection from '@components/ThirdSection'
import FourthSection from '@components/fourthSection'
import FifthSection from '@components/fifthSection'
import LastSection from '@components/lastSection'

export default function Home() {
  return (
    <>
      <Header/>
      <SecondSection/>
      {/* <ThirdSection/> */}
      <FourthSection/>
      {/* <FifthSection/> */}
       <LastSection/>
    </>
  )
}
