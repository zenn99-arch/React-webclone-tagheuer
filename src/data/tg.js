import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdPersonOutline } from 'react-icons/md'
import Thumbnail1 from '../assets/images/tagheuer/unsorted/NFT_thumb.png'
import Thumbnail2 from '../assets/images/tagheuer/unsorted/personnalisation_thumb-1.jpg'
import Thumbnail3 from '../assets/images/tagheuer/unsorted/personnalisation_thumb-2.jpg'
import Thumbnail4 from '../assets/images/tagheuer/unsorted/personnalisation_thumb-3.jpg'
import ShowcaseImage from '../assets/images/tagheuer/unsorted/personnalisation_feature-large.png'
// Performance
import SportsThumbnail1 from '../assets/images/tagheuer/unsorted/sport_thumb-1.jpg'
import SportsThumbnail2 from '../assets/images/tagheuer/unsorted/sport_thumb-2.jpg'
import SportsThumbnail3 from '../assets/images/tagheuer/unsorted/sport_thumb-3.jpg'
import SportsThumbnail4 from '../assets/images/tagheuer/unsorted/sport_thumb-4.jpg'

import PerfomanceGrid1 from '../assets/images/tagheuer/unsorted/sport_feature-grid_1.jpg'
import PerfomanceGrid2 from '../assets/images/tagheuer/unsorted/sport_feature-grid_3.jpg'
import PerfomanceGrid3 from '../assets/images/tagheuer/unsorted/sport_feature-grid_2.jpg'

// Wellness
import WellnessThumbnail1 from '../assets/images/tagheuer/unsorted/wellness_thumb-1.jpg'
import WellnessThumbnail2 from '../assets/images/tagheuer/unsorted/wellness_thumb-2.jpg'
import WellnessThumbnail3 from '../assets/images/tagheuer/unsorted/wellness_thumb-3.jpg'

// Your wellness
import WellnessFeature from '../assets/images/tagheuer/unsorted/wellness_feature-large.webp'
import PerformanceFeature from '../assets/images/tagheuer/unsorted/performance_feature-large.webp'

// Performance
import PerformanceThumbnail1 from '../assets/images/tagheuer/unsorted/performance_thumb-1.jpg'
import PerformanceThumbnail2 from '../assets/images/tagheuer/unsorted/performance_thumb-2.jpg'
import PerformanceThumbnail3 from '../assets/images/tagheuer/unsorted/performance_thumb-3.jpg'
import PerformanceThumbnail4 from '../assets/images/tagheuer/unsorted/performance_thumb-4.jpg'

import TagHeuerAppIcon from '../assets/images/tagheuer/unsorted/tagapp.png'
import GooglePlayIcon from '../assets/images/tagheuer/unsorted/download-android.png'
import AppStoreIcon from '../assets/images/tagheuer/unsorted/download-ios.png'

// Scroll images
import { AirPods1 } from "../assets/images/tagheuer/07.charger/is-sequences/large/";
import { beHealthierImages } from "../assets/images/tagheuer/06.wellness/is-sequences/large/";
import { AirPods3 } from "../assets/images/tagheuer/05.sport/is-sequences/large/";
import { AirPods4 } from "../assets/images/tagheuer/04.custom/is-sequences/large/";

import BulletThumbnail from '../components/tagheuer/common/bulletThumbnail/BulletThumbnail'
import { BG_WHITE_TG, BG_BLACK_TG, WELLNESS_FEATURE } from './customClasses'


export const headerIcons = [
    { icon: (props) => <AiOutlineSearch {...props} />, title: "Search" },
    { icon: (props) => <MdPersonOutline {...props} />, title: "My TAG Heuer account" },
    { icon: (props) => <IoLocationOutline {...props} />, title: "Find a TAG Heuer store" }
]

export const featureDataTg = {
    type: 1,
    subHeader: "Your straps, your watchfaces",
    header: "A watch as unique as you",
    ShowcaseImages: [ShowcaseImage],
    bullets:
        [
            {
                thumbnail: <BulletThumbnail img={Thumbnail1} />, title: "The perfect match for NFT", description: "Use your watch to display your highly collectible virtual artworks on your wrist with verified proof of ownership. Transfer your favorite NFTs to your new Lens watch face and enjoy three exclusive high-fidelity layouts with time display.",
                linkText: "Discover",

            },
            {
                thumbnail: <BulletThumbnail img={Thumbnail2} />, title: "Comfort in action", description: "Iconic TAG Heuer durability combined with a 42mm or 45mm design that offers maximum wearer comfort and use in any situation.",
                linkText: "Choose Your Design",
            },
            {
                thumbnail: <BulletThumbnail img={Thumbnail3} />, title: "Elegance and Performance enmeshed", description: "Mechanically or digitally inspired, our watchfaces collection mixes elegance, connectivity and performance.",
                linkText: "Explorer Watchfaces"
            },
            {
                thumbnail: <BulletThumbnail img={Thumbnail4} />, title: "A strap for every style", description: "Rugged rubber straps are ready for action, while a leather or steel strap adds versatility and elegance to any outfit.",
                linkText: "Discover straps"
            }
        ]
}

export const performanceDataTg = {
    type: 2,
    backgroundColor: BG_WHITE_TG,
    subHeader : "Next level fitness tracking",
    header: "Easily track your performances",
    linkText: "Discover all our sports",
    ShowcaseImages: [PerfomanceGrid1, PerfomanceGrid2, PerfomanceGrid3],
    bullets: [
        {
            thumbnail: <BulletThumbnail img={SportsThumbnail1} />,
            title: "New guided workouts",
            description: "Guided 7-minute workouts with animations and notifications to switch to the next exercise. No phone necessary."
        },
        {
            thumbnail: <BulletThumbnail img={SportsThumbnail2} />,
            title: "From warm up to peak zone",
            description: "Track your distance, pace, and monitor your heart rate to maximize your training intensity on runs both indoors and outdoors."
        },
        {
            thumbnail: <BulletThumbnail img={SportsThumbnail3} />,
            title: "Reach new peaks",
            description: "The new altimeter measures and records your altitude and provides more accurate cycling metrics."
        },
        {
            thumbnail: <BulletThumbnail img={SportsThumbnail4} />,
            title: "In the water",
            description: "Tracking your swimming performance allows you to measure laps completed, total distance, and interval breakdowns."
        },
    ]
}

export const youWellnessData = {
    type: 1,
    subHeader: "Your wellness, in your hands",
    header: "Track your health with ease and elegance",
    ShowcaseImages: [WellnessFeature],
    customClasses : {
        featureImage : WELLNESS_FEATURE
    },
    bullets: [
        {
            thumbnail: <BulletThumbnail img={WellnessThumbnail1} />,
            title: "Stay active",
            description: "Monitor your daily steps, calories burnt and heart rate to stay at the top of your game."
        },
        {
            thumbnail: <BulletThumbnail img={WellnessThumbnail2} />,
            title: "Achieve your daily goals",
            description: "Set your daily wellness goals and be notified when you reach your targets."
        },
        {
            thumbnail: <BulletThumbnail img={WellnessThumbnail3} />,
            title: "Track all your reacords",
            description: "Get access to your historic data in the TAG Heuer Companion mobile app and track how your statistics evolve over time."
        }
    ]
}

export const topPerformerData = {
    type: 1,
    subHeader: "TOP PERFORMER BY DESIGN",
    header: "DESIGNED FOR PERFORMANCE AND VERSATILITY",
    ShowcaseImages: [PerformanceFeature],
    customClasses : {
        featureImage : WELLNESS_FEATURE
    },
    bullets: [
        {
            thumbnail: <BulletThumbnail img={PerformanceThumbnail1} />,
            title: "Power-packed battery",
            description: "All-day battery life available on 42mm and 45mm watches with continuous wellness monitoring. The new 45mm model has up to 30% more battery life than previous generations."
        },
        {
            thumbnail: <BulletThumbnail img={PerformanceThumbnail2} />,
            title: "Bluetooth 5.0",
            description: "The Bluetooth 5.0 new wireless standard boosts synching speed and provides users with lightining fast data transfer."
        },
        {
            thumbnail: <BulletThumbnail img={PerformanceThumbnail3} />,
            title: "Heart rate monitor",
            description: "The heart rate sensor helps you better understand your fitness level, guides your workouts, and monitors calories."
        },
        {
            thumbnail: <BulletThumbnail img={PerformanceThumbnail4} />,
            title: "GPS and Accelerometer",
            description: "Run, cycle, swim or walk at your own pace. The TAG Heuer Connected watch will track and map your exercises with precision. Automatic export to Strava at the flick of a wrist."
        }
    ]
}

export const tagHeuerAppData = {
    icon: TagHeuerAppIcon,
    subHeader: "TagHeuer",
    header: "GET THE TAG HEUER COMPANION APP AND MAKE THE MOST OF YOUR TAG HEUER CONNECTED CALIBRE E4 ",
    description: "More unique than ever thanks to a multitude of personalization options and insights into your achievements.Browse through your watchface collection and personalise colours and style to make it your own.Reach new levels of fitness with overview of your sessions tracked with your watch, and explore extended details:map, distance, duration, pace, calories, heart rate and much more.",
    googlePlayIcon: GooglePlayIcon,
    appStoreIcon: AppStoreIcon
}

export const FaqText = [
    {
    
    title: "GET THE PROFLO-U APP AND MAKE THE MOST OF YOUR PROFLO-U DEVICE CALIBRE ",
    description: `More unique than ever thanks to a multitude of personalization options and insights into your achievements. Browse through your watchface collection and personalise colours and style to make it your own.  Reach new levels of fitness with overview of your sessions tracked with your watch, and explore extended details: map, distance, duration, pace, calories, heart rate and much more.`,
    
},
]




export const beHealthierTgData = {
    accentColor: null,
    spanTexts: ["EVERYDAY","KIDNEY","GUARDIAN"],
    spanText1: "HEALTHY",
    spanText2: "EVERY",
    spanText3: "DAY",
    scrollImages: beHealthierImages
}