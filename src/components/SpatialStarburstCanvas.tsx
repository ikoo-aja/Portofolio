"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SpatialStarburstCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    camera.position.x = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const material = new THREE.LineBasicMaterial({
      color: 0xeadbb8,
      transparent: true,
      opacity: 0.30,
      blending: THREE.AdditiveBlending,
    });

    const geometry = new THREE.BufferGeometry();
    const points: number[] = [];
    // Dikurangi dari 300 agar bidang tidak terlalu rapat dan tidak menyilaukan
    const lineCount = 130;
    const radius = 40;

    const originX = 25;
    const originY = 0;
    const originZ = -10;

    interface Vector3D {
      x: number;
      y: number;
      z: number;
    }
    const dirs: Vector3D[] = [];
    const basePhases = new Float32Array(lineCount);

    for (let i = 0; i < lineCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / lineCount);
      const theta = Math.sqrt(lineCount * Math.PI) * phi;

      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);

      dirs.push({ x, y, z });
      basePhases[i] = Math.random() * Math.PI * 2;

      points.push(originX, originY, originZ);
      points.push(originX + x * radius, originY + y * radius, originZ + z * radius);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3)
    );
    const lines = new THREE.LineSegments(geometry, material);
    lines.rotation.y = -Math.PI / 4;
    scene.add(lines);

    let animationId: number;
    let time = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.005;

      const positionAttr = lines.geometry.attributes.position;
      const positions = positionAttr.array as Float32Array;

      for (let i = 0; i < lineCount; i++) {
        const pIdx = i * 6 + 3;
        // Rentang denyut diperkecil (0.3-1.0 -> 0.75-1.0) supaya gerakannya halus
        const pulse = 0.75 + 0.25 * Math.abs(Math.sin(time + basePhases[i]));
        const currentRadius = radius * pulse;

        positions[pIdx] = originX + dirs[i].x * currentRadius;
        positions[pIdx + 1] = originY + dirs[i].y * currentRadius;
        positions[pIdx + 2] = originZ + dirs[i].z * currentRadius;
      }
      positionAttr.needsUpdate = true;

      lines.rotation.z = time * 0.05;
      lines.rotation.x = Math.sin(time * 0.5) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        // "screen" membuat garis menembus teks yang ada di atasnya. Dikurangi
        // agar latar tetap terasa, tapi tidak lagi mengganggu keterbacaan.
        mixBlendMode: "screen",
        opacity: 0.45,
        // Perlahan memudar ke bawah: area teks di bagian atas tetap tenang.
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 100%)",
      }}
    />
  );
}
