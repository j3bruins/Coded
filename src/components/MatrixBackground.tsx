
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

    // Matrix stream properties
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    const characters = ['0', '1'];

    // Set up the font style
    ctx.font = `${fontSize}px 'Share Tech Mono'`;

    // Animation loop
    const animate = () => {
      // Create slight trail effect with semi-transparent black
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the text color with a slight glow effect
      ctx.fillStyle = '#0f0';
      ctx.shadowBlur = 2;
      ctx.shadowColor = '#0f0';

      // Draw the characters
      for (let i = 0; i < drops.length; i++) {
        // Generate a random character
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        // Calculate position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw the character with varying opacity based on position
        const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
        ctx.fillText(char, x, y);

        // Reset position if it reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ background: 'radial-gradient(circle at center, #001a00 0%, #000000 100%)' }}
    />
  );
};
