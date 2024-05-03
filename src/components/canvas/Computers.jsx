import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  SoftShadows,
  useGLTF,
} from "@react-three/drei";
// run `npm install --legacy-peer-deps three` if the render broked on diff browser

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  /* 
    find more on
    https://free3d.com/3d-models/
    https://sketchfab.com/features/free-3d-models
  */

  return (
    <mesh>
      <hemisphereLight
        /* some of the origin stats was not correctly function, please check the stats if all the lights not flush to the fit-able position */
        intensity={2.24} /* origin = 0.15 */
        groundColor="black"
      />
      <pointLight
        intensity={1.75} /* origin = 1 */
        position={[0, -2.25, 0.25]} /* adding for adjust */
        color={"#ffffff"} /* prevent lights opacity */
        castShadow
      />
      <spotLight
        position={[0, 5.25, -1.25]} /* for adjust */
        angle={1} /* origin = 0.12 */
        intensity={300} /* for adjust */
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -5.25, -1.25]}
        /* origin = [0, -3.25, -1.5] */
        /* adjust for fit to the above text type-writter */
        rotation={[-0.01, -0.2, -0.15]}
        /* origin = [-0.01, -0.2, -0.1] adjust for mobile view */
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      /* shadows */
      shadows
      SoftShadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas; // Make sure to export ComputerCanvas
