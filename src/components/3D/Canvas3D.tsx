import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";
import Scene from "./Scene";
import Fallback2D from "./Fallback2D";
import { useWebGLSupport } from "../../hooks/useWebGLSupport";

interface Canvas3DProps {
  chapterId?: string;
  autoRotate?: boolean;
}

export const Canvas3D: React.FC<Canvas3DProps> = ({
  chapterId = "emotions",
  autoRotate = true,
}) => {
  const isWebGLSupported = useWebGLSupport();

  if (!isWebGLSupported) {
    return <Fallback2D chapterId={chapterId} />;
  }

  return (
    <Canvas
      style={{ width: "100%", height: "100%", touchAction: 'pan-y', overscrollBehavior: 'auto' }}
      className="canvas-3d"
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={2}
        // Disable wheel-based zoom to avoid capturing wheel events and
        // preventing page scroll when users scroll over the canvas.
        // Scene already responds to page scroll via window listeners.
        enableZoom={false}
        enablePan={true}
        minDistance={2}
        maxDistance={10}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, 5]} intensity={0.4} color="#E8B4B8" />
      
      {/* Fog for depth */}
      <fog attach="fog" args={["#F5F2ED", 5, 25]} />
      
      {/* Main Scene */}
      <Suspense fallback={null}>
        <Scene chapterId={chapterId} />
      </Suspense>
      
      {/* Preload assets */}
      <Preload all />
    </Canvas>
  );
};

export default Canvas3D;
