import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TunnelBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene + camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 2.2, 10.0);

    const camera = new THREE.PerspectiveCamera(
      44,
      mount.clientWidth / mount.clientHeight,
      0.1,
      40
    );
    camera.position.set(0, 0, 2.2);

    // Lights (subtle)
    const key = new THREE.DirectionalLight(0xffffff, 0.55);
    key.position.set(2.5, 2.0, 2.5);
    scene.add(key);

    const teal = new THREE.PointLight(0x00d2ff, 0.8, 18);
    teal.position.set(1.1, -0.6, 1.2);
    scene.add(teal);

    const purple = new THREE.PointLight(0xc678ff, 0.55, 18);
    purple.position.set(-1.1, 0.5, 1.2);
    scene.add(purple);

    // ===== GRID TUNNEL (slices) =====
    const TUNNEL = {
      slices: 70,
      spacing: 0.18,
      size: 2.4,
      divisions: 14,
      speed: 0.55,
    };

    function makeGridSlice(size: number, divisions: number) {
      const grid = new THREE.GridHelper(size, divisions, 0x8ef0ff, 0x8ef0ff);
      grid.material.transparent = true;
      grid.material.opacity = 0.12;
      grid.material.depthWrite = false;
      grid.material.blending = THREE.AdditiveBlending;
      grid.rotation.x = Math.PI / 2;
      return grid;
    }

    // Group for tunnel
    const tunnel = new THREE.Group();
    scene.add(tunnel);

    const slices: THREE.GridHelper[] = [];
    for (let i = 0; i < TUNNEL.slices; i++) {
      const g = makeGridSlice(TUNNEL.size, TUNNEL.divisions);

      g.material.opacity = 0.06 + (i / TUNNEL.slices) * 0.13;
      g.position.z = -i * TUNNEL.spacing;
      g.rotation.z = 0.02 * Math.sin(i * 0.35);

      tunnel.add(g);
      slices.push(g);
    }

    // Add "tunnel walls" feel
    const wallMat = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      transparent: true,
      opacity: 0.035,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const wallGeo = new THREE.PlaneGeometry(6, 6, 1, 1);
    const leftWall = new THREE.Mesh(wallGeo, wallMat);
    leftWall.position.set(-1.35, 0, -3.2);
    leftWall.rotation.y = Math.PI / 2.6;

    const rightWall = new THREE.Mesh(wallGeo, wallMat.clone());
    rightWall.position.set(1.35, 0, -3.2);
    rightWall.rotation.y = -Math.PI / 2.6;

    tunnel.add(leftWall, rightWall);

    // Subtle "center glow"
    const glowGeo = new THREE.PlaneGeometry(6, 6);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x7cc4ff,
      transparent: true,
      opacity: 0.05,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.set(0, 0, -5.0);
    tunnel.add(glow);

    // ===== Animate =====
    const clock = new THREE.Clock();
    let animationId: number;

    function resize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    function animate() {
      const t = clock.getElapsedTime();

      // Camera drift
      camera.position.x = Math.sin(t * 0.35) * 0.06;
      camera.position.y = Math.cos(t * 0.28) * 0.05;
      camera.lookAt(0, 0, -3);

      // Tunnel "breathing" + rotation
      tunnel.rotation.z = Math.sin(t * 0.18) * 0.03;
      tunnel.rotation.x = Math.cos(t * 0.14) * 0.02;

      // Move slices toward camera and recycle
      for (let i = 0; i < slices.length; i++) {
        const s = slices[i];
        s.position.z += TUNNEL.speed * 0.016;

        s.material.opacity =
          0.06 + (i / TUNNEL.slices) * 0.13 + Math.sin(t * 1.2 + i * 0.2) * 0.004;

        if (s.position.z > 0.25) {
          s.position.z = -TUNNEL.slices * TUNNEL.spacing;
        }
      }

      // Glow pulse
      glowMat.opacity = 0.045 + Math.sin(t * 0.9) * 0.01;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }

    // Respect reduced motion
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      animate();
    } else {
      renderer.render(scene, camera);
    }

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(70% 70% at 55% 52%,
              rgba(0,0,0,0.15) 0%,
              rgba(0,0,0,0.55) 55%,
              rgba(0,0,0,0.85) 100%),
            radial-gradient(40% 40% at 60% 55%,
              rgba(0,210,255,0.06) 0%,
              rgba(0,0,0,0) 60%),
            radial-gradient(40% 40% at 35% 45%,
              rgba(190,120,255,0.05) 0%,
              rgba(0,0,0,0) 62%)
          `,
        }}
      />
    </>
  );
};

export default TunnelBackground;
