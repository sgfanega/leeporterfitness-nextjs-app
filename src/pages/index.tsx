import Banner from '../../components/home/banner'
import BottomBanner from '../../components/home/bottom-banner'
import Introduction from '../../components/home/introduction'
import Services from '../../components/home/services'
import WhyExercise from '../../components/home/why-exercise'
import data from '../../json/data.json'

export default function Home() {
  const homeData = data?.data[0].pageContent.home
  const bannerData = homeData.banner
  const whyExerciseData = homeData.whyExercise
  const introductionData = homeData.introduction
  const servicesData = homeData.services
  const bottomBannerData = homeData.bottomBanner
  
  return (
    <>
      <Banner banner={bannerData}/>
      <WhyExercise whyExercise={whyExerciseData}/>
      <Introduction introduction={introductionData}/>
      <Services services={servicesData}/>
      <BottomBanner bottomBanner={bottomBannerData}/>
    </>
  )
}