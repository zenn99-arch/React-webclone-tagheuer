import React, { useEffect, useRef } from 'react'
import { Hero, CuttingEdge, HeaderTop, HeaderBottom, YourStrap, TagheuerApp, AvantGrand, SleekNew,  ActiveEveryday, TextImageScroll, MorePowerful, TheThrill } from '../components/tagheuer'


import { performanceDataTg, youWellnessData, featureDataTg, topPerformerData, tagHeuerAppData, beHealthierTgData, morePowerfulPfData } from '../data/tg'

import { AirPods1 } from "../assets/images/tagheuer/07.charger/is-sequences/large";
import { AirPods3 } from "../assets/images/tagheuer/05.sport/is-sequences/large";
import { AirPods4 } from "../assets/images/tagheuer/04.custom/is-sequences/large";
import { AirPods } from "../assets/images/tagheuer/02.duo/is-sequences/large";

const Home = () => {
  const imgScrollRef = useRef(null)

  return (
    <>
      <HeaderTop/>
      <HeaderBottom/>
      <Hero/>
      <AvantGrand/>
      
      <CuttingEdge/>
      <SleekNew images={AirPods}/>
      <TheThrill images={AirPods4}/>
      <YourStrap featureData={featureDataTg} />
      <ActiveEveryday images={AirPods3}/>
      <TextImageScroll data={beHealthierTgData}/>
      <YourStrap featureData={youWellnessData} reverse={true} darkMode={true}/>
      <MorePowerful images={AirPods1} />
      <YourStrap featureData={topPerformerData} darkMode={false}/>
      <TagheuerApp data={tagHeuerAppData} />
      
    </>
  )
}

export default Home