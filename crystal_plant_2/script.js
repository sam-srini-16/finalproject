const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".text");


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



    import { Application } from 'https://cdn.skypack.dev/@splinetool/runtime@1.9.44';
  
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/OZMNdCxwUK4d2bOf/scene.splinecode') 
    
    .then(() => {

        const Crystal = app.findObjectByName("Crystal");
    
        gsap.set(Crystal.scale, 
            { x: 1, 
              y: 1, 
              z: 1
            });
  
          gsap.set(Crystal.position,
              {
                  x: 3500,
                  y: 3500
              }
  
          )
    });
       




