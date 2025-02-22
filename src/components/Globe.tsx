
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create globe
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00ff41, // Matrix green color
      shininess: 0.5,
      transparent: true,
      opacity: 0.9,
    });
    const globe = new THREE.Mesh(geometry, material);
    
    // Add wireframe
    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      new THREE.LineBasicMaterial({ 
        color: 0x00ff41,
        transparent: true,
        opacity: 0.2,
      })
    );
    globe.add(wireframe);
    
    scene.add(globe);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00ff41, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Animation
    let rotation = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      rotation += 0.005;
      globe.rotation.y = rotation;
      wireframe.rotation.y = rotation;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[300px]" />;
};

export default Globe;
