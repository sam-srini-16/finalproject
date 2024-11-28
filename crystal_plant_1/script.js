gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)
import { Application } from 'https://cdn.skypack.dev/@splinetool/runtime@1.9.44';

document.addEventListener("DOMContentLoaded", (event) => {



const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/OqngvPqjW4516Qwl/scene.splinecode') 
.then(() => {
    const Crystal = app.findObjectByName("Crystal");

 
    


    // let rotateCrystal = gsap.to(Crystal.rotation, 
    // {
    //   y: Math.PI * 2 + Crystal.rotation.y,
    //   x: 0,
    //   z: 0,
    //   duration: 40,
    //   repeat: -1,
    //   ease: "linear"
    // });

     
    
});

  
});






