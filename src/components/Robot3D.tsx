import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Robot3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x37E6E0, 2.5);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xFF63D8, 1.5);
    fillLight.position.set(-5, 3, -3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 1.2, 30);
    rimLight.position.set(-3, 5, -5);
    scene.add(rimLight);

    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0xE8EEF5,
      metalness: 0.85,
      roughness: 0.25,
      envMapIntensity: 1.0,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x37E6E0,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x37E6E0,
      emissiveIntensity: 0.3,
    });

    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0x37E6E0,
      metalness: 0.2,
      roughness: 0.1,
      emissive: 0x37E6E0,
      emissiveIntensity: 1.2,
    });

    const head = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 1.0, 1.0),
      metalMaterial
    );
    head.position.y = 1.8;
    head.castShadow = true;
    robotGroup.add(head);

    const antenna = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.4, 16),
      accentMaterial
    );
    antenna.position.set(0, 2.5, 0);
    robotGroup.add(antenna);

    const antennaTip = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 16, 16),
      eyeMaterial
    );
    antennaTip.position.set(0, 2.8, 0);
    robotGroup.add(antennaTip);

    const leftEye = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.25, 0.1),
      eyeMaterial
    );
    leftEye.position.set(-0.3, 1.85, 0.51);
    robotGroup.add(leftEye);

    const rightEye = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.25, 0.1),
      eyeMaterial
    );
    rightEye.position.set(0.3, 1.85, 0.51);
    robotGroup.add(rightEye);

    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 1.6, 0.9),
      metalMaterial
    );
    torso.position.y = 0.5;
    torso.castShadow = true;
    robotGroup.add(torso);

    const chestPanel = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.9, 0.05),
      accentMaterial
    );
    chestPanel.position.set(0, 0.6, 0.48);
    robotGroup.add(chestPanel);

    const chestCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 16, 16),
      eyeMaterial
    );
    chestCore.position.set(0, 0.6, 0.51);
    robotGroup.add(chestCore);

    const leftArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 1.3, 16),
      metalMaterial
    );
    leftArm.position.set(-0.85, 0.5, 0);
    leftArm.castShadow = true;
    robotGroup.add(leftArm);

    const rightArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 1.3, 16),
      metalMaterial
    );
    rightArm.position.set(0.85, 0.5, 0);
    rightArm.castShadow = true;
    robotGroup.add(rightArm);

    const leftShoulder = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 16, 16),
      accentMaterial
    );
    leftShoulder.position.set(-0.85, 1.1, 0);
    robotGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 16, 16),
      accentMaterial
    );
    rightShoulder.position.set(0.85, 1.1, 0);
    robotGroup.add(rightShoulder);

    const leftHand = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 16),
      metalMaterial
    );
    leftHand.position.set(-0.85, -0.2, 0);
    robotGroup.add(leftHand);

    const rightHand = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 16),
      metalMaterial
    );
    rightHand.position.set(0.85, -0.2, 0);
    robotGroup.add(rightHand);

    const leftLeg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.16, 1.2, 16),
      metalMaterial
    );
    leftLeg.position.set(-0.35, -0.9, 0);
    leftLeg.castShadow = true;
    robotGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.16, 1.2, 16),
      metalMaterial
    );
    rightLeg.position.set(0.35, -0.9, 0);
    rightLeg.castShadow = true;
    robotGroup.add(rightLeg);

    const leftFoot = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.15, 0.5),
      accentMaterial
    );
    leftFoot.position.set(-0.35, -1.55, 0.1);
    robotGroup.add(leftFoot);

    const rightFoot = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.15, 0.5),
      accentMaterial
    );
    rightFoot.position.set(0.35, -1.55, 0.1);
    robotGroup.add(rightFoot);

    robotGroup.position.y = 0.5;

    const fit = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    let t = 0;
    let animationId: number;

    const animate = () => {
      t += 0.01;

      robotGroup.rotation.y = Math.sin(t * 0.5) * 0.3;

      head.rotation.y = Math.sin(t * 0.8) * 0.15;
      head.position.y = 1.8 + Math.sin(t * 2) * 0.02;

      leftArm.rotation.z = Math.sin(t * 1.2) * 0.1 + 0.1;
      rightArm.rotation.z = Math.sin(t * 1.2) * 0.1 - 0.1;

      robotGroup.position.y = 0.5 + Math.sin(t) * 0.05;

      antenna.position.y = 2.5 + Math.sin(t * 3) * 0.02;
      antennaTip.position.y = 2.8 + Math.sin(t * 3) * 0.02;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
};

export default Robot3D;
