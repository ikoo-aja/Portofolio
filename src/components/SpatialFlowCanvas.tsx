"use client";

import { useEffect, useRef } from "react";

export default function SpatialFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let time = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      time += 0.008;
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render subtle architectural spatial coordinate grid
      const gridSize = 48;
      ctx.lineWidth = 1;

      // Draw subtle horizontal and vertical guideline ticks
      ctx.strokeStyle = "rgba(229, 231, 235, 0.6)";
      const startX = 0;
      const endX = width;
      const startY = 0;
      const endY = height;

      // Subtle architectural crosshairs at intersections
      const cols = Math.floor(width / gridSize);
      const rows = Math.floor(height / gridSize);

      ctx.fillStyle = "rgba(17, 24, 39, 0.06)";
      for (let i = 1; i < cols; i += 4) {
        for (let j = 1; j < rows; j += 4) {
          const x = i * gridSize;
          const y = j * gridSize;
          // Small technical crosshair
          ctx.fillRect(x - 2, y, 5, 1);
          ctx.fillRect(x, y - 2, 1, 5);
        }
      }

      // Draw subtle spatial dynamic harmonic wave lines
      const lineCount = 7;
      for (let i = 0; i < lineCount; i++) {
        const offsetRatio = i / lineCount;
        const baseY = height * 0.35 + (i - 3) * 36;
        const alpha = 0.04 + (1 - Math.abs(offsetRatio - 0.5) * 2) * 0.05;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(17, 24, 39, ${alpha})`;
        ctx.lineWidth = 1.2;

        const points = 40;
        const step = width / points;

        for (let p = 0; p <= points; p++) {
          const px = p * step;
          // Distance from mouse influences amplitude
          const distToMouse = Math.hypot(px - mouseX, baseY - mouseY);
          const mouseFactor = Math.max(0, 1 - distToMouse / 500);

          const wave1 = Math.sin(p * 0.2 + time + offsetRatio * 2) * 18;
          const wave2 = Math.cos(p * 0.15 - time * 0.7) * 12;
          const mouseWave = Math.sin(distToMouse * 0.02 - time * 2) * mouseFactor * 24;

          const py = baseY + wave1 + wave2 + mouseWave;

          if (p === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
