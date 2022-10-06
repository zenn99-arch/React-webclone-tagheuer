import React from 'react'
import {
  CuttingEdge, HeaderBottom, YourStrap, TagheuerApp, AvantGrand, SleekNew, TextImageScroll, DiscoverWatch,
  MorePowerful, FreshDesk
} from '../../components/tagheuer'
import { featureDataPf, beHealthierPfData, colorPfData, morePowerfulPfData, sportsPfData, youWellnessPfData, profloUAppData, videocard } from '../../data/proflou'
import { pfSet1 } from '../../assets/images/proflou/set1';
import { pfSet5 } from '../../assets/images/proflou/set5';
import { FaqText } from '../../data/tg'
import { pfSet2 } from '../../assets/images/proflou/set2';
import HeaderPro from '../../components/proflou/header/HeaderPro';
import MobileScroll from '../../components/proflou/MobileScroll/MobileScroll';
import WindowPeak from '../../components/proflou/WindowPeak/WindowPeak';
import Hero2 from '../../components/proflou/hero2/Hero2';
import Photogallery from '../../components/proflou/photogallery/Photogallery';
import Footer from '../../components/proflou/footer/Footer';
import Faq from '../../components/proflou/faq/Faq';
import Testimonial from '../../components/proflou/testimonial/Testimonial';
import VideoCard from '../../components/proflou/videocard/VideoCard';
import ImageScroll from '../../components/apple/imagescroll/imageScroll';
import AvantGrandText from '../../components/tagheuer/avantGrand/AvantGrandText';

const Home = () => {
  return (
    <>
      {/* Headers */}
      <HeaderPro />
      <HeaderBottom />
      {/* Hero */}
      <Hero2 />
      {/* Blue water animation */}
      <AvantGrandText />
      <ImageScroll images={pfSet5} />
      {/* Cuvetter animation */}
      <TextImageScroll data={beHealthierPfData} />
      {/* Problem statement */}
      <CuttingEdge />
      <SleekNew images={pfSet2} />
      {/* Proflo-U with box and bullet points */}
      <YourStrap featureData={youWellnessPfData} reverse={true} darkMode={true} />
      {/* Proflo-U text in blue animation */}
      <TextImageScroll data={morePowerfulPfData} />
      {/* Proflo-U tri-color block animation */}
      <TextImageScroll data={sportsPfData} />
      {/* Proflo-U mobile app section */}
      <MobileScroll />
      {/* Pink Proflo-U window peak */}
      <div className="non-mobile">
        <WindowPeak />
      </div>
      {/* Video gallery */}
      <VideoCard data={videocard} />
      {/* Penta color Proflo-U with bullet point(s) */}
      <YourStrap featureData={featureDataPf} reverse={true} />
      {/* Falling Proflo-U device with cuvette */}
      <TextImageScroll data={colorPfData} />
      {/* Photo gallery */}
      <Photogallery />
      {/* Testimonial Section */}
      <Testimonial />
      {/* App install section */}
      <TagheuerApp data={profloUAppData} />
      {/* Contact us */}
      {/* <DiscoverWatch /> */}
      <FreshDesk />
      {/* FAQs */}
      <Faq data={FaqText} />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home