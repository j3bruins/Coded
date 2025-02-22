
import { useEffect, useRef } from 'react';

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Chain link properties
    const chains: Chain[] = [];
    const numberOfChains = 15; // Reduced number for subtlety

    interface Chain {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }

    // Initialize chains
    for (let i = 0; i < numberOfChains; i++) {
      chains.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 100 + Math.random() * 100,
        speed: 1 + Math.random() * 2,
        opacity: 0.1 + Math.random() * 0.2 // Keep opacity low for subtlety
      });
    }

    // Draw a single chain link
    const drawChainLink = (x: number, y: number, opacity: number) => {
      if (!ctx) return;

      ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`; // Matrix green with variable opacity
      ctx.lineWidth = 2;
      
      // Draw oval shape for chain link
      ctx.beginPath();
      ctx.ellipse(x, y, 15, 8, 0, 0, Math.PI * 2);
      ctx.stroke();
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Create slight trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw chains
      chains.forEach(chain => {
        // Draw multiple links in a chain
        for (let i = 0; i < chain.length; i += 30) {
          drawChainLink(
            chain.x,
            chain.y - i,
            chain.opacity * (1 - i / chain.length) // Fade out towards the top
          );
        }

        // Move chain down
        chain.y += chain.speed;

        // Reset chain position when it goes off screen
        if (chain.y - chain.length > canvas.height) {
          chain.y = -chain.length;
          chain.x = Math.random() * canvas.width;
          chain.opacity = 0.1 + Math.random() * 0.2;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ background: 'radial-gradient(circle at center, #001a00 0%, #000000 100%)' }}
    />
  );
};
