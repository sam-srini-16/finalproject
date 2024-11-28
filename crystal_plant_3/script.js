
import { Application } from 'https://cdn.skypack.dev/@splinetool/runtime@1.9.44';
  
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/OZMNdCxwUK4d2bOf/scene.splinecode') 

.then(() => {

    const Crystal = app.findObjectByName("Crystal");

    gsap.set(Crystal.scale, 
        { x: 3, 
          y: 3, 
          z: 3
        });

      gsap.set(Crystal.position,
          {
              x: 3500,
              y: 3500
          }

      )
    });


