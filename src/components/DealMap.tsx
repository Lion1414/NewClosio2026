import { useRef, useMemo, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface CityData {
  name: string;
  lat: number;
  lng: number;
  deals: number;
}

const cities: CityData[] = [
  { name: 'Seattle', lat: 47.6, lng: -122.3, deals: 234 },
  { name: 'San Francisco', lat: 37.8, lng: -122.4, deals: 456 },
  { name: 'Los Angeles', lat: 34.1, lng: -118.2, deals: 678 },
  { name: 'Phoenix', lat: 33.4, lng: -112.1, deals: 189 },
  { name: 'Denver', lat: 39.7, lng: -105.0, deals: 312 },
  { name: 'Dallas', lat: 32.8, lng: -96.8, deals: 523 },
  { name: 'Houston', lat: 29.8, lng: -95.4, deals: 445 },
  { name: 'Chicago', lat: 41.9, lng: -87.6, deals: 687 },
  { name: 'Detroit', lat: 42.3, lng: -83.0, deals: 234 },
  { name: 'Atlanta', lat: 33.7, lng: -84.4, deals: 398 },
  { name: 'Miami', lat: 25.8, lng: -80.2, deals: 567 },
  { name: 'New York', lat: 40.7, lng: -74.0, deals: 892 },
  { name: 'Boston', lat: 42.4, lng: -71.1, deals: 345 },
  { name: 'Minneapolis', lat: 44.98, lng: -93.27, deals: 178 },
  { name: 'Kansas City', lat: 39.1, lng: -94.6, deals: 156 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [4, 7], [7, 8], [7, 9], [9, 10], [8, 11], [11, 12],
  [7, 13], [13, 4], [4, 14], [14, 5], [9, 11],
  [0, 4], [2, 5], [1, 4], [5, 9], [6, 10],
];

const benefits = [
  { title: 'Geographic Insights', description: 'See exactly where your team is closing deals across the country' },
  { title: 'Territory Planning', description: 'Identify underserved markets and expansion opportunities' },
  { title: 'Performance Tracking', description: 'Monitor regional performance and agent coverage' },
  { title: 'Real-Time Updates', description: 'Watch deals appear on the map as they close' },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  const globeGeometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 64);
    return geo;
  }, []);

  const cityPositions = useMemo(() => {
    return cities.map(city => latLngToVector3(city.lat, city.lng, 2.02));
  }, []);

  const arcGeometries = useMemo(() => {
    return connections.map(([fromIdx, toIdx]) => {
      const start = cityPositions[fromIdx];
      const end = cityPositions[toIdx];

      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const distance = start.distanceTo(end);
      mid.normalize().multiplyScalar(2 + distance * 0.15);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      return geometry;
    });
  }, [cityPositions]);

  const dotPositions = useMemo(() => {
    const positions: number[] = [];
    const count = 2000;

    for (let i = 0; i < count; i++) {
      const lat = (Math.random() - 0.5) * 180;
      const lng = (Math.random() - 0.5) * 360;
      const pos = latLngToVector3(lat, lng, 2.01);
      positions.push(pos.x, pos.y, pos.z);
    }

    return new Float32Array(positions);
  }, []);

  return (
    <group ref={globeRef}>
      <mesh geometry={globeGeometry}>
        <meshPhongMaterial
          color="#0a1628"
          emissive="#0d1f3c"
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
          shininess={10}
        />
      </mesh>

      <mesh geometry={globeGeometry} scale={1.001}>
        <meshBasicMaterial
          color="#2C66FF"
          transparent
          opacity={0.05}
          wireframe
        />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={dotPositions.length / 3}
            array={dotPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#2C66FF"
          size={0.01}
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {cityPositions.map((pos, idx) => (
        <group key={idx} position={pos}>
          <mesh>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color="#2C66FF" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#2C66FF" transparent opacity={0.3} />
          </mesh>
          <PulsingRing position={[0, 0, 0]} delay={idx * 0.2} />
        </group>
      ))}

      {arcGeometries.map((geometry, idx) => (
        <line key={idx} geometry={geometry}>
          <lineBasicMaterial
            color="#2C66FF"
            transparent
            opacity={0.6}
            linewidth={1}
          />
        </line>
      ))}

      <GlobeRings />
    </group>
  );
}

function PulsingRing({ position, delay }: { position: [number, number, number]; delay: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const t = ((clock.getElapsedTime() + delay) % 2) / 2;
      ringRef.current.scale.setScalar(1 + t * 2);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.5 * (1 - t);
    }
  });

  return (
    <mesh ref={ringRef} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.02, 0.025, 32]} />
      <meshBasicMaterial color="#10B981" transparent opacity={0.5} side={THREE.DoubleSide} />
    </mesh>
  );
}

function GlobeRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1 + 0.3;
      ring1Ref.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.2) * 0.1 - 0.2;
      ring2Ref.current.rotation.z = -clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.005, 16, 100]} />
        <meshBasicMaterial color="#2C66FF" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.8, 0.003, 16, 100]} />
        <meshBasicMaterial color="#10B981" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos: number[] = [];
    for (let i = 0; i < 200; i++) {
      pos.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }
    return new Float32Array(pos);
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.02}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#2C66FF" />
      <Globe />
      <FloatingParticles />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

export default function DealMap() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020a15] to-black" />

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2C66FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">Live Deal Tracking</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Deal Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A8B3C7] max-w-2xl mx-auto"
          >
            Visualize your agency's reach in real-time. Watch as policies are sold across the nation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-square max-w-[600px] mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2C66FF]/5 to-transparent blur-3xl" />

            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-[#2C66FF]/30 border-t-[#2C66FF] rounded-full animate-spin" />
              </div>
            }>
              <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                style={{ background: 'transparent' }}
              >
                <Scene />
              </Canvas>
            </Suspense>

            <div className="absolute bottom-8 left-8 px-4 py-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/60 uppercase tracking-wider">Live</span>
              </div>
              <div className="text-2xl font-bold text-white">4,894</div>
              <div className="text-xs text-white/50">Total Policies</div>
            </div>

            <div className="absolute top-8 left-8 px-3 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/5">
              <div className="text-xs text-white/50">15 Cities</div>
              <div className="text-sm font-semibold text-white">Nationwide Coverage</div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                See Your Business<br />
                <span className="text-[#2C66FF]">Come to Life</span>
              </h3>
              <p className="text-[#A8B3C7] leading-relaxed">
                The Deal Map gives agency owners, managers, and agents complete visibility into where policies are being sold.
                Track your team's geographic reach, identify growth opportunities, and celebrate wins as they happen.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2C66FF]/10 border border-[#2C66FF]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#2C66FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-[#A8B3C7]">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
