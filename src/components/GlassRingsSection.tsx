import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, className = '', onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && !hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
  }, [isInView, delay, hasStarted]);

  useEffect(() => {
    if (!isTyping || !hasStarted) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        onComplete?.();
      }
    }, 45);

    return () => clearInterval(interval);
  }, [isTyping, text, hasStarted, onComplete]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

const GlassRingsSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [line1Complete, setLine1Complete] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: false,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
    camera.position.set(0, 0, 9);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
    scene.environment = env;

    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(5, 6, 8);
    key.castShadow = true;
    key.shadow.mapSize.width = 2048;
    key.shadow.mapSize.height = 2048;
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 50;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x6699ff, 0.8);
    fill.position.set(-5, -2, 3);
    scene.add(fill);

    const rim = new THREE.PointLight(0x00d4ff, 2.0, 25);
    rim.position.set(-3, 3, -3);
    scene.add(rim);

    const accent = new THREE.PointLight(0xffffff, 1.5, 15);
    accent.position.set(2, -2, 4);
    scene.add(accent);

    const metalMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#E8EEF5"),
      metalness: 1.0,
      roughness: 0.12,
      envMapIntensity: 2.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
      ior: 2.5,
      thickness: 0.5,
      transmission: 0,
    });

    const group = new THREE.Group();
    scene.add(group);

    const linkGeo = new THREE.TorusGeometry(0.55, 0.14, 48, 72);

    const chainLinks: THREE.Mesh[] = [];

    for (let i = 0; i < 11; i++) {
      const link = new THREE.Mesh(linkGeo, metalMaterial.clone());
      link.position.y = 2.8 - (i * 0.6);
      link.castShadow = true;
      link.receiveShadow = true;

      if (i % 2 === 0) {
        link.rotation.y = Math.PI / 2;
      }

      chainLinks.push(link);
      group.add(link);
    }

    const fit = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const isMobile = w < 900;
      group.scale.setScalar(isMobile ? 0.7 : 1.0);
    };

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);
    fit();

    let t = 0;
    let animationId: number;
    let isHovering = false;

    const handleCanvasMouseEnter = () => {
      isHovering = true;
    };

    const handleCanvasMouseLeave = () => {
      isHovering = false;
    };

    canvas.addEventListener('mouseenter', handleCanvasMouseEnter);
    canvas.addEventListener('mouseleave', handleCanvasMouseLeave);

    const animate = () => {
      t += 0.012;

      const mainSwing = Math.sin(t * 0.8) * 0.28;
      const secondarySwing = Math.sin(t * 1.3) * 0.12;

      const hoverSway = isHovering ? Math.sin(t * 2.8) * 0.35 : 0;
      const hoverIntensity = isHovering ? 1.8 : 1.0;

      chainLinks.forEach((link, i) => {
        const factor = 1 - (i / chainLinks.length);
        const delay = i * 0.2;
        const waveFactor = Math.sin(t * 0.6 + delay);

        const swingX = (mainSwing + secondarySwing * 0.5) * hoverIntensity;
        const swingZ = (Math.sin(t * 0.5) * 0.15 + Math.sin(t * 1.1) * 0.08) * hoverIntensity;

        if (i % 2 === 0) {
          link.rotation.x = swingX * factor + waveFactor * 0.12 * factor + hoverSway * factor * 0.5;
          link.rotation.z = swingZ * factor * 0.7;
          link.position.x = (Math.sin(t * 0.7 + delay) * 0.12 + hoverSway * 0.15) * factor;
        } else {
          link.rotation.z = swingX * factor + waveFactor * 0.12 * factor + hoverSway * factor * 0.5;
          link.rotation.x = swingZ * factor * 0.7;
          link.position.x = (Math.sin(t * 0.7 + delay) * 0.12 + hoverSway * 0.15) * factor;
        }

        link.position.z = Math.sin(t * 0.4 + delay) * 0.03 * factor;
      });

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    let targetX = 0, targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 900 || !isHovering) return;
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      targetX = x * 0.12;
      targetY = y * 0.10;
    };

    const parallax = () => {
      if (!isHovering) {
        targetX += (0 - targetX) * 0.08;
        targetY += (0 - targetY) * 0.08;
      }

      group.rotation.y += (targetX - group.rotation.y) * 0.05;
      group.rotation.x += ((-targetY) - group.rotation.x) * 0.05;
      requestAnimationFrame(parallax);
    };
    parallax();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener('mouseenter', handleCanvasMouseEnter);
      canvas.removeEventListener('mouseleave', handleCanvasMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      renderer.dispose();
      linkGeo.dispose();
      metalMaterial.dispose();
    };
  }, []);

  const featureItems = [
    {
      title: 'Bank-Level Security',
      description: 'Enterprise-grade encryption and security protocols protect your data 24/7.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Expert Team Support',
      description: 'Our experienced team is dedicated to your success, every step of the way.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Continuous Innovation',
      description: 'Regular updates and new features keep our CRM ahead of the curve.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                Secure & Reliable Platform
              </span>
            </motion.div>

            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white min-h-[1.2em]">
                  <TypewriterText
                    text="Built by Experts"
                    delay={300}
                    onComplete={() => setLine1Complete(true)}
                  />
                </span>
                <span className="block text-white/70 min-h-[1.2em]">
                  {line1Complete && (
                    <TypewriterText
                      text="Built for You"
                      delay={100}
                    />
                  )}
                </span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/50 leading-relaxed max-w-lg"
            >
              CLOSIO is powered by a dedicated team of industry professionals committed to delivering
              enterprise-grade security and continuous innovation. Your data and success are our top priorities.
            </motion.p>

            <div className="space-y-4 pt-6">
              {featureItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-5 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 w-24 h-24 bg-white/[0.03] rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 text-white/70 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-base mb-1 group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-first lg:order-last"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl blur-3xl" />
            <canvas
              ref={canvasRef}
              className="w-full h-[500px] lg:h-[600px] block bg-black rounded-2xl"
              style={{
                opacity: 1.0,
                filter: 'saturate(1.08)'
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GlassRingsSection;
