// import { 
  // createRef, 
  // useRef, 
  // useState 
// } from 'react'
import { 
  VRCanvas, 
  DefaultXRControllers, 
  // Interactive, 
  RayGrab,
  // useController,
  // useXRFrame,
  // useXR
} from '@react-three/xr'
// import { useFrame } from "@react-three/fiber"
import { 
  Box, 
  // Text, 
  Plane, 
  // OrbitControls 
} from '@react-three/drei'

import * as THREE from 'three'
import HandMenu from './components/HandMenu'

function App() {

  // const { controllers } = useXR()

  // XR events
  // useXREvent('select', (e) => addLog('select event has been triggered'))
  // useXREvent('selectstart', (e) => addLog('select event has started'))
  // useXREvent('selectend', (e) => addLog('select event has ended'))
  // useXREvent('squeeze', (e) => addLog('squeeze event has been triggered'))
  // useXREvent('squeezestart', (e) => addLog('squeeze event has started'))
  // useXREvent('squeezeeend', (e) => addLog('squeeze event has ended'))

  // const [logs, setLog] = useState(['Environment Log:'])

  // add to log
  // const addLog = (log: string) => {
  //   console.log(log)
  //   logs.slice(1).slice(-5)
  //   setLog([...logs, log])
  // }

  return (
    <>
      <VRCanvas>
        {/* background */}
        <color attach="background" args={["#DBE9EE"]} />
        {/* lighting */}
        <ambientLight intensity={0.5}/>
        <spotLight position={[2,2,2]}/>

        {/* controls */}
        <DefaultXRControllers />
        {/* <OrbitControls /> */}

        {/* environment log  */}
        {/* <group
          position={[-1, 2, -1]}
        >
          {logs.map((log, index) => (
            <Text
              key={index}
              position={[1, 0.1*(index+1), 0]}
              color="#191716"
            >
              {log}
            </Text>
          ))}
          
        </group> */}
        
        {/* <Interactive>
          <Box position={[-1,0,-1]}>
            <meshStandardMaterial color="#e23" />
          </Box>
        </Interactive> */}

        <RayGrab>
          <Box 
            position={[1,0.5,-1]}
          >
            <meshStandardMaterial color="#F0EC57" />
          </Box>
        </RayGrab>
        
        <Plane
          position={[0,0,0]}
          rotation={[Math.PI / 2, 0, 0]} 
          scale={[10, 10, 10]}
        >
          <meshBasicMaterial color="#C0D6DF" side={THREE.DoubleSide} />
        </Plane>

        <HandMenu />

      </VRCanvas>
    </>
  );
}

export default App;
