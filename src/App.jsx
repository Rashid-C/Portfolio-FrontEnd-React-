/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP,ScrollTrigger);

/**
 * Components
 */
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Hero from "./Hero";
// import { element } from "prop-types";

const App = () => { 

  useGSAP(()=>{
    const elements=gsap.utils.toArray('.reveal-up')
 

    elements.forEach((element)=>{
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          start:'-200 bottom',
          end:'bottom 80%',
          scrub:true,
          
        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'
      })
    })
    
  })


  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
