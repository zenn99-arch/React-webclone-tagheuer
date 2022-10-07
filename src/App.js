import { useEffect } from "react";
import Tagheuer from './pages/tagheuer/Home'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'



function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  return <Tagheuer />
}

export default App;
