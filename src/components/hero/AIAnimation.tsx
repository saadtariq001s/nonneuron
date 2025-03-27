"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AIAnimationProps {
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  particleCount?: number;
  speed?: number;
}

export default function AIAnimation({
  className = "",
  color1 = "#10b981", // emerald green
  color2 = "#f59e0b", // amber/gold
  color3 = "#3b82f6", // blue
  particleCount = 100,
  speed = 1.2,
}: AIAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create flowing lines
    const lines: FlowLine[] = [];
    const colors = [color1, color2, color3];

    for (let i = 0; i < 15; i++) {
      lines.push({
        points: [],
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 2 + 1,
        speed: (Math.random() * 0.5 + 0.5) * speed,
        amplitude: Math.random() * 50 + 30,
        frequency: Math.random() * 0.01 + 0.005,
        phase: Math.random() * Math.PI * 2,
        length: Math.floor(Math.random() * 100) + 50,
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        direction: Math.random() > 0.5 ? 1 : -1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Create floating elements
    const elements: FloatingElement[] = [];
    const shapes = ["circle", "square", "triangle", "diamond"];

    for (let i = 0; i < 20; i++) {
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.001 + 0.0005,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    // Create subtle gradient background
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height,
    );

    // Convert any color format to rgba for transparency
    const toRgba = (color: string, alpha: number) => {
      // For CSS variables or any non-hex format, use fallback colors based on the input
      if (color.includes("var(")) {
        // Map common color variables to their fallback hex values
        if (color.includes("--primary")) {
          return `rgba(16, 185, 129, ${alpha})`; // Emerald green fallback
        } else if (color.includes("--accent")) {
          return `rgba(245, 158, 11, ${alpha})`; // Amber/gold fallback
        } else if (color.includes("--secondary")) {
          return `rgba(59, 130, 246, ${alpha})`; // Blue fallback
        } else {
          return `rgba(16, 185, 129, ${alpha})`; // Default emerald green fallback
        }
      }

      // Handle hex colors
      if (color.startsWith("#")) {
        // Handle shorthand hex
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const fullHex = color.replace(
          shorthandRegex,
          (m, r, g, b) => r + r + g + g + b + b,
        );

        // Extract RGB values
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
          fullHex,
        );
        if (!result) return `rgba(0, 0, 0, ${alpha})`;

        const r = parseInt(result[1], 16);
        const g = parseInt(result[2], 16);
        const b = parseInt(result[3], 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }

      // For other formats, return a default color
      return `rgba(16, 185, 129, ${alpha})`; // Emerald green fallback
    };

    // Use rgba format with 0.05 opacity
    gradient.addColorStop(0, toRgba(color1, 0.05)); // Very transparent
    gradient.addColorStop(0.5, toRgba(color2, 0.05));
    gradient.addColorStop(1, toRgba(color3, 0.05));

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle gradient background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flowing lines
      for (const line of lines) {
        // Update line points
        line.points = [];
        const length = line.length;

        for (let i = 0; i < length; i++) {
          const progress = i / length;
          const x = line.startX + progress * canvas.width * line.direction;
          const baseY = line.startY;
          const waveY =
            Math.sin(line.phase + time * line.speed + progress * 10) *
            line.amplitude;

          line.points.push({
            x: x % canvas.width,
            y: baseY + waveY,
          });
        }

        // Draw line
        if (line.points.length > 1) {
          ctx.beginPath();
          ctx.moveTo(line.points[0].x, line.points[0].y);

          for (let i = 1; i < line.points.length - 2; i++) {
            const xc = (line.points[i].x + line.points[i + 1].x) / 2;
            const yc = (line.points[i].y + line.points[i + 1].y) / 2;
            ctx.quadraticCurveTo(line.points[i].x, line.points[i].y, xc, yc);
          }

          // For the last two points
          if (line.points.length > 2) {
            const lastIndex = line.points.length - 1;
            ctx.quadraticCurveTo(
              line.points[lastIndex - 1].x,
              line.points[lastIndex - 1].y,
              line.points[lastIndex].x,
              line.points[lastIndex].y,
            );
          }

          ctx.strokeStyle = toRgba(line.color, line.opacity);
          ctx.lineWidth = line.width;
          ctx.stroke();
        }

        // Update phase for movement
        line.phase += line.speed * 0.05;

        // Reset line if it's gone off screen
        if (
          (line.direction > 0 && line.startX > canvas.width) ||
          (line.direction < 0 && line.startX < -line.length * 10)
        ) {
          line.startX =
            line.direction > 0
              ? -line.length * 10
              : canvas.width + line.length * 10;
          line.startY = Math.random() * canvas.height;
        } else {
          line.startX += line.speed * line.direction;
        }
      }

      // Draw floating elements
      for (const element of elements) {
        ctx.save();

        // Apply floating motion
        const floatY = Math.sin(time + element.floatOffset) * 5;

        // Position and rotate
        ctx.translate(element.x, element.y + floatY);
        ctx.rotate(element.rotation);

        // Set style
        ctx.fillStyle = toRgba(element.color, element.opacity);
        ctx.strokeStyle = toRgba(element.color, element.opacity);
        ctx.lineWidth = 1;

        // Draw shape
        switch (element.shape) {
          case "circle":
            ctx.beginPath();
            ctx.arc(0, 0, element.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case "square":
            ctx.fillRect(
              -element.size / 2,
              -element.size / 2,
              element.size,
              element.size,
            );
            break;
          case "triangle":
            ctx.beginPath();
            ctx.moveTo(0, -element.size / 2);
            ctx.lineTo(element.size / 2, element.size / 2);
            ctx.lineTo(-element.size / 2, element.size / 2);
            ctx.closePath();
            ctx.fill();
            break;
          case "diamond":
            ctx.beginPath();
            ctx.moveTo(0, -element.size / 2);
            ctx.lineTo(element.size / 2, 0);
            ctx.lineTo(0, element.size / 2);
            ctx.lineTo(-element.size / 2, 0);
            ctx.closePath();
            ctx.fill();
            break;
        }

        ctx.restore();

        // Update rotation
        element.rotation += element.rotationSpeed;

        // Wrap around screen if needed
        element.x += element.floatSpeed * Math.cos(time * 0.5);
        if (element.x > canvas.width + element.size) element.x = -element.size;
        if (element.x < -element.size) element.x = canvas.width + element.size;

        if (element.y > canvas.height + element.size) element.y = -element.size;
        if (element.y < -element.size) element.y = canvas.height + element.size;
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [color1, color2, color3, particleCount, speed]);

  return (
    <div className={cn("relative w-full h-full bg-black/90", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}

interface Point {
  x: number;
  y: number;
}

interface FlowLine {
  points: Point[];
  color: string;
  width: number;
  speed: number;
  amplitude: number;
  frequency: number;
  phase: number;
  length: number;
  startX: number;
  startY: number;
  direction: number;
  opacity: number;
}

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  color: string;
  shape: string;
  rotation: number;
  rotationSpeed: number;
  floatOffset: number;
  floatSpeed: number;
  opacity: number;
}
