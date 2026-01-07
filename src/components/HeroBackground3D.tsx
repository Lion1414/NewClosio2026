import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';

const HeroBackground3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 90);
    camera.position.set(0.0, 0.2, 7.5);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const key = new THREE.DirectionalLight(0xffffff, 2.5);
    key.position.set(5, 6, 7);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 1.0);
    fill.position.set(-6, 2, 5);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 1.5, 30);
    rim.position.set(-2.0, 2.2, -2.8);
    scene.add(rim);

    const accentLight1 = new THREE.PointLight(0x35E7E0, 2.0, 15);
    accentLight1.position.set(3, 1, 3);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x6ad4f2, 1.5, 15);
    accentLight2.position.set(-3, -1, 2);
    scene.add(accentLight2);

    const TEAL = new THREE.Color("#35E7E0");
    const WHITE = new THREE.Color("#FFFFFF");

    function glassMaterial(tint: THREE.Color, emissiveIntensity = 0.35, rough = 0.05, thickness = 1.2) {
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#FFFFFF"),
        metalness: 0.0,
        roughness: rough,
        transmission: 1.0,
        thickness,
        ior: 1.52,
        transparent: true,
        opacity: 1.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        envMapIntensity: 2.0,
        specularIntensity: 1.2,
        emissive: tint,
        emissiveIntensity
      });
    }

    const hero3D = new THREE.Group();
    scene.add(hero3D);
    hero3D.position.set(0, 0.0, 0.0);

    const topRingGeo = new THREE.TorusGeometry(1.4, 0.18, 64, 100);
    const ringTop = new THREE.Mesh(topRingGeo, glassMaterial(TEAL, 0.40, 0.04, 1.5));
    ringTop.position.set(0, 1.8, 0);
    hero3D.add(ringTop);

    const middleRingGeo = new THREE.TorusGeometry(0.9, 0.12, 64, 100);
    const ringMiddle = new THREE.Mesh(middleRingGeo, glassMaterial(WHITE, 0.35, 0.04, 1.5));
    ringMiddle.position.set(0, 0.35, 0);
    hero3D.add(ringMiddle);

    const bottomRingGeo = new THREE.TorusGeometry(1.4, 0.18, 64, 100);
    const ringBottom = new THREE.Mesh(bottomRingGeo, glassMaterial(TEAL, 0.40, 0.04, 1.5));
    ringBottom.position.set(0, -1.1, 0);
    hero3D.add(ringBottom);

    const chainGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.6, 16);
    const chainMat = glassMaterial(WHITE, 0.25, 0.05, 1.0);

    const chain1 = new THREE.Mesh(chainGeo, chainMat);
    chain1.position.set(0, 1.15, 0);
    hero3D.add(chain1);

    const chain2 = new THREE.Mesh(chainGeo, chainMat);
    chain2.position.set(0, -0.35, 0);
    hero3D.add(chain2);

    function createItalicHollowI({
      width = 0.38,
      height = 0.98,
      stroke = 0.10,
      slant = 0.26,
      depth = 0.10
    } = {}) {
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

      const g = new THREE.ExtrudeGeometry(outer, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelSegments: 2
      });
      g.center();
      return g;
    }

    function createSolidO({ radius = 0.36, depth = 0.10 } = {}) {
      const shape = new THREE.Shape();
      shape.absellipse(0, 0, radius, radius, 0, Math.PI * 2, false, 0);

      const g = new THREE.ExtrudeGeometry(shape, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelSegments: 2
      });
      g.center();
      return g;
    }

    const io = new THREE.Group();
    io.position.set(0, 0.35, 0.12);
    hero3D.add(io);

    const iMesh = new THREE.Mesh(createItalicHollowI(), glassMaterial(TEAL, 0.30, 0.08, 0.35));
    const oMesh = new THREE.Mesh(createSolidO(), glassMaterial(WHITE, 0.26, 0.09, 0.35));

    iMesh.position.set(-0.38, 0.0, 0.0);
    oMesh.position.set(0.40, 0.0, 0.0);

    io.add(iMesh, oMesh);

    const ioGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.7, 1.0),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06, depthWrite: false })
    );
    ioGlow.position.set(0, 0, -0.10);
    io.add(ioGlow);

    const particleCount = 80;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    const particlePhases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.0 + Math.random() * 2.5;
      const height = (Math.random() - 0.5) * 4.0;

      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = height;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius;

      particleSizes[i] = 0.04 + Math.random() * 0.08;
      particlePhases[i] = Math.random() * Math.PI * 2;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
    particleGeometry.setAttribute('phase', new THREE.BufferAttribute(particlePhases, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: TEAL,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    hero3D.add(particles);

    const connectionLinesMaterial = new THREE.LineBasicMaterial({
      color: TEAL,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const connectionPoints: THREE.Vector3[] = [];
    for (let i = 0; i < 20; i++) {
      const angle1 = (i / 20) * Math.PI * 2;
      const angle2 = ((i + 1) / 20) * Math.PI * 2;
      const radius = 2.5;

      connectionPoints.push(
        new THREE.Vector3(Math.cos(angle1) * radius, 0, Math.sin(angle1) * radius),
        new THREE.Vector3(Math.cos(angle2) * radius, 0, Math.sin(angle2) * radius)
      );
    }

    const connectionGeometry = new THREE.BufferGeometry().setFromPoints(connectionPoints);
    const connectionLines = new THREE.LineSegments(connectionGeometry, connectionLinesMaterial);
    connectionLines.position.y = 0.35;
    hero3D.add(connectionLines);

    const raycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2(0, 0);

    let hover = false;
    let pulse = 0;

    function updatePointerNDC(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      pointerNDC.x = x * 2 - 1;
      pointerNDC.y = -(y * 2 - 1);
    }

    let tx = 0, ty = 0;
    const handleMouseMove = (e: MouseEvent) => {
      updatePointerNDC(e);
      if (window.innerWidth < 900) return;
      tx = (e.clientX / window.innerWidth - 0.5) * 0.28;
      ty = (e.clientY / window.innerHeight - 0.5) * 0.18;
    };

    const handleClick = () => {
      pulse = 1.0;

      gsap.to([ringTop.scale, ringMiddle.scale, ringBottom.scale], {
        x: 1.15,
        y: 1.15,
        z: 1.15,
        duration: 0.4,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      });

      gsap.to(io.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 0.4,
        ease: "back.out(3)",
        yoyo: true,
        repeat: 1
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    function fit() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const mobile = w < 900;
      hero3D.position.x = 0;
      hero3D.scale.setScalar(mobile ? 0.75 : 1.15);
    }

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    gsap.fromTo(hero3D.scale,
      { x: 0, y: 0, z: 0 },
      {
        x: hero3D.scale.x,
        y: hero3D.scale.y,
        z: hero3D.scale.z,
        duration: 2.5,
        ease: "elastic.out(1, 0.6)",
        delay: 0.3
      }
    );

    gsap.fromTo(hero3D.rotation,
      { y: Math.PI * 2 },
      {
        y: 0,
        duration: 2.5,
        ease: "power3.out",
        delay: 0.3
      }
    );

    gsap.fromTo(ringTop.rotation,
      { x: -Math.PI },
      {
        x: 0,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
      }
    );

    gsap.fromTo(ringBottom.rotation,
      { x: Math.PI },
      {
        x: 0,
        duration: 2,
        ease: "power2.out",
        delay: 0.7
      }
    );

    gsap.to(ringTop.rotation, {
      z: Math.PI * 2,
      duration: 20,
      ease: "none",
      repeat: -1,
      delay: 2
    });

    gsap.to(ringMiddle.rotation, {
      z: -Math.PI * 2,
      duration: 15,
      ease: "none",
      repeat: -1,
      delay: 2
    });

    gsap.to(ringBottom.rotation, {
      z: Math.PI * 2,
      duration: 25,
      ease: "none",
      repeat: -1,
      delay: 2
    });

    gsap.fromTo(io.scale,
      { x: 0, y: 0, z: 0 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 2,
        ease: "back.out(2)",
        delay: 1.2
      }
    );

    gsap.to(io.rotation, {
      y: Math.PI * 2,
      duration: 30,
      ease: "none",
      repeat: -1,
      delay: 2
    });

    gsap.fromTo(particles.material,
      { opacity: 0 },
      {
        opacity: 0.7,
        duration: 2,
        ease: "power2.out",
        delay: 1.5
      }
    );

    gsap.fromTo(connectionLines.material,
      { opacity: 0 },
      {
        opacity: 0.15,
        duration: 2,
        ease: "power2.out",
        delay: 1.8
      }
    );

    gsap.fromTo(camera.position,
      { z: 12 },
      {
        z: 7.5,
        duration: 2.5,
        ease: "power2.inOut",
        delay: 0.2
      }
    );

    gsap.to(accentLight1.position, {
      x: -3,
      duration: 8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2
    });

    gsap.to(accentLight2.position, {
      x: 3,
      duration: 10,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2
    });

    let t = 0;
    let animationId: number;

    function animate() {
      t += 0.010;

      raycaster.setFromCamera(pointerNDC, camera);
      const hit = raycaster.intersectObjects([ringTop, ringMiddle, ringBottom, iMesh, oMesh], true);
      const isHover = hit.length > 0;

      if (isHover !== hover) {
        hover = isHover;

        gsap.to([ringTop.material, ringBottom.material], {
          emissiveIntensity: hover ? 0.55 : 0.40,
          duration: 0.4,
          ease: "power2.out"
        });

        gsap.to(ringMiddle.material, {
          emissiveIntensity: hover ? 0.50 : 0.35,
          duration: 0.4,
          ease: "power2.out"
        });

        gsap.to([iMesh.material, oMesh.material], {
          emissiveIntensity: hover ? 0.45 : 0.26,
          duration: 0.4,
          ease: "power2.out"
        });

        gsap.to(ioGlow.material, {
          opacity: hover ? 0.12 : 0.06,
          duration: 0.4,
          ease: "power2.out"
        });
      }

      const targetRotY = tx * 0.5;
      const targetRotX = -ty * 0.3;
      hero3D.rotation.y += (targetRotY - hero3D.rotation.y) * 0.08;
      hero3D.rotation.x += (targetRotX - hero3D.rotation.x) * 0.08;

      const swing = Math.sin(t * 0.5) * 0.08;

      ringTop.rotation.x = swing;
      ringMiddle.rotation.x = swing * 0.6;
      ringBottom.rotation.x = swing * 0.4;

      chain1.rotation.z = swing * 0.5;
      chain2.rotation.z = swing * 0.4;

      io.rotation.x = Math.cos(t * 0.4) * 0.05;

      const positions = particles.geometry.attributes.position.array as Float32Array;
      const phases = particles.geometry.attributes.phase.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const phase = phases[i];
        const angle = (i / particleCount) * Math.PI * 2 + t * 0.25;
        const radius = 2.3 + Math.sin(t * 0.4 + phase) * 0.6;
        const yOscillate = Math.sin(t * 0.5 + phase) * 0.4;

        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = positions[i3 + 1] * 0.96 + yOscillate * 0.04;
        positions[i3 + 2] = Math.sin(angle) * radius;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      connectionLines.rotation.y = t * 0.12;

      if (pulse > 0.001) {
        pulse *= 0.88;
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-black pointer-events-auto"
        style={{ opacity: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(53,231,224,0.05)_40%,_transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(106,212,242,0.03)_0%,_transparent_60%)] pointer-events-none" />
    </div>
  );
};

export default HeroBackground3D;
