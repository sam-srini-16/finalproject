const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".text");

import { Application } from 'https://cdn.skypack.dev/@splinetool/runtime@1.9.46';

const canvas = document.getElementById('canvas3d');
  const app = new Application(canvas);
  app.load('https://prod.spline.design/OZMNdCxwUK4d2bOf/scene.splinecode') 
  
  .then(() => {
      const plant = app.findObjectByName("plant");
  
      gsap.set(plant.scale, 
          { x: 1, 
            y: 1, 
            z: 1,
          });

        gsap.set(plant.position,
            {
                x: 1500,
                y: 1500,
            });
     });

let scrollTween = gsap.to(sections, {
    xPercent: -500,
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=2000",
        markers: true,
    }
})

sections.forEach((section) => {
    let text = section.querySelectorAll(".text");

    gsap.from(text, {
        y: -140,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left 20%",
            markers: true,
        }
    })   
});


gsap.to(container, {
scrollTrigger: {
trigger: ".section",
start: "20% center",
end: "500% right",
scrub: 50,
},
    background: '',
    duration: 1,
    });

       




