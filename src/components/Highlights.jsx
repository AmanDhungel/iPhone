import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarosel from "./VideoCarosel"

const Highlights = () => {
  useGSAP(()=> {
     gsap.to('#title', {
      duration: 1,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger:"#title",
        start:"bottom 99%",
     },
     })
     gsap.to('.link', {
      delay: 0.5,
      duration: 1.2,
      opacity: 1,
      y: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger:"#title",
        start:"bottom 99%",
     },
     })
     gsap.to('#highlights', {
      stagger: 0.3
     })
    }, [])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding 
    bg-zinc">
      <div className="screen-max-width">
           <div className="mb-12 w-full sm:block md:flex  items-end justify-between">
             <h1 id="title" className="section-heading">
              Get the highlights
             </h1>
             <div className="flex flex-wrap items-end gap-5">
              <p className="link">Watch the film
                <img src={watchImg} className="ml-2"  alt="watch" />
              </p>
              <p className="link">Watch the Event
                <img src={rightImg} className="ml-2"  alt="watch" />
              </p>

             </div>
           </div>
         <VideoCarosel/>
      </div>
    </section>
  )
}

export default Highlights