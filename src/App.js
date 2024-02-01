import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const canvasRef = useRef(null);


  useEffect(() => {
    // First render the text
    AOS.init();
  }, []);

  useEffect(() => {
    // Kütüphanenin `simulation` fonksiyonunu çağırarak sıvı simülasyonunu başlat
    const fluidSimulation = webGLFluidEnhanced.simulation(canvasRef.current, {
      COLOR_PALETTE: ['#fffa00', '#b6ff00', '#d8ff00', '#00ff2e', '#00ffa5'],
      HOVER: true,
      SPLAT_RADIUS: .3,
      SHADING: true,
      SPLAT_AMOUNT: 10,
      VELOCITY_DISSIPATION: 0.99,
      BLOOM: true,
      SUNRAYS: true, // Enables sunrays effect
      SUNRAYS_RESOLUTION: 196, // Resolution of the sunrays effect
      SUNRAYS_WEIGHT: 1.0,
      TRANSPARENT: false,
      SIM_RESOLUTION: 128, // Resolution of the simulation grid
      DYE_RESOLUTION: 2048,
      INITIAL: true,
      //DYE_RESOLUTION: 2048,
    });

  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} className='canvas' />

      <div className='rubiks-cube-wrapper'>
        <div class="rubiks-cube">
          <div class="face front" />
          <div class="face left" />
          <div class="face top" />
          <div class="face bottom" />
          <div class="face right" />
          <div class="face back" />
        </div>
      </div>


      <div className='header-container'>

        WELCOME

      </div>


      <div className='card-column'>
        <div className='card' data-aos="fade-up" >
          <div className='card-part'>radio</div>
          <iframe className='card-part' src="https://necatimertmetin.github.io" loading='lazy' title="description" />
        </div>
        <div className='card-reverse' data-aos="fade-up" >
          <div className='card-part'>Time</div>
          <iframe className='card-part' src="https://time.is" loading='lazy' title="description" />
        </div>
        <div className='card' data-aos="fade-up" >
          <div className='card-part'>radio</div>
          <iframe className='card-part' src="https://necatimertmetin.github.io" title="description" />
        </div><div className='card' data-aos="fade-up" >
          <div className='card-part'>radio</div>
          <iframe className='card-part' src="https://necatimertmetin.github.io" loading='lazy' title="description" />
        </div>
        <div className='card-reverse' data-aos="fade-up" >
          <div className='card-part'>Time</div>
          <iframe className='card-part' src="https://time.is" loading='lazy' title="description" />
        </div>
        <div className='card' data-aos="fade-up" >
          <div className='card-part'>radio</div>
          <iframe className='card-part' src="https://necatimertmetin.github.io" title="description" />
        </div><div className='card' data-aos="fade-up" >
          <div className='card-part'>radio</div>
          <iframe className='card-part' src="https://necatimertmetin.github.io" loading='lazy' title="description" />
        </div>
        <div className='card-reverse' data-aos="fade-up" >
          <div className='card-part'>Time</div>
          <iframe className='card-part' src="https://time.is" loading='lazy' title="description" />
        </div>
        <div className='card' data-aos="fade-up" >
          <div className='card-part'>radio</div>
          <iframe className='card-part' src="https://necatimertmetin.github.io" title="description" />
        </div><div className='card' data-aos="fade-up" >
          <div className='card-part'>radio</div>
          <iframe className='card-part' src="https://necatimertmetin.github.io" loading='lazy' title="description" />
        </div>
        <div className='card-reverse' data-aos="fade-up" >
          <div className='card-part'>Time</div>
          <iframe className='card-part' src="https://time.is" loading='lazy' title="description" />
        </div>
        <div className='card' data-aos="fade-up" >
          <div className='card-part'>radio</div>
          <iframe className='card-part' src="https://necatimertmetin.github.io" title="description" />
        </div>
      </div>





    </div>
  );
}

export default App;
