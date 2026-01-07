import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

function roundedRectShape(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function makeMatteGlassMaterial(tint = new THREE.Color(0x00d2ff), transmission = 0.55) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xffffff).lerp(tint, 0.10),
    roughness: 0.35,
    metalness: 0.05,
    transmission,
    thickness: 0.9,
    ior: 1.35,
    clearcoat: 0.6,
    clearcoatRoughness: 0.35,
    specularIntensity: 0.9,
    envMapIntensity: 1.0,
    transparent: true,
    opacity: 0.98
  });
}

function makeAccentMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0x00d2ff,
    roughness: 0.25,
    metalness: 0.1,
    emissive: new THREE.Color(0x00d2ff),
    emissiveIntensity: 0.18
  });
}

function Tile() {
  const groupRef = useRef<THREE.Group>(null);

  const tileGeo = useMemo(() => {
    const shape = roundedRectShape(1.55, 1.55, 0.32);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelSegments: 6
    });
    geo.center();
    return geo;
  }, []);

  const rimGeo = useMemo(() => new THREE.EdgesGeometry(tileGeo, 35), [tileGeo]);

  const tileMat = useMemo(() => makeMatteGlassMaterial(new THREE.Color(0x00d2ff), 0.35), []);
  const rimMat = useMemo(() => new THREE.LineBasicMaterial({
    color: 0x8ef0ff,
    transparent: true,
    opacity: 0.18
  }), []);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.position.y = 0.10 + Math.sin(t * 1.2) * 0.03;
      groupRef.current.rotation.y = 0.22 + Math.sin(t * 0.9) * 0.06;
      groupRef.current.rotation.x = -0.12 + Math.cos(t * 0.8) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.10, 0]} rotation={[-0.12, 0.22, 0]}>
      <mesh geometry={tileGeo} material={tileMat} castShadow receiveShadow />
      <lineSegments geometry={rimGeo} material={rimMat} position={[0, 0, 0.001]} />
      <group position={[0, 0, 0.25]}>
        {/* Content will be passed as children */}
      </group>
    </group>
  );
}

function CommissionIcon() {
  const ringRef = useRef<THREE.Mesh>(null);
  const contentRef = useRef<THREE.Group>(null);

  const ringGeo = useMemo(() => new THREE.TorusGeometry(0.43, 0.06, 24, 90, Math.PI * 1.45), []);
  const coinGeo = useMemo(() => new THREE.CylinderGeometry(0.20, 0.20, 0.08, 42), []);
  const accentMat = useMemo(() => makeAccentMaterial(), []);
  const glassMat = useMemo(() => makeMatteGlassMaterial(new THREE.Color(0x00d2ff), 0.25), []);

  useFrame((state) => {
    if (ringRef.current) {
      const t = state.clock.elapsedTime;
      ringRef.current.rotation.z = Math.PI * 0.75 + Math.sin(t * 1.8) * 0.06;
      ringRef.current.scale.setScalar(1 + Math.sin(t * 2.2) * 0.01);
    }
  });

  return (
    <group ref={contentRef} position={[0, 0, 0.25]}>
      <mesh ref={ringRef} geometry={ringGeo} material={accentMat} rotation-z={Math.PI * 0.75} position={[0, -0.05, 0.16]} castShadow />
      <mesh geometry={coinGeo} material={glassMat} rotation-x={Math.PI / 2} position={[0, -0.02, 0.18]} />
      <mesh material={accentMat} position={[0, -0.02, 0.23]}>
        <boxGeometry args={[0.06, 0.26, 0.02]} />
      </mesh>
      <mesh material={accentMat} position={[0, 0.07, 0.23]}>
        <boxGeometry args={[0.16, 0.05, 0.02]} />
      </mesh>
      <mesh material={accentMat} position={[0, -0.11, 0.23]}>
        <boxGeometry args={[0.16, 0.05, 0.02]} />
      </mesh>
    </group>
  );
}

function AnalyticsIcon() {
  const barsRef = useRef<THREE.Group>(null);
  const tubeRef = useRef<THREE.Mesh>(null);

  const barMat = useMemo(() => makeMatteGlassMaterial(new THREE.Color(0x00d2ff), 0.18), []);
  const accentMat = useMemo(() => makeAccentMaterial(), []);

  const tubeGeo = useMemo(() => {
    const pts = [
      new THREE.Vector3(-0.48, 0.05, 0.20),
      new THREE.Vector3(-0.15, -0.10, 0.20),
      new THREE.Vector3(0.12, 0.12, 0.20),
      new THREE.Vector3(0.48, 0.02, 0.20)
    ];
    const curve = new THREE.CatmullRomCurve3(pts);
    return new THREE.TubeGeometry(curve, 60, 0.035, 14, false);
  }, []);

  useFrame((state) => {
    if (barsRef.current && tubeRef.current) {
      const t = state.clock.elapsedTime;
      const bars = barsRef.current.children;
      if (bars[0]) (bars[0] as THREE.Mesh).scale.y = 1 + Math.sin(t * 2.1) * 0.05;
      if (bars[1]) (bars[1] as THREE.Mesh).scale.y = 1 + Math.sin(t * 2.1 + 1.2) * 0.05;
      if (bars[2]) (bars[2] as THREE.Mesh).scale.y = 1 + Math.sin(t * 2.1 + 2.1) * 0.05;
      (tubeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.14 + Math.sin(t * 1.6) * 0.02;
    }
  });

  return (
    <group position={[0, 0, 0.25]}>
      <group ref={barsRef}>
        <mesh material={barMat} position={[-0.38, -0.22, 0.16]}>
          <boxGeometry args={[0.18, 0.35, 0.16]} />
        </mesh>
        <mesh material={barMat} position={[0.00, -0.12, 0.16]}>
          <boxGeometry args={[0.18, 0.55, 0.16]} />
        </mesh>
        <mesh material={barMat} position={[0.38, -0.27, 0.16]}>
          <boxGeometry args={[0.18, 0.25, 0.16]} />
        </mesh>
      </group>
      <mesh ref={tubeRef} geometry={tubeGeo} material={accentMat} />
    </group>
  );
}

function HierarchyIcon() {
  const nodesRef = useRef<THREE.Group>(null);
  const linksRef = useRef<THREE.Group>(null);

  const nodeMat = useMemo(() => makeMatteGlassMaterial(new THREE.Color(0x00d2ff), 0.22), []);
  const linkMat = useMemo(() => makeAccentMaterial(), []);

  useFrame((state) => {
    if (nodesRef.current && linksRef.current) {
      const t = state.clock.elapsedTime;
      const nodes = nodesRef.current.children;
      if (nodes[0]) nodes[0].scale.setScalar(1 + Math.sin(t * 2.0) * 0.02);
      if (nodes[1]) nodes[1].scale.setScalar(1 + Math.sin(t * 2.0 + 1.3) * 0.02);
      if (nodes[2]) nodes[2].scale.setScalar(1 + Math.sin(t * 2.0 + 2.1) * 0.02);

      const links = linksRef.current.children;
      if (links[0]) (links[0] as THREE.Mesh).material = linkMat.clone();
      if (links[0]) ((links[0] as THREE.Mesh).material as THREE.MeshStandardMaterial).emissiveIntensity = 0.14 + Math.sin(t * 2.2) * 0.03;
      if (links[1]) (links[1] as THREE.Mesh).material = linkMat.clone();
      if (links[1]) ((links[1] as THREE.Mesh).material as THREE.MeshStandardMaterial).emissiveIntensity = 0.14 + Math.sin(t * 2.2 + 1.2) * 0.03;
    }
  });

  return (
    <group position={[0, 0, 0.25]}>
      <group ref={nodesRef}>
        <mesh material={nodeMat} position={[0, 0.18, 0.20]}>
          <sphereGeometry args={[0.16, 30, 30]} />
        </mesh>
        <mesh material={nodeMat} position={[-0.38, -0.22, 0.20]}>
          <sphereGeometry args={[0.13, 28, 28]} />
        </mesh>
        <mesh material={nodeMat} position={[0.38, -0.22, 0.20]}>
          <sphereGeometry args={[0.13, 28, 28]} />
        </mesh>
      </group>
      <group ref={linksRef}>
        <mesh material={linkMat} position={[-0.20, -0.02, 0.17]} rotation-z={0.8}>
          <cylinderGeometry args={[0.02, 0.02, 0.55, 20]} />
        </mesh>
        <mesh material={linkMat} position={[0.20, -0.02, 0.17]} rotation-z={-0.8}>
          <cylinderGeometry args={[0.02, 0.02, 0.55, 20]} />
        </mesh>
      </group>
    </group>
  );
}

function LeaderboardIcon() {
  const podiumRef = useRef<THREE.Group>(null);
  const medalsRef = useRef<THREE.Group>(null);

  const podiumMat = useMemo(() => makeMatteGlassMaterial(new THREE.Color(0x00d2ff), 0.14), []);
  const accent = useMemo(() => makeAccentMaterial(), []);

  const goldMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 0xffd166,
    roughness: 0.22,
    metalness: 1.0,
    clearcoat: 0.9,
    clearcoatRoughness: 0.22,
    envMapIntensity: 1.25
  }), []);

  const silverMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 0xdfe7f3,
    roughness: 0.22,
    metalness: 1.0,
    clearcoat: 0.9,
    clearcoatRoughness: 0.22,
    envMapIntensity: 1.25
  }), []);

  const bronzeMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 0xd99a6b,
    roughness: 0.22,
    metalness: 1.0,
    clearcoat: 0.9,
    clearcoatRoughness: 0.22,
    envMapIntensity: 1.25
  }), []);

  useFrame((state) => {
    if (podiumRef.current && medalsRef.current) {
      const t = state.clock.elapsedTime;
      const blocks = podiumRef.current.children;
      if (blocks[0]) blocks[0].scale.y = 1 + Math.sin(t * 2.2) * 0.01;
      if (blocks[1]) blocks[1].scale.y = 1 + Math.sin(t * 2.2 + 1.1) * 0.01;
      if (blocks[2]) blocks[2].scale.y = 1 + Math.sin(t * 2.2 + 2.1) * 0.01;

      const medals = medalsRef.current.children;
      if (medals[0]) medals[0].rotation.z = Math.sin(t * 1.8) * 0.10;
      if (medals[1]) medals[1].rotation.z = Math.sin(t * 1.8 + 1.2) * 0.10;
      if (medals[2]) medals[2].rotation.z = Math.sin(t * 1.8 + 2.3) * 0.10;
    }
  });

  return (
    <group position={[0, 0, 0.25]}>
      <group ref={podiumRef}>
        <mesh material={podiumMat} position={[-0.40, -0.10, 0.15]} castShadow>
          <boxGeometry args={[0.34, 0.50, 0.30]} />
        </mesh>
        <mesh material={podiumMat} position={[0.00, 0.01, 0.15]} castShadow>
          <boxGeometry args={[0.34, 0.72, 0.30]} />
        </mesh>
        <mesh material={podiumMat} position={[0.40, -0.16, 0.15]} castShadow>
          <boxGeometry args={[0.34, 0.38, 0.30]} />
        </mesh>
      </group>
      <group ref={medalsRef}>
        <mesh material={goldMat} position={[0.00, 0.20, 0.25]} rotation-x={Math.PI / 2} castShadow>
          <cylinderGeometry args={[0.14, 0.14, 0.08, 48]} />
        </mesh>
        <mesh material={silverMat} position={[-0.28, 0.24, 0.25]} rotation-x={Math.PI / 2} castShadow>
          <cylinderGeometry args={[0.14, 0.14, 0.08, 48]} />
        </mesh>
        <mesh material={bronzeMat} position={[0.28, 0.24, 0.25]} rotation-x={Math.PI / 2} castShadow>
          <cylinderGeometry args={[0.14, 0.14, 0.08, 48]} />
        </mesh>
      </group>
    </group>
  );
}

function BookIcon() {
  const groupRef = useRef<THREE.Group>(null);
  const pagesRef = useRef<THREE.Mesh>(null);

  const coverMat = useMemo(() => makeMatteGlassMaterial(new THREE.Color(0x00d2ff), 0.12), []);
  const pagesMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.55,
    metalness: 0.0
  }), []);
  const accent = useMemo(() => makeAccentMaterial(), []);

  useFrame((state) => {
    if (groupRef.current && pagesRef.current) {
      const t = state.clock.elapsedTime;
      pagesRef.current.position.y = 0.00 + Math.sin(t * 2.4) * 0.01;
      groupRef.current.rotation.z = -0.10 + Math.sin(t * 1.8) * 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0.25]} rotation-z={-0.10}>
      <mesh material={coverMat} position={[0.05, -0.02, 0.16]} castShadow>
        <boxGeometry args={[0.95, 0.62, 0.20]} />
      </mesh>
      <mesh ref={pagesRef} material={pagesMat} position={[0.08, 0.00, 0.19]} castShadow>
        <boxGeometry args={[0.88, 0.56, 0.14]} />
      </mesh>
      <mesh material={accent} position={[-0.40, -0.02, 0.17]}>
        <boxGeometry args={[0.06, 0.62, 0.20]} />
      </mesh>
    </group>
  );
}

function Scene({ iconType }: { iconType: string }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.15, 3.0]} fov={38} />
      <Environment preset="apartment" />

      <directionalLight
        position={[2.2, 2.0, 3.0]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-camera-near={0.5}
        shadow-camera-far={10}
      />
      <directionalLight position={[-2.0, 1.0, 2.0]} intensity={0.45} color="#9ff3ff" />
      <pointLight position={[0, -1.2, 2.8]} intensity={0.65} color="#00d2ff" distance={10} />

      <mesh rotation-x={-Math.PI / 2} position-y={-1.05} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.25} />
      </mesh>

      <Tile />
      {iconType === 'commission' && <CommissionIcon />}
      {iconType === 'analytics' && <AnalyticsIcon />}
      {iconType === 'hierarchy' && <HierarchyIcon />}
      {iconType === 'leaderboard' && <LeaderboardIcon />}
      {iconType === 'book' && <BookIcon />}
    </>
  );
}

interface WebGLIconProps {
  type: 'commission' | 'analytics' | 'hierarchy' | 'leaderboard' | 'book';
}

export const WebGLIcon: React.FC<WebGLIconProps> = ({ type }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false
        }}
      >
        <Scene iconType={type} />
      </Canvas>
    </div>
  );
};
