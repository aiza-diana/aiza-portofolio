import React, { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create multi-layered stars
    const starCount = Math.min(Math.floor((width * height) / 7000), 220);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.65 + 0.35,
      alpha: Math.random() * 0.8 + 0.2,
      deltaAlpha: (Math.random() * 0.012 + 0.003) * (Math.random() < 0.5 ? 1 : -1),
      speedY: Math.random() * 0.18 + 0.04,
      speedX: (Math.random() - 0.5) * 0.06,
      isBlue: Math.random() > 0.65,
    }));

    // Shooting star state
    let shootingStar = null;
    const spawnShootingStar = () => {
      if (Math.random() < 0.008 && !shootingStar) {
        shootingStar = {
          x: Math.random() * width * 0.8 + width * 0.1,
          y: Math.random() * height * 0.35,
          length: Math.random() * 90 + 60,
          speed: Math.random() * 9 + 7,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          opacity: 1,
        };
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      for (const star of stars) {
        star.alpha += star.deltaAlpha;
        if (star.alpha <= 0.15 || star.alpha >= 0.95) {
          star.deltaAlpha = -star.deltaAlpha;
        }

        star.y -= star.speedY;
        star.x += star.speedX;

        if (star.y < 0) star.y = height;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        if (star.isBlue) {
          ctx.fillStyle = `rgba(91, 142, 245, ${star.alpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#2c67ed';
        } else {
          ctx.fillStyle = `rgba(248, 250, 252, ${star.alpha})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      // Draw shooting star
      spawnShootingStar();
      if (shootingStar) {
        const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          tailX,
          tailY
        );
        gradient.addColorStop(0, `rgba(91, 142, 245, ${shootingStar.opacity})`);
        gradient.addColorStop(0.4, `rgba(44, 103, 237, ${shootingStar.opacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(44, 103, 237, 0)');

        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.018;

        if (
          shootingStar.opacity <= 0 ||
          shootingStar.x > width ||
          shootingStar.y > height
        ) {
          shootingStar = null;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03050a]">
      {/* Ambient Deep Space Nebulae */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-25 blur-[135px]"
        style={{
          background: 'radial-gradient(circle, #2c67ed 0%, rgba(29, 78, 216, 0.2) 55%, transparent 80%)',
        }}
      />
      <div
        className="absolute top-[42%] -left-48 w-[550px] h-[550px] rounded-full opacity-15 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #2c67ed 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[-10%] -right-40 w-[600px] h-[600px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, #2c67ed 45%, transparent 75%)',
        }}
      />

      {/* Interactive Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle Space Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2c67ed 1px, transparent 1px), linear-gradient(to bottom, #2c67ed 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
};

export default StarfieldBackground;
