import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
  const { scene } = useGLTF('./models/scene.gltf');
  

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <primitive 
        object={scene} 
        scale={.8} 
        position={[0, -1.5, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </Float>
  );
}

export default function HeroModel() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 5, 10], fov: 100 }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2, 5]} />
          <Environment preset="city" />
          <ambientLight intensity={0.7} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
          />
          <Model />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('./models/scene.gltf'); 