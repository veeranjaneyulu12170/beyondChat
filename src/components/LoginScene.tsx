import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Suspense } from 'react';

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      <Suspense fallback={null}>
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial 
            color="#4318FF"
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </>
  );
}

export default function LoginScene() {
  return (
    <>
      <div className="fixed inset-0 gradient-bg -z-20" />
      <div className="fixed inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ 
            background: 'transparent',
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </>
  );
} 