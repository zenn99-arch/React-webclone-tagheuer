import React, { useEffect, useRef } from 'react'
import { Hero, CuttingEdge, HeaderTop, HeaderBottom, YourStrap, TagheuerApp, AvantGrand, SleekNew,  ActiveEveryday, TextImageScroll, MorePowerful, TheThrill } from '../../components/tagheuer'

import { featureDataPf, beHealthierPfData, morePowerfulPfData, youWellnessPfData } from '../../data/proflou'
import { performanceDataTg, youWellnessData, featureDataTg, topPerformerData, tagHeuerAppData, beHealthierTgData } from '../../data/tg'

import { AirPods1 } from "../../assets/images/tagheuer/07.charger/is-sequences/large/";
import { beHealthierImages } from "../../assets/images/tagheuer/06.wellness/is-sequences/large/";
import { AirPods3 } from "../../assets/images/tagheuer/05.sport/is-sequences/large/";
import { AirPods4 } from "../../assets/images/tagheuer/04.custom/is-sequences/large/";
import { AirPods } from "../../assets/images/tagheuer/02.duo/is-sequences/large/";
import { pfSet1 } from '../../assets/images/proflou/set1';
import { pfSet2 } from '../../assets/images/proflou/set2';

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
      <YourStrap featureData={youWellnessData} reverse={true} darkMode={true}/>
      <TextImageScroll data={beHealthierTgData}/>
      <YourStrap featureData={youWellnessData} reverse={true} darkMode={true}/>
      <MorePowerful images={AirPods1} data={morePowerfulPfData}/>
      <YourStrap featureData={topPerformerData} darkMode={false}/>
      <TagheuerApp data={tagHeuerAppData} />
      
    </>
  )
}

export default Home