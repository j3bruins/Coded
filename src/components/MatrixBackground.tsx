
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
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    const characters = ['0', '1'];

    // Set up the font style
    ctx.font = `${fontSize}px 'Share Tech Mono'`;

    const animate = () => {
      // Create more pronounced trail effect with slower fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Reduced opacity for slower fade
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Reduce the glow effect
      ctx.shadowBlur = 1;
      ctx.shadowColor = 'rgba(0, 255, 65, 0.3)';

      for (let i = 0; i < drops.length; i++) {
        // Only update every few frames to slow down the movement
        if (Math.random() > 0.975) { // Reduced probability of updating
          const char = characters[Math.floor(Math.random() * characters.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Reduce the opacity of characters
          const opacity = Math.random() * 0.3 + 0.2;
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
          ctx.fillText(char, x, y);

          // Adjust stream behavior
          if (y > canvas.height && Math.random() > 0.99) { // Reduced probability of resetting
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      // Reduce frequency of new streams
      if (Math.random() > 0.995) { // Reduced probability of new streams
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
      style={{ background: 'radial-gradient(circle at center, #000000 0%, #000000 100%)' }}
    />
  );
};
