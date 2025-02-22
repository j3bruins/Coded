
import { useEffect, useRef } from 'react';

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix stream properties
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    
    // Enhanced character set for more visual variety
    const characters = '01'.split('');

    // Set up the font style
    ctx.font = `${fontSize}px 'Share Tech Mono'`;

    const animate = () => {
      // Create a stronger trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Enhanced glow effect
      ctx.shadowBlur = 2;
      ctx.shadowColor = '#00ff41';

      for (let i = 0; i < drops.length; i++) {
        // Random character from our set
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Dynamic opacity for more visual interest
        const opacity = Math.random() * 0.5 + 0.5;
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
        ctx.fillText(char, x, y);

        // Reset logic with varying stream lengths
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Vary the fall speed
        drops[i] += Math.random() * 0.5 + 0.5;
      }

      // Create new streams randomly
      if (Math.random() > 0.95) {
        const randomColumn = Math.floor(Math.random() * drops.length);
        drops[randomColumn] = 0;
      }

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
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, #000000, #000000)',
        opacity: 0.9
      }}
    />
  );
};
