// ParticlesBackground.js
import { useEffect } from 'react';
import * as THREE from 'three';

const ParticlesBackground = () => {
  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer.domElement to a container div
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = 0;
    particlesContainer.style.left = 0;
    particlesContainer.style.zIndex = -1; // Ensure particles are behind the content
    particlesContainer.appendChild(renderer.domElement);
    document.body.appendChild(particlesContainer);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true, // Make the material transparent
      opacity: 0.5, // Adjust the opacity as needed
    });

    const particlesVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      particlesVertices.push(x, y, z);
    }

    particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlesVertices, 3));
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Adjust camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(particlesContainer);
    };
  }, []);

  return null; // The component doesn't need to render anything
};

export default ParticlesBackground;
