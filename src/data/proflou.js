import { FiBatteryCharging } from 'react-icons/fi'
import { FaBluetooth } from 'react-icons/fa'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { BsLightningCharge } from 'react-icons/bs'
import ShowcaseImage from '../assets/images/proflou/R195.png'
import ShowcaseImage2 from '../assets/images/proflou/45.png'
import { GRADIENT_BLUE_1, GRADIENT_GREEN_1, GRADIENT_ORANGE_1, GRADIENT_RED_1, PLAYFUL_PRODUCTS, WELLNESS_FEATURE } from './customClasses'

import { pfSet1 } from '../assets/images/proflou/set1';
import pfset1mobile from '../assets/images/proflou/set1/0001.jpg';
import { pfSet2 } from '../assets/images/proflou/set2';
import { pfSet3 } from '../assets/images/proflou/set3';
import pfset3mobile from '../assets/images/proflou/set3/0150.jpg';
import { pfSet4 } from '../assets/images/proflou/set4';
import pfset4mobile from '../assets/images/proflou/set4/0150.jpg';
import { pfSet5 } from '../assets/images/proflou/set5';
import { pfSet6 } from '../assets/images/proflou/set6';
import pfset6mobile from '../assets/images/proflou/set6/0140.jpg';

// App download icons
import ProfloUAppIcon from '../assets/images/proflou/logo_orange.png'
import GooglePlayIcon from '../assets/images/tagheuer/unsorted/download-android.png'

// Wellness
import WellnessThumbnail1 from '../assets/images/tagheuer/unsorted/wellness_thumb-1.jpg'
import WellnessThumbnail2 from '../assets/images/tagheuer/unsorted/wellness_thumb-2.jpg'
import WellnessThumbnail3 from '../assets/images/tagheuer/unsorted/wellness_thumb-3.jpg'

// Your wellness
import WellnessFeature from '../assets/images/tagheuer/unsorted/wellness_feature-large.webp'
import BulletThumbnail from '../components/tagheuer/common/bulletThumbnail/BulletThumbnail'

//base64 images
import { darkFalling } from './base64Images/darkFalling'
import { darkBlueProfloU } from './base64Images/darkBlueProfloU'
import { cuvetteTechnology } from './base64Images/cuvetteTechnology'
import { threeDevices } from './base64Images/threeDevices'

//for videocard

import Img1 from "../assets/images/proflou/videos/thumbnail1.png";
import Img2 from "../assets/images/proflou/videos/thumbnail2.png";
import Img3 from "../assets/images/proflou/videos/thumbnail3.png";
import Img4 from "../assets/images/proflou/videos/thumbnail4.jpg"
import video1 from "../assets/images/proflou/videos/video1.mp4";
import video2 from "../assets/images/proflou/videos/video2.mp4";
import video3 from "../assets/images/proflou/videos/video3.mp4";
import video4 from "../assets/images/proflou/videos/video4.mp4";



export const featureDataPf = {
    type: 1,
    subHeader: "Your kidney, your Proflo-U",
    header: "About Proflo-U",
    ShowcaseImages: [ShowcaseImage],
    customClasses : {
        featureImage : PLAYFUL_PRODUCTS
    },
    bullets: [
        {
            title: "Mini Kidney Analyzer",
            description: "The Proflo-U® system provides unprecedented ease-of-use, clinically accurate method of identifying microalbuminuria – before clinical onset of symptoms in direct or indirect renal complications. Proflo-U® patented sensor technology and ultra-sensitive optical system of the Proflo-U® Analyzer provides quantitative values right at the point of care. This enables care-provider to take right decisions and improves the well-being of the patient.",
            linkText: "Discover"
        }
    ]
}



export const beHealthierPfData = {
    accentColor: "#FFFEFF",
    textColor: "#5989A9",
    spanTexts: ["WITH","PATENTED","TECHNOLOGY"],
    scrollImages: pfSet6,
    uniqueTag: "healthier-text",
    mobileImage: pfset6mobile,
    color: "#ffffff",
    staticImage: cuvetteTechnology
}


export const morePowerfulPfData = {
    accentColor: "#000000",
    textColor: null,
    spanTexts: ["RESULTS","IN","JUST","60 SECONDS"],
    spanText1: "RESULTS",
    spanText2: "IN",
    spanText3: "JUST",
    spanText4: "1 MINUTES",
    scrollImages: pfSet1,
    uniqueTag: "powerful-text",
    mobileImage: pfset1mobile,
    staticImage: darkBlueProfloU
}

export const sportsPfData = {
    accentColor: "#141414",
    textColor: "#FFFFFF",
    spanTexts: ["BROAD","ANALYTICAL", "RANGE"],
    scrollImages: pfSet3,
    uniqueTag: "sports-text",
    mobileImage: pfset3mobile,
    color: "#D6D7D7",
    staticImage: threeDevices
}

export const colorPfData = {
    accentColor: "#141414",
    textColor: "#FFFFFF",
    spanTexts: ["KIDNEY HEALTH","STATUS", "HAS NEVER BEEN", "SO EASY"],
    scrollImages: pfSet4,
    uniqueTag: "color-text",
    mobileImage: pfset4mobile,
    staticImage: darkFalling
}

export const thethrillPfData = {
    accentColor: "#141414",
    textColor: "#FFFFFF",
    spanTexts: ["THE","THRILL","OF", "PROGRESS"],
    scrollImages: pfSet4,
    uniqueTag: "thethrill-text"
}

export const videocard = [
    {
        id: 1,
        imgSrc: Img1,
        video: video1,
        
      },
      {
        id: 2,
        imgSrc: Img2,
        video: video2,
      },
      {
        id: 3,
        imgSrc: Img3,
        video: video3,
      },
      {
        id: 4,
        imgSrc: Img4,
        video: video4,
      },
]




export const youWellnessPfData = {
    type: 1,
    subHeader: "Your wellness, in your hands",
    header: "Track your kidney health with ease and elegance",
    ShowcaseImages: [ShowcaseImage2],
    customClasses : {
        featureImage : WELLNESS_FEATURE
    },
    bullets: [
        {
            thumbnail: <BulletThumbnail img={WellnessThumbnail1} />,
            title: "THEN & THERE, JUST ANYWHERE ",
            description: "Palm sized device, battery operated. 1-step sample preparation. Results in 60 seconds."
        },
        {
            thumbnail: <BulletThumbnail img={WellnessThumbnail2} />,
            title: "EASY TO USE",
            description: "Designed for Anyone and Anywhere use Macro-cuvette technology for ease of handling, Does not need any lab equipments."
        },
        {
            thumbnail: <BulletThumbnail img={WellnessThumbnail3} />,
            title: "RESULTS YOU CAN TRUST",
            description: "Detects all forms of albumin (immuno-responsive & non-responsive). High correlation with Lab-grade clinical analyzers *Allows user-level-calibration also."
        }
    ]
}

export const FaqText = [
    {
        title: 'What is Albumin?',
        description: 'Albumin is an important protein present in your blood that your body uses for tissue growth and repair. But if your kidneys aren’t working properly then albumin starts to leak into your urine.'
    },
    {
        title: 'What is Microalbumin?',
        description: 'A microalbumin urine test checks for small (or "micro") amounts of albumin in your urine less than 300mg/L concentration, at levels so small a regular urine test might not find them. It can be a sign of early kidney disease.'
    },
    {
        title: 'Who needs to undertake urine microalbumin test?',
        description: `If you believe in proactive healthcare, then all as at present 1 out of 10 has some form of kidney disorder and 90% of them get to know when it is too late. So, test early to prevent kidney disorder. Because, when you find out about a health issue early on, you can often take steps to protect yourself and keep your body strong. If you have diabetes or high blood pressure, one of the things to look out for is kidney disease. \n
        If you are 65 or older with risk factors for heart or kidney disease, then you must. If anybody in the family members who have or had kidney disease, then you should. A microalbumin urine test helps because it can find kidney problems before they get too far. Your kidneys filter your blood. They keep the good stuff your body needs and send the waste out through your pee. If it is not happening right way then you will find albumin in your urine, an early indicator that there is something wrong.`
    },
    {
        title: 'Do you need to prepare for the test?',
        description: 'The microalbuminuria test is a simple urine test. You can eat and drink normally before the test. No special preparation is necessary for this test.'
    },
    {
        title: 'What are the risks of the test?',
        description: 'The microalbuminuria test only requires normal urination. This test has no risks, and you shouldn’t have any discomfort.'
    },
    {
        title: 'How to understand the result?',
        description: 'The microalbuminuria test is a simple urine test. You can eat and drink normally before the test. No special preparation is necessary for this test.'
    }
  ];

export const profloUAppData = {
    icon: ProfloUAppIcon,
    subHeader: "Proflo-U",
    header: "GET THE PROFLO-U APP AND MAKE THE MOST OF YOUR PROFLO-U DEVICE  ",
    description: "The Proflo-U® system provides unprecedented ease-of-use, clinically accurate method of identifying microalbuminuria – before clinical onset of symptoms in direct or indirect renal complications. Proflo-U® patented sensor technology and ultra-sensitive optical system of the Proflo-U® Analyzer provides quantitative values right at the point of care. This enables care-provider to take right decisions and improves the well-being of the patient.",
    googlePlayIcon: GooglePlayIcon
}
