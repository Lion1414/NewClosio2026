import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const GlassMaterial = ({ tint, emissiveIntensity = 0.18 }: { tint: THREE.Color; emissiveIntensity?: number }) => {
  const WHITE = new THREE.Color('#FFFFFF');

  return (
    <meshPhysicalMaterial
      color={tint.clone().lerp(WHITE, 0.45)}
      metalness={0.0}
      roughness={0.12}
      transmission={1.0}
      thickness={0.55}
      ior={1.5}
      transparent={true}
      opacity={1.0}
      clearcoat={1.0}
      clearcoatRoughness={0.12}
      envMapIntensity={1.45}
      specularIntensity={1.0}
      emissive={tint.clone().lerp(WHITE, 0.15)}
      emissiveIntensity={emissiveIntensity}
    />
  );
};

const ItalicHollowI = () => {
  const geometry = useMemo(() => {
    const width = 0.55;
    const height = 2.05;
    const stroke = 0.12;
    const slant = 0.48;
    const depth = 0.18;

    const outer = new THREE.Shape();
    outer.moveTo(-width / 2, -height / 2);
    outer.lineTo(width / 2, -height / 2);
    outer.lineTo(width / 2 + slant, height / 2);
    outer.lineTo(-width / 2 + slant, height / 2);
    outer.lineTo(-width / 2, -height / 2);

    const iw = Math.max(0.01, width - stroke * 2);
    const ih = Math.max(0.01, height - stroke * 2);
    const inner = new THREE.Path();
    inner.moveTo(-iw / 2, -ih / 2);
    inner.lineTo(iw / 2, -ih / 2);
    inner.lineTo(iw / 2 + slant * (iw / width), ih / 2);
    inner.lineTo(-iw / 2 + slant * (iw / width), ih / 2);
    inner.lineTo(-iw / 2, -ih / 2);

    outer.holes.push(inner);

    const geom = new THREE.ExtrudeGeometry(outer, {
      depth,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 2
    });
    geom.center();
    return geom;
  }, []);

  const TEAL = useMemo(() => new THREE.Color('#35E7E0'), []);

  return (
    <mesh geometry={geometry} position={[-1.25, 0, 0.05]}>
      <GlassMaterial tint={TEAL} emissiveIntensity={0.22} />
    </mesh>
  );
};

const SolidO = () => {
  const geometry = useMemo(() => {
    const radius = 0.98;
    const depth = 0.20;

    const shape = new THREE.Shape();
    shape.absellipse(0, 0, radius, radius, 0, Math.PI * 2, false, 0);

    const geom = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.06,
      bevelSegments: 2
    });
    geom.center();
    return geom;
  }, []);

  const WHITE = useMemo(() => new THREE.Color('#FFFFFF'), []);

  return (
    <mesh geometry={geometry} position={[1.10, 0, 0.00]}>
      <GlassMaterial tint={WHITE} emissiveIntensity={0.12} />
    </mesh>
  );
};

const IOGroup = () => {
  const groupRef = useRef<THREE.Group>(null);
  const iMeshRef = useRef<THREE.Mesh>(null);
  const oMeshRef = useRef<THREE.Mesh>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetRot = useRef({ x: -0.08, y: 0.22 });

  useFrame((state) => {
    if (!groupRef.current || !iMeshRef.current || !oMeshRef.current) return;

    const t = state.clock.getElapsedTime();

    groupRef.current.rotation.y += 0.004;
    groupRef.current.rotation.x = -0.08 + Math.sin(t * 0.9) * 0.04;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.06;

    targetRot.current.y += (0.22 + mousePos.current.x - targetRot.current.y) * 0.06;
    targetRot.current.x += ((-0.08 - mousePos.current.y) - targetRot.current.x) * 0.06;

    groupRef.current.rotation.y = targetRot.current.y;
    groupRef.current.rotation.x = targetRot.current.x;

    const iMaterial = iMeshRef.current.material as THREE.MeshPhysicalMaterial;
    const oMaterial = oMeshRef.current.material as THREE.MeshPhysicalMaterial;

    iMaterial.emissiveIntensity = 0.18 + (Math.sin(t * 1.6) * 0.04 + 0.04);
    oMaterial.emissiveIntensity = 0.10 + (Math.cos(t * 1.4) * 0.03 + 0.03);
  });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      mousePos.current = { x: x * 0.35, y: y * 0.25 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <group ref={groupRef} rotation={[-0.08, 0.22, 0.02]}>
      <mesh ref={iMeshRef}>
        <ItalicHollowI />
      </mesh>
      <mesh ref={oMeshRef}>
        <SolidO />
      </mesh>
      <mesh position={[0.2, 0, -1.2]}>
        <planeGeometry args={[6, 4]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} depthWrite={false} />
      </mesh>
    </group>
  );
};

const ClosioIO3D: React.FC = () => {
  return (
    <div className="absolute -bottom-64 left-0 pointer-events-none select-none z-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          premultipliedAlpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.10,
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000000']} />

        <directionalLight position={[4, 5, 6]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-5, 1, 4]} intensity={0.85} color="#ffffff" />
        <pointLight position={[-2, 2, -2.5]} intensity={1.1} distance={25} color="#ffffff" />

        <Environment preset="studio" environmentIntensity={0.04} />

        <IOGroup />
      </Canvas>
    </div>
  );
};

export default ClosioIO3D;
