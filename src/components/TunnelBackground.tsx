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
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);

    // Scene + camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 5, 25);

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0, 2);
    camera.lookAt(0, 0, -20);

    // Lighting for realistic depth
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.4);
    frontLight.position.set(0, 2, 3);
    scene.add(frontLight);

    // ===== STATIC GRID TUNNEL =====
    const TUNNEL = {
      slices: 80,
      spacing: 0.22,
      size: 3.5,
      divisions: 16,
    };

    function makeGridSlice(size: number, divisions: number, depth: number) {
      // Gray grid lines
      const grid = new THREE.GridHelper(size, divisions, 0x666666, 0x555555);
      grid.material.transparent = true;

      // Opacity fades based on depth - closer = more visible
      const opacity = Math.max(0.15, 0.5 - depth * 0.02);
      grid.material.opacity = opacity;
      grid.material.depthWrite = true;
      grid.rotation.x = Math.PI / 2;

      return grid;
    }

    // Group for tunnel
    const tunnel = new THREE.Group();
    scene.add(tunnel);

    for (let i = 0; i < TUNNEL.slices; i++) {
      const depth = i;
      const g = makeGridSlice(TUNNEL.size, TUNNEL.divisions, depth);

      // Position slices going back into the distance
      g.position.z = -i * TUNNEL.spacing;

      tunnel.add(g);
    }

    // Add four tunnel walls with gray grid texture
    const wallSegments = 20;
    const wallMat = new THREE.MeshBasicMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      depthWrite: true,
    });

    const wallHeight = TUNNEL.slices * TUNNEL.spacing;
    const wallGeo = new THREE.PlaneGeometry(wallHeight, TUNNEL.size, wallSegments, 1);

    // Left wall
    const leftWall = new THREE.Mesh(wallGeo, wallMat.clone());
    leftWall.position.set(-TUNNEL.size / 2, 0, -wallHeight / 2);
    leftWall.rotation.y = Math.PI / 2;
    tunnel.add(leftWall);

    // Right wall
    const rightWall = new THREE.Mesh(wallGeo, wallMat.clone());
    rightWall.position.set(TUNNEL.size / 2, 0, -wallHeight / 2);
    rightWall.rotation.y = -Math.PI / 2;
    tunnel.add(rightWall);

    // Top wall
    const topWall = new THREE.Mesh(wallGeo, wallMat.clone());
    topWall.position.set(0, TUNNEL.size / 2, -wallHeight / 2);
    topWall.rotation.x = Math.PI / 2;
    tunnel.add(topWall);

    // Bottom wall
    const bottomWall = new THREE.Mesh(wallGeo, wallMat.clone());
    bottomWall.position.set(0, -TUNNEL.size / 2, -wallHeight / 2);
    bottomWall.rotation.x = -Math.PI / 2;
    tunnel.add(bottomWall);

    // OPENING AT THE END - bright light exit
    const openingSize = TUNNEL.size * 1.2;
    const openingGeo = new THREE.PlaneGeometry(openingSize, openingSize);
    const openingMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const opening = new THREE.Mesh(openingGeo, openingMat);
    opening.position.set(0, 0, -(TUNNEL.slices * TUNNEL.spacing + 2));
    tunnel.add(opening);

    // Add glow around the opening
    const glowGeo = new THREE.PlaneGeometry(openingSize * 1.8, openingSize * 1.8);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xaaaaaa,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.set(0, 0, -(TUNNEL.slices * TUNNEL.spacing + 1.5));
    tunnel.add(glow);

    function resize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    // Render once (static, no animation)
    renderer.render(scene, camera);

    // Cleanup
    return () => {
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
            radial-gradient(60% 50% at 50% 50%,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.4) 50%,
              rgba(0,0,0,0.75) 100%)
          `,
        }}
      />
    </>
  );
};

export default TunnelBackground;
