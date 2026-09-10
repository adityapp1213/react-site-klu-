import { useState } from 'react'
import LightTunnel from "./components/LightTunnel";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="shader-stage">
  <LightTunnel
    className="shader-background"
    cableColor="#202020"
    pulseColor="#ee5713"
    tunnelColor="#f25800"
    tunnelOpacity={0}
    speed={0.1}
    flowDirection="outward"
    pulseSpeed={2}
    pulseLength={0.28}
    pulseBlend={1}
    pulseWidth={1}
    cableCount={20}
    thickness={0.35}
    rimWidth={0.15}
    waviness={0.3}
    sway={0.5}
    size={1}
    centerX={0}
    centerY={0}
    glow={1}
    fadeNear={0.5}
    fadeFar={2}
    brightness={1}
    colorVariance
    grain
    grainIntensity={0.05}
    opacity={1}
    mouseInteraction
    mouseStrength={0.1}
  />

    <div className="content-overlay">
      <header>
        <h1>This is a react page!!</h1>
      </header>

      <main>
        <h2>This page has a button  </h2>
        <h3>button is counting the clicks</h3>
      </main>

      <div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>

      <div>
        {/* input 2 num for sum */}
        <button>
          Sum of a and b 
        </button>

      </div>
    </div>


    </div>
    </>
  )
}

export default App
