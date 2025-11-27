import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useCursorPosition } from "../../hooks/useCursorPosition";
import { chapterLookup } from "../../constants/chapters";
import * as THREE from "three";

interface SceneProps {
  chapterId?: string;
}

export const Scene: React.FC<SceneProps> = ({ chapterId = "emotions" }) => {
  const groupRef = useRef<THREE.Group>(null);
  const scrollPosition = useScrollPosition();
  const cursorPosition = useCursorPosition();

  // Get chapter color
  const chapter = chapterId ? chapterLookup[chapterId] : null;
  const chapterColor = chapter?.color || "#E8B4B8";
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255,
        }
      : { r: 0.9, g: 0.7, b: 0.7 };
  };

  const color = hexToRgb(chapterColor);

  // Create shapes based on chapter
  const shapes = useMemo(() => {
    switch (chapterId) {
      case "emotions":
        return (
          <>
            {/* Pulsing core */}
            <mesh position={[0, 0, 0]}>
              <icosahedronGeometry args={[1.5, 4]} />
              <meshPhongMaterial
                color={new THREE.Color(color.r, color.g, color.b)}
                emissive={new THREE.Color(color.r * 0.5, color.g * 0.5, color.b * 0.5)}
                shininess={100}
              />
            </mesh>
            {/* Orbiting particles */}
            {[0, 1, 2, 3].map((i) => (
              <mesh key={i} position={[Math.cos((i / 4) * Math.PI * 2) * 3, Math.sin((i / 4) * Math.PI * 2) * 3, 0]}>
                <sphereGeometry args={[0.4, 16, 16]} />
                <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} wireframe />
              </mesh>
            ))}
          </>
        );

      case "biases":
        return (
          <>
            {/* Nested cubes showing layers of bias */}
            {[0.8, 1.5, 2.2].map((scale, i) => (
              <mesh key={i} position={[0, 0, 0]}>
                <boxGeometry args={[scale, scale, scale]} />
                <meshPhongMaterial
                  color={new THREE.Color(color.r, color.g, color.b)}
                  wireframe
                  opacity={1 - i * 0.2}
                  transparent
                />
              </mesh>
            ))}
            {/* Center solid cube */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} />
            </mesh>
          </>
        );

      case "social-roles":
        return (
          <>
            {/* Multiple spheres representing different social roles */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <mesh
                key={i}
                position={[
                  Math.cos((i / 6) * Math.PI * 2) * 2,
                  Math.sin((i / 6) * Math.PI * 2) * 2,
                  0,
                ]}
              >
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshPhongMaterial
                  color={new THREE.Color(color.r, color.g, color.b)}
                  emissive={new THREE.Color(color.r * 0.3, color.g * 0.3, color.b * 0.3)}
                />
              </mesh>
            ))}
          </>
        );

      case "attachment":
        return (
          <>
            {/* Two connected spheres */}
            <mesh position={[-1.5, 0, 0]}>
              <sphereGeometry args={[0.8, 32, 32]} />
              <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} />
            </mesh>
            <mesh position={[1.5, 0, 0]}>
              <sphereGeometry args={[0.8, 32, 32]} />
              <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} />
            </mesh>
            {/* Connection line */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 3, 8]} />
              <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} wireframe />
            </mesh>
          </>
        );

      case "motivation":
        return (
          <>
            {/* Ascending steps */}
            {[0, 1, 2, 3].map((i) => (
              <mesh key={i} position={[-1.5 + i * 1, -1.5 + i * 0.8, 0]}>
                <boxGeometry args={[0.8, 0.8, 0.8]} />
                <meshPhongMaterial
                  color={new THREE.Color(color.r, color.g, color.b)}
                  emissive={new THREE.Color(color.r * (i * 0.2), color.g * (i * 0.2), color.b * (i * 0.2))}
                />
              </mesh>
            ))}
          </>
        );

      case "memory":
        return (
          <>
            {/* Complex interconnected structure */}
            <mesh position={[0, 0, 0]}>
              <icosahedronGeometry args={[1.2, 3]} />
              <meshPhongMaterial
                color={new THREE.Color(color.r, color.g, color.b)}
                wireframe
              />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <octahedronGeometry args={[2, 1]} />
              <meshPhongMaterial
                color={new THREE.Color(color.r, color.g, color.b)}
                wireframe
                opacity={0.5}
                transparent
              />
            </mesh>
          </>
        );

      case "fear":
        return (
          <>
            {/* Radiating structure */}
            {[0, 1, 2, 3, 4].map((i) => (
              <mesh key={i} position={[0, 0, 0]}>
                <sphereGeometry args={[0.5 + i * 0.4, 16, 16]} />
                <meshPhongMaterial
                  color={new THREE.Color(color.r, color.g, color.b)}
                  wireframe
                  opacity={1 - i * 0.15}
                  transparent
                />
              </mesh>
            ))}
          </>
        );

      case "empathy":
        return (
          <>
            {/* Interlocking shapes */}
            <mesh position={[-0.8, 0, 0]}>
              <torusGeometry args={[1, 0.3, 16, 100]} />
              <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} />
            </mesh>
            <mesh position={[0.8, 0, 0]}>
              <torusGeometry args={[1, 0.3, 16, 100]} />
              <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} />
            </mesh>
          </>
        );

      default:
        return (
          <>
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} />
            </mesh>
            <mesh position={[3, 0, 0]}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshPhongMaterial color={new THREE.Color(color.r, color.g, color.b)} />
            </mesh>
          </>
        );
    }
  }, [chapterId, color]);

  useFrame(() => {
    if (!groupRef.current) return;

    // Rotate based on scroll (gentle)
    groupRef.current.rotation.x += scrollPosition.y * 0.00005;
    groupRef.current.rotation.y += scrollPosition.x * 0.00005;

    // React to cursor position (stronger effect)
    groupRef.current.rotation.x += (cursorPosition.normalized.y - 0.5) * 0.015;
    groupRef.current.rotation.y += (cursorPosition.normalized.x - 0.5) * 0.015;
  });

  return <group ref={groupRef}>{shapes}</group>;
};

export default Scene;
