import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// run `npm install --legacy-peer-deps three` if the render broked on diff browser

import CanvasLoader from "../Loader";
import UseDviceSize from "../usehooks/UseDviceSize";

// isMobile as State check if mobile for adjust
const DesktopPC = () => {
  const desktopModel = useGLTF("./desktop_pc/scene.gltf");
  /* 
    find more on
    https://free3d.com/3d-models/
    https://sketchfab.com/features/free-3d-models
  */

  const { isMobile, isTablet } = UseDviceSize();
  // useState function param

  return (
    <mesh>
      <hemisphereLight
        /* some of the origin stats was not correctly function, please check the stats if all the lights not flush to the fit-able position */
        intensity={0.25} /* origin = 0.15 */
        groundColor="black"
      />

      <pointLight
        intensity={1.75} /* origin = 1 */
        position={
          isMobile
            ? [0, -2.85, 0]
            : isTablet
            ? [0, -3.15, -0.25]
            : [0, -2.45, -0.25]
        } /* adding for adjust both mobile or web */
        color={"#ffffff"} /* prevent lights opacity */
        castShadow
      />

      <spotLight
        position={[0, 5.25, -1.25]}
        /* for adjust */
        angle={0.9} /* origin = 0.12 */
        // if on some other device does not correctly having light enable following intensity
        // intensity={300} /* debug */
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={desktopModel.scene}
        // add mobile adjust state listener
        scale={
          isMobile ? 0.375 : isTablet ? 0.6 : 0.75
        } /* mobile origin = 0.7 */
        position={
          isMobile
            ? [0, -4.25, -0.55]
            : isTablet
            ? [0, -5.65, -1.25]
            : [0, -5.65, -1.25]
        }
        /*
          extra y[corr] adjust for text typewritter
          mobile origin = [0, -3, -2.2]
          web origin = [0, -3.25, -1.5]
        */

        rotation={[-0.01, -0.2, -0.15]} // origin = [-0.01, -0.2, -0.1]
      />
    </mesh>
  );
};

const DesktopCanvas = () => {
  // UseDviceSize already imported
  return (
    <Canvas
      frameloop="demand"
      shadows
      // SoftShadows // some browser wont work
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        /* lodaer prevent app breakdown cause by browser delay */ fallback={
          <CanvasLoader />
        }
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <DesktopPC /* listen mobile width */ />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DesktopCanvas; // Make sure to export DesktopCanvas
