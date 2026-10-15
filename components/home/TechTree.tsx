"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ====================================================================
   OFFICIAL CORE TECHNOLOGIES ONLY
   - MUI, basic markup, and generic methodologies removed.
   - 100% authentic official full-color Devicon SVGs.
   - Perfectly balanced branch distribution across canopy.
   ==================================================================== */
export interface TechNode {
  name: string;
  role: string;
  color: string;
  icon: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  size: "sm" | "md" | "lg";
  delay: number;
}

export const techNodes: TechNode[] = [
  // --- CENTER PINNACLE & TRUNK CORE ---
  {
    name: "Next.js",
    role: "SSR & Full-Stack Web",
    color: "#FFFFFF",
    icon: "/icons/tech/nextjs.svg",
    x: 50,
    y: 5,
    size: "lg",
    delay: 0,
  },
  {
    name: ".NET",
    role: "Full-Stack Core (.NET 8)",
    color: "#512BD4",
    icon: "/icons/tech/dotnet.svg",
    x: 50,
    y: 22,
    size: "lg",
    delay: 0.15,
  },
  {
    name: "Vercel",
    role: "Edge Deployments & Hosting",
    color: "#FFFFFF",
    icon: "/icons/tech/vercel.svg?v=2",
    x: 50,
    y: 39,
    size: "sm",
    delay: 0.35,
  },

  // --- STRONG PRIMARY LIMBS ---
  {
    name: "C#",
    role: "Backend & Enterprise Architecture",
    color: "#A179DC",
    icon: "/icons/tech/csharp.svg",
    x: 37,
    y: 28,
    size: "lg",
    delay: 0.1,
  },
  {
    name: "React",
    role: "Frontend UI Architecture",
    color: "#61DAFB",
    icon: "/icons/tech/react.svg",
    x: 63,
    y: 28,
    size: "lg",
    delay: 0.1,
  },

  // --- UPPER CROWN ---
  {
    name: "TypeScript",
    role: "Strict Type Safety",
    color: "#3178C6",
    icon: "/icons/tech/typescript.svg",
    x: 27,
    y: 11,
    size: "md",
    delay: 0.2,
  },
  {
    name: "JavaScript",
    role: "Dynamic Web Systems",
    color: "#F7DF1E",
    icon: "/icons/tech/javascript.svg",
    x: 73,
    y: 11,
    size: "md",
    delay: 0.2,
  },
  {
    name: "Docker",
    role: "Containers & Environment Isolation",
    color: "#2496ED",
    icon: "/icons/tech/docker.svg",
    x: 38,
    y: 4,
    size: "md",
    delay: 0.25,
  },
  {
    name: "AWS",
    role: "Cloud Infrastructure (EC2, S3, RDS)",
    color: "#FF9900",
    icon: "/icons/tech/aws.svg",
    x: 62,
    y: 4,
    size: "md",
    delay: 0.25,
  },

  // --- MID CANOPY ---
  {
    name: "Node.js",
    role: "Server Runtime & Microservices",
    color: "#5FA04E",
    icon: "/icons/tech/nodejs.svg",
    x: 18,
    y: 23,
    size: "md",
    delay: 0.3,
  },
  {
    name: "Tailwind CSS",
    role: "Modern Responsive Styling",
    color: "#06B6D4",
    icon: "/icons/tech/tailwindcss.svg",
    x: 82,
    y: 23,
    size: "md",
    delay: 0.3,
  },
  {
    name: "Express",
    role: "High-Speed REST Endpoints",
    color: "#FFFFFF",
    icon: "/icons/tech/express.svg?v=2",
    x: 9,
    y: 35,
    size: "sm",
    delay: 0.4,
  },
  {
    name: "PostgreSQL",
    role: "Relational DB & Optimization",
    color: "#4169E1",
    icon: "/icons/tech/postgresql.svg",
    x: 91,
    y: 35,
    size: "md",
    delay: 0.4,
  },

  // --- LOWER CANOPY & ROOTS ---
  {
    name: "MongoDB",
    role: "Document & Schema-less Storage",
    color: "#47A248",
    icon: "/icons/tech/mongodb.svg",
    x: 13,
    y: 50,
    size: "sm",
    delay: 0.45,
  },
  {
    name: "Redis",
    role: "In-Memory Caching & Performance",
    color: "#DC382D",
    icon: "/icons/tech/redis.svg",
    x: 87,
    y: 50,
    size: "sm",
    delay: 0.45,
  },
  {
    name: "GitHub",
    role: "CI/CD Actions & Collaboration",
    color: "#FFFFFF",
    icon: "/icons/tech/github.svg?v=2",
    x: 7,
    y: 65,
    size: "sm",
    delay: 0.5,
  },
  {
    name: "Git",
    role: "Distributed Version Control",
    color: "#F05032",
    icon: "/icons/tech/git.svg",
    x: 93,
    y: 65,
    size: "sm",
    delay: 0.5,
  },
];

/* Sizing configurations */
const sizeConfig = {
  sm: { box: 42, icon: 22, text: "text-[10px]" },
  md: { box: 48, icon: 26, text: "text-[11px]" },
  lg: { box: 58, icon: 32, text: "text-xs font-bold" },
};

/* ====================================================================
   ORGANIC TREE SVG
   Natural flowing trunk and branches with neon tech energy pulses
   ==================================================================== */
function TreeSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 620"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Organic Trunk Gradient */}
        <linearGradient id="treeTrunkGrad" x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#1E2330" />
          <stop offset="30%" stopColor="#2A3042" />
          <stop offset="70%" stopColor="#232938" />
          <stop offset="100%" stopColor="#181C26" />
        </linearGradient>

        {/* Luminous Branch Energy Vein Gradient */}
        <linearGradient id="neonVeinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2A7BFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
        </linearGradient>

        {/* Subtle Ambient Canopy Aura */}
        <radialGradient id="canopyAura" cx="50%" cy="32%" r="48%">
          <stop offset="0%" stopColor="#2A7BFF" stopOpacity="0.16" />
          <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.09" />
          <stop offset="75%" stopColor="#22D3EE" stopOpacity="0.04" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>

        {/* Ground Floor Shadow */}
        <linearGradient id="groundGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor="#242834" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#2A7BFF" stopOpacity="0.35" />
          <stop offset="80%" stopColor="#242834" stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Canopy Ambient Atmosphere */}
      <circle cx="400" cy="220" r="320" fill="url(#canopyAura)" />

      {/* Ground horizon line where fallen icons land */}
      <line x1="60" y1="565" x2="740" y2="565" stroke="url(#groundGrad)" strokeWidth="2.5" strokeDasharray="6 6" />
      <ellipse cx="400" cy="565" rx="260" ry="10" fill="#2A7BFF" opacity="0.09" />

      {/* ROOT SPREAD */}
      <g stroke="url(#treeTrunkGrad)" strokeLinecap="round">
        <path d="M 400 560 Q 360 585 280 608" strokeWidth="13" />
        <path d="M 400 560 Q 440 585 520 608" strokeWidth="13" />
        <path d="M 385 565 Q 320 595 230 612" strokeWidth="6" opacity="0.7" />
        <path d="M 415 565 Q 480 595 570 612" strokeWidth="6" opacity="0.7" />
        <path d="M 400 565 L 400 615" strokeWidth="8" opacity="0.9" />
      </g>

      {/* NATURAL SCULPTED TRUNK */}
      <path
        d="M 375 565 C 375 450, 368 350, 385 250 C 390 220, 395 200, 400 180 C 405 200, 410 220, 415 250 C 432 350, 425 450, 425 565 Z"
        fill="url(#treeTrunkGrad)"
      />

      {/* INTERNAL ENERGY VEIN (Glowing pulse running through tree heart) */}
      <path
        d="M 400 560 Q 396 380 400 240"
        stroke="url(#neonVeinGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* MAIN BRANCHES */}
      <g fill="none" stroke="url(#treeTrunkGrad)" strokeLinecap="round">
        {/* Tier 1: Lower Heavy Branches */}
        {/* Lower Left */}
        <path d="M 385 330 C 330 325, 230 320, 150 355 C 115 370, 85 395, 65 425" strokeWidth="13" />
        <path d="M 180 335 C 145 375, 110 420, 75 455" strokeWidth="6" />

        {/* Lower Right */}
        <path d="M 415 330 C 470 325, 570 320, 650 355 C 685 370, 715 395, 735 425" strokeWidth="13" />
        <path d="M 620 335 C 655 375, 690 420, 725 455" strokeWidth="6" />

        {/* Tier 2: Mid Crown Branches */}
        {/* Mid Left */}
        <path d="M 388 260 C 320 250, 230 220, 160 225 C 120 230, 95 250, 70 280" strokeWidth="10" />
        <path d="M 260 235 C 210 205, 175 165, 135 155" strokeWidth="5.5" />
        <path d="M 195 225 C 165 190, 145 150, 125 120" strokeWidth="4" opacity="0.8" />

        {/* Mid Right */}
        <path d="M 412 260 C 480 250, 570 220, 640 225 C 680 230, 705 250, 730 280" strokeWidth="10" />
        <path d="M 540 235 C 590 205, 625 165, 665 155" strokeWidth="5.5" />
        <path d="M 605 225 C 635 190, 655 150, 675 120" strokeWidth="4" opacity="0.8" />

        {/* Tier 3: Upper Canopy & Top Crown */}
        {/* Upper Left Crown */}
        <path d="M 395 220 C 365 175, 325 130, 270 100 C 235 80, 205 70, 165 75" strokeWidth="7" />
        <path d="M 330 140 C 305 105, 275 75, 235 60" strokeWidth="4.5" />

        {/* Top Center Shoots */}
        <path d="M 400 200 C 395 150, 390 105, 375 60 C 370 45, 365 30, 355 15" strokeWidth="5.5" />
        <path d="M 400 200 C 405 150, 410 105, 425 60 C 430 45, 435 30, 445 15" strokeWidth="5.5" />
        <path d="M 400 160 L 400 45" strokeWidth="4" opacity="0.85" />

        {/* Upper Right Crown */}
        <path d="M 405 220 C 435 175, 475 130, 530 100 C 565 80, 595 70, 635 75" strokeWidth="7" />
        <path d="M 470 140 C 495 105, 525 75, 565 60" strokeWidth="4.5" />
      </g>

      {/* GLOWING ENERGY HIGHLIGHTS ALONG BRANCH ARCS */}
      <g stroke="url(#neonVeinGrad)" strokeWidth="1.8" strokeLinecap="round" opacity="0.5">
        <path d="M 388 260 C 320 250, 230 220, 160 225" />
        <path d="M 412 260 C 480 250, 570 220, 640 225" />
        <path d="M 395 220 C 365 175, 325 130, 270 100" />
        <path d="M 405 220 C 435 175, 475 130, 530 100" />
      </g>
    </svg>
  );
}

/* ====================================================================
   TECH TREE COMPONENT
   ==================================================================== */
export function TechTree({ shakeTrigger }: { shakeTrigger?: number }) {
  const treeRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [isShaking, setIsShaking] = useState(false);
  const [isRegrowing, setIsRegrowing] = useState(false);
  const isShakingRef = useRef(false);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  // Map of falling state for EVERY node
  const [fallingNodes, setFallingNodes] = useState<
    Map<number, { dist: number; rot: number; drift: number; delay: number }>
  >(new Map());

  // Drag-to-bend physics
  const [dragX, setDragX] = useState(0);
  const isDragging = useRef(false);
  const dragStart = useRef(0);

  /* Shake Tree: EVERY SINGLE ELEMENT falls down to the ground */
  const shakeTree = useCallback(() => {
    if (isShakingRef.current) return;
    isShakingRef.current = true;
    setIsShaking(true);
    setIsRegrowing(false);

    const fallMap = new Map<
      number,
      { dist: number; rot: number; drift: number; delay: number }
    >();

    // Animate EVERY single technology node to drop to the ground line (approx y = 90%)
    techNodes.forEach((node, idx) => {
      const distPercent = 90 - node.y;
      const distPx = Math.max(250, Math.round((distPercent / 100) * 550));
      const rot = (idx % 2 === 0 ? 1 : -1) * (45 + ((idx * 33) % 70));
      const drift = (idx % 2 === 0 ? 1 : -1) * (10 + (idx % 4) * 8);
      // Realistic detachment cascade: upper branches shake off slightly earlier
      const delay = (node.y / 100) * 0.22 + (idx % 3) * 0.03;

      fallMap.set(idx, { dist: distPx, rot, drift, delay });
    });

    setFallingNodes(fallMap);

    // After 2.6s, start the regrowth pulse
    setTimeout(() => {
      setIsRegrowing(true);
      // Clear falling state so they spring back onto branches
      setFallingNodes(new Map());

      // After regrowth spring finishes, clear shaking state completely
      setTimeout(() => {
        setIsShaking(false);
        setIsRegrowing(false);
        isShakingRef.current = false;
      }, 1000);
    }, 2600);
  }, []);

  // Trigger shake when button in Hero is clicked
  useEffect(() => {
    if (shakeTrigger && shakeTrigger > 0) {
      shakeTree();
    }
  }, [shakeTrigger, shakeTree]);

  // Pointer drag to bend the trunk
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (reduceMotion) return;
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a")) return;

      isDragging.current = true;
      dragStart.current = e.clientX;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    },
    [reduceMotion]
  );

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = (e.clientX - dragStart.current) * 0.07;
    setDragX(Math.max(-10, Math.min(10, delta)));
  }, []);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
    setDragX(0);
  }, []);

  // Drop a single node on click
  const handleNodeClick = useCallback(
    (e: React.MouseEvent, idx: number, node: TechNode) => {
      e.stopPropagation();
      if (fallingNodes.has(idx) || isShaking) return;

      const distPx = Math.max(250, Math.round(((90 - node.y) / 100) * 550));
      setFallingNodes((prev) =>
        new Map(prev).set(idx, { dist: distPx, rot: 75, drift: 12, delay: 0 })
      );

      // Regrow this single node after 2.5s
      setTimeout(() => {
        setFallingNodes((prev) => {
          const next = new Map(prev);
          next.delete(idx);
          return next;
        });
      }, 2500);
    },
    [fallingNodes, isShaking]
  );

  return (
    <div
      ref={treeRef}
      className="relative mx-auto select-none"
      style={{
        width: "100%",
        maxWidth: 720,
        aspectRatio: "800 / 600",
        cursor: isDragging.current ? "grabbing" : "grab",
        touchAction: "pan-y",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={shakeTree}
      role="img"
      aria-label="Interactive Technology Tree showing Sudhir's core .NET full stack technologies as official brand icons. Drag or shake to interact."
    >
      {/* Dynamic tree trunk & branches with sway + shake + drag bend */}
      <motion.div
        className="absolute inset-0"
        animate={
          isShaking
            ? {
                x: [0, -18, 16, -13, 11, -7, 4, -1, 0],
                rotate: [0, -3.6, 3.2, -2.4, 1.8, -1, 0.4, 0],
              }
            : {
                rotate: [0, 0.5, -0.5, 0],
              }
        }
        transition={
          isShaking
            ? { duration: 1.1, ease: "easeInOut" }
            : { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
        }
        style={{
          transformOrigin: "50% 100%",
          skewX: `${dragX}deg`,
        }}
      >
        <TreeSVG className="absolute inset-0 w-full h-full" />

        {/* ALL 17 OFFICIAL CORE TECHNOLOGIES */}
        {techNodes.map((node, i) => {
          const cfg = sizeConfig[node.size];
          const fallData = fallingNodes.get(i);
          const isFalling = Boolean(fallData);
          const isHovered = activeTooltip === i;

          return (
            <div
              key={`${node.name}-${i}`}
              className="absolute pointer-events-auto"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: isFalling ? 40 : isHovered ? 35 : node.size === "lg" ? 20 : 10,
              }}
              onMouseEnter={() => setActiveTooltip(i)}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={(e) => handleNodeClick(e, i, node)}
            >
              <motion.div
                className="flex flex-col items-center gap-1.5 cursor-pointer group"
                animate={
                  isFalling
                    ? {
                        y: [
                          0,
                          -24,
                          (fallData?.dist ?? 360) * 0.94,
                          (fallData?.dist ?? 360) * 0.88,
                          fallData?.dist ?? 360,
                        ],
                        x: [0, (fallData?.drift ?? 0) * 0.4, fallData?.drift ?? 0],
                        rotate: [
                          0,
                          -25,
                          fallData?.rot ?? 65,
                          (fallData?.rot ?? 65) + 15,
                          (fallData?.rot ?? 65) + 25,
                        ],
                        opacity: 1,
                        scale: [1, 1.14, 0.95, 0.9, 0.82],
                      }
                    : isRegrowing
                    ? {
                        y: 0,
                        x: 0,
                        rotate: 0,
                        opacity: 1,
                        scale: [0.3, 1.25, 1],
                      }
                    : {
                        y: [0, -3.5, 2.5, 0],
                        x: 0,
                        rotate: [0, 1.1, -0.9, 0],
                        opacity: 1,
                        scale: 1,
                      }
                }
                transition={
                  isFalling
                    ? {
                        duration: 2.1,
                        times: [0, 0.08, 0.65, 0.8, 1],
                        ease: "easeInOut",
                        delay: fallData?.delay ?? 0,
                      }
                    : isRegrowing
                    ? {
                        type: "spring",
                        damping: 12,
                        stiffness: 140,
                        delay: node.delay * 0.4,
                      }
                    : {
                        duration: 5.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: node.delay,
                      }
                }
              >
                {/* Sleek Floating Glass Pod */}
                <div
                  className="relative rounded-2xl backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                  style={{
                    width: cfg.box,
                    height: cfg.box,
                    background: "rgba(13, 16, 24, 0.86)",
                    border: `1.5px solid ${node.color}50`,
                    boxShadow: isHovered
                      ? `0 0 24px ${node.color}80, 0 8px 24px rgba(0,0,0,0.85)`
                      : `0 0 14px ${node.color}25, 0 4px 14px rgba(0,0,0,0.6)`,
                  }}
                >
                  {/* Authentic Official Brand SVG Vector */}
                  <div
                    className="relative flex items-center justify-center transition-transform duration-300 group-hover:rotate-6"
                    style={{ width: cfg.icon, height: cfg.icon }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={node.icon}
                      alt={node.name}
                      width={cfg.icon}
                      height={cfg.icon}
                      className="object-contain w-full h-full drop-shadow-md select-none pointer-events-none"
                    />
                  </div>

                  {/* Gentle Inner Glass Highlight */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Technology Name Label (Clear, crisp, perfectly readable) */}
                <span
                  className={`text-center font-display tracking-wide whitespace-nowrap text-ink/90 group-hover:text-white transition-all duration-200 ${cfg.text}`}
                  style={{
                    textShadow: `0 1px 3px rgba(0,0,0,0.9), 0 0 8px ${node.color}40`,
                  }}
                >
                  {node.name}
                </span>

                {/* Floating Interactive Tooltip */}
                {isHovered && !isFalling && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    className="absolute bottom-full mb-2 pointer-events-none z-50 whitespace-nowrap rounded-lg border border-line-bright bg-surface/95 px-2.5 py-1.5 shadow-2xl backdrop-blur-md"
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: node.color }}
                      />
                      <p className="text-xs font-bold text-white">{node.name}</p>
                    </div>
                    <p className="text-[10px] text-mute mt-0.5">{node.role}</p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Shake Status / Regrowth Feedback Toast */}
      {isShaking && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-accent/40 bg-surface/95 px-4 py-1.5 text-xs font-medium text-accent-cyan shadow-xl backdrop-blur-md flex items-center gap-2 pointer-events-none z-50"
        >
          <span className="inline-block animate-spin">🌱</span>
          <span>
            {isRegrowing
              ? "Regrowing the technology canopy..."
              : "All 17 technologies fell to the ground!"}
          </span>
        </motion.div>
      )}
    </div>
  );
}
