import React from "react";
import {
  Layers,
  Cpu,
  Database,
  Server,
  Cloud,
  Workflow,
  ShieldCheck,
  Smartphone,
  Gauge,
  Sliders,
  CheckCircle2,
  FileCode,
  Network,
  GitBranch,
  Terminal,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = "h-4 w-4", size = 16 }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // C#
  if (normalized.includes("c#") || normalized === "c sharp") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M115.4 30.7L66.7 2.6c-1.6-.9-3.7-.9-5.4 0L12.6 30.7c-1.7 1-2.7 2.7-2.7 4.7v56.2c0 2 1 3.7 2.7 4.7l48.7 28.1c1.7 1 3.7 1 5.4 0l48.7-28.1c1.7-1 2.7-2.7 2.7-4.7V35.4c0-2-1-3.7-2.7-4.7z" fill="#239120" />
        <path d="M115.4 30.7L66.7 2.6c-1.6-.9-3.7-.9-5.4 0L12.6 30.7c-1.7 1-2.7 2.7-2.7 4.7v56.2c0 2 1 3.7 2.7 4.7l48.7 28.1c1.7 1 3.7 1 5.4 0l48.7-28.1c1.7-1 2.7-2.7 2.7-4.7V35.4c0-2-1-3.7-2.7-4.7z" fill="#9B4F96" />
        <path d="M64 16.5L20 41.9v50.2L64 117.5l44-25.4V41.9L64 16.5z" fill="#5C2D91" />
        <path d="M63 34.5c-16.5 0-29.8 13.3-29.8 29.8s13.3 29.8 29.8 29.8c11.3 0 21.2-6.3 26.3-15.6l-11.2-5.7c-2.9 5.4-8.6 9-15.1 9-9.7 0-17.5-7.8-17.5-17.5s7.8-17.5 17.5-17.5c6.5 0 12.2 3.6 15.1 9l11.2-5.7c-5.1-9.3-15-15.6-26.3-15.6z" fill="#FFFFFF" />
        <path d="M96 52.5h-4.2l-.7-5h-3.6l.7 5h-4.3l-.7-5h-3.6l.7 5H77v4.1h3.8l-.8 6.2H76v4.1h4.4l-.7 5.2h3.6l.7-5.2h4.3l-.7 5.2h3.6l.7-5.2H96v-4.1h-4.3l.8-6.2H96v-4.1zm-8.8 10.3h-4.3l.8-6.2h4.3l-.8 6.2z" fill="#FFFFFF" />
      </svg>
    );
  }

  // .NET / ASP.NET
  if (normalized.includes(".net") || normalized.includes("asp.net")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="64" fill="#512BD4" />
        <path d="M22 84V44h11l19 28V44h9v40H50L31 56v28H22zm48-2v-8h8v8h-8zm16 2V52h-9v-8h20v40H86zm28-2v-8h8v8h-8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // React
  if (normalized.includes("react") && !normalized.includes("hook form")) {
    return (
      <svg className={className} width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes("typescript") || normalized === "ts") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M68.5 75.3c2 2.3 4.9 4 8.7 4 3.7 0 6.1-1.7 6.1-4.4 0-3-2.6-4.1-7.1-5.9-6.3-2.5-12.8-5.6-12.8-13.8 0-8.3 6.6-14.2 16.9-14.2 6.7 0 11.5 2 14.8 4.7l-4.1 6.5c-2.4-1.9-5.9-3.4-10.7-3.4-4.5 0-6.9 1.9-6.9 4.3 0 2.8 2.8 3.9 7.7 5.8 6.9 2.7 12.3 5.9 12.3 14 0 9.2-7.3 14.6-17.7 14.6-7.8 0-13.7-2.5-17.3-5.8l4.1-6.4zM32 41h30v7.6H49.2v46H39.8v-46H32V41z" fill="#FFFFFF" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes("javascript") || normalized === "js") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path d="M67 94.6c2.8 4.6 6.8 7.6 13.5 7.6 6.2 0 10.3-2.9 10.3-7.1 0-4.9-4-6.8-10.9-9.8-9.9-4.2-16.5-9.6-16.5-20.4 0-10.2 7.7-18 19.8-18 8.6 0 14.8 3.1 19.1 10.8l-8.6 5.5c-2.5-4.4-5.3-6.1-10.5-6.1-4.7 0-7.8 2.6-7.8 6 0 4.1 3.2 5.8 8.9 8.2 11.4 4.9 18.7 9.8 18.7 21.6 0 12.3-9.6 19-22.6 19-12.7 0-20.9-6.3-24.6-14.6l10.7-6.2zM27 94.7c2.2 3.6 5.1 6 10.4 6 5.3 0 8.7-2.1 8.7-10.3V47h12.5v43.4c0 14.5-8.5 20.8-21.2 20.8-11.4 0-18-5.8-21.4-12.8l11-6.7z" fill="#000000" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes("next.js") || normalized.includes("nextjs") || normalized === "next") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="64" fill="#000000" stroke="#333339" strokeWidth="2" />
        <path d="M96 90.5L46.6 28H37v72h10V43.8l43.2 54.7c1.9-1.2 3.8-2.6 5.8-4.1z" fill="#FFFFFF" />
        <rect x="81" y="28" width="10" height="42" fill="#FFFFFF" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node.js") || normalized.includes("nodejs") || normalized === "node") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M64 6L12 36v56l52 30 52-30V36L64 6z" fill="#339933"/>
        <path d="M64 128L12 98V36l52 30v62zm0 0l52-30V36L64 66v62z" fill="#66CC33" opacity="0.6"/>
        <text x="64" y="78" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="28">N</text>
      </svg>
    );
  }

  // Express / Express.js
  if (normalized.includes("express")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#18181f" stroke="#33333e" strokeWidth="1" />
        <path
          d="M19 15.5a1.1 1.1 0 01-1.4-.5l-2.6-3.6-.4-.5-3 4.1a1.1 1.1 0 01-1.3.5l3.9-5.2-3.6-4.7a1.2 1.2 0 011.4.5l2.7 3.6 2.7-3.6a1.1 1.1 0 011.3-.5l-3.6 4.8 3.6 4.8zM4 10.2l.3-1.6c.9-3.1 4.4-4.4 6.8-2.5 1.4 1.1 1.8 2.7 1.7 4.5H4.8c-.1 3.2 2.2 5.1 5.1 4.1.7-.2 1.3-.7 1.9-2.2.2-.5.4-.6.9-.4a4 4 0 01-1.9 3 4.7 4.7 0 01-5.5-.7 5 5 0 01-1.2-2.9c0-.2-.1-.3-.1-.5A66 66 0 014 10.2zm.9-.2h7.2c0-2.3-1.5-4-3.4-4-2.2 0-3.7 1.6-3.8 4z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // PostgreSQL (Official Slonik Elephant Symbol)
  if (normalized.includes("postgresql") || normalized.includes("postgres")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 432.071 445.383" fill="none">
        <g style={{ fillRule: "nonzero", clipRule: "nonzero" }}>
          <path
            d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z"
            fill="#336791"
          />
          <path
            d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329"
            stroke="#ffffff"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762"
            stroke="#ffffff"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z"
            stroke="#ffffff"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="178" cy="144" r="9" fill="#ffffff" />
          <circle cx="328" cy="140" r="9" fill="#ffffff" />
        </g>
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongodb") || normalized.includes("mongo")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M63.8 6.5C62.4 7.9 44 26.3 44 57.3c0 23.8 13.9 39.4 19.8 45.4v18.8c0 .5.6.8.9.4l4.5-5.5c11.6-14.3 14.8-31.2 14.8-59.1 0-31-18.9-49.3-20.2-50.8z" fill="#47A248" />
        <path d="M63.8 6.5v96.2c0 .5-.4 1-.9.8-5.9-6-19.8-21.6-19.8-45.4 0-31 18.4-49.4 19.8-50.8.3-.3.9-.1.9.8z" fill="#499D4A" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M120 58.7c-2.4-1.8-7.9-2.5-12.3-.9-.9-4.8-4-8.8-8.8-10.7l-2.4-1-.7 2.5c-.7 2.4-.6 5 .2 7.3-3.6 2.1-9.7 3.5-14.7 3.7H3.4c-1.3 5.4-.5 13.9 2.5 21.3C11.5 95 24 105 45.3 105c36.2 0 61.2-19.7 67.8-50.6 2.4.2 4.9 0 7.2-.8 2.8-1 4.5-2.6 4.7-2.8l-5-2.1zM58.3 35.8h11.2V47H58.3V35.8zm-14.9 0h11.2V47H43.4V35.8zm-14.9 0h11.2V47H28.5V35.8zm29.8 14.9h11.2v11.2H58.3V50.7zm-14.9 0h11.2v11.2H43.4V50.7zm-14.9 0h11.2v11.2H28.5V50.7zm-14.9 0h11.2v11.2H13.6V50.7zm44.7-29.8h11.2v11.2H58.3V20.9zm-14.9 0h11.2v11.2H43.4V20.9z" fill="#2496ED" />
      </svg>
    );
  }

  // AWS
  if (normalized.includes("aws") || normalized.includes("s3") || normalized.includes("fargate")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M38.8 61.6c0-6 4.6-9.8 12.3-9.8 4.2 0 7.8 1.1 9.8 2.2v-3.7c0-6.1-3.6-9.1-10.3-9.1-4.2 0-8.2 1.3-10.9 3.2l-2.3-5.2c3.7-2.4 9.1-4 14.7-4 10.9 0 16.9 5.6 16.9 16.5v22.7h-7.8v-3.7c-2.3 2.5-6.2 4.4-11.2 4.4-7.4 0-11.2-4.9-11.2-13.5zm22.1 2.3v-2.2c-1.8-.9-4.7-1.7-8-1.7-4.7 0-7.3 2.1-7.3 5.9 0 3.7 2.4 5.9 6.8 5.9 4.8 0 8.5-3.3 8.5-7.9zM72 73.6l10-37.4h8.3l6.5 25.5 6.3-25.5h7.7L99.8 73.6H92l-6.6-25.2-6.4 25.2H72z" fill="#FFFFFF" />
        <path d="M26.2 86.8c24.6 18.2 59.9 17.5 83.2 2.7 2.1-1.3 3.9.7 2.3 2.3-14.4 14.8-48.4 21.8-74.8 7.3-2.7-1.5-2.2-11.4-10.7-12.3z" fill="#FF9900" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M64 32c-17.1 0-27.7 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.3 4.7 12.2 8.7C72.8 63 80.7 71 96 71c17.1 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.3-4.7-12.2-8.7C87.2 40 79.3 32 64 32zM32 57c-17.1 0-27.7 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.3 4.7 12.2 8.7C40.8 88 48.7 96 64 96c17.1 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.3-4.7-12.2-8.7C67.2 65 59.3 57 32 57z" fill="#06B6D4" />
      </svg>
    );
  }

  // Redux
  if (normalized.includes("redux")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M78.6 42.4c6.3 3.4 9.8 8.7 9.8 14.8 0 4.3-1.8 8.2-5.1 11.3 4.8.8 8.8 2.9 11.6 6.1 4.2 4.8 4.7 11.6 1.4 18.2-4.1 8-13.8 13.8-25.3 15-4.4.4-8.6 0-12.2-1.3-6.3-2.3-10.9-6.7-12.7-12.2-1.4-4.2-1.1-8.5.8-12.4-4.4-.9-8-3.1-10.3-6.3-3.6-5-3.6-11.7.1-18 4.4-7.6 14.1-12.9 25.1-13.7 4.1-.3 8 .1 11.4 1.2 2-.7 4.4-.9 6.5-.7zm-30.8 44c1.2 3.6 4.5 6.4 8.8 7.9 2.5.9 5.4 1.2 8.4.9 8.2-.8 15.1-5 18-10.8 2.2-4.4 1.8-8.8-1.1-11.8-2.6-2.7-6.9-4.2-12-4.1-2.2 0-4.3.4-6.4 1-1.2.4-2.4.8-3.5 1.5-1.9 1.1-3.6 2.6-5.1 4.5-5 5.5-8.5 8.9-7.1 10.9z" fill="#764ABC" />
      </svg>
    );
  }

  // Material UI
  if (normalized.includes("material ui") || normalized.includes("mui")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M64 32l32 18.5V87L64 105.5 32 87V50.5L64 32z" fill="#007FFF" />
        <path d="M64 32v73.5L32 87V50.5L64 32z" fill="#0059B2" />
        <path d="M64 68.8l16-9.2v18.5L64 87.3V68.8z" fill="#FFFFFF" opacity="0.9" />
      </svg>
    );
  }

  // Git
  if (normalized === "git") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M122.7 57.6L70.4 5.3c-3.6-3.6-9.4-3.6-13 0l-12 12 15.2 15.2c3.8-1.3 8.3-.4 11.3 2.6 3 3 3.9 7.5 2.6 11.3l14.6 14.6c3.8-1.3 8.3-.4 11.3 2.6 4.3 4.3 4.3 11.2 0 15.5-4.3 4.3-11.2 4.3-15.5 0-3.3-3.3-4.1-8.2-2.3-12.2L73.6 52.4v33c.9.5 1.8 1.2 2.6 2 4.3 4.3 4.3 11.2 0 15.5-4.3 4.3-11.2 4.3-15.5 0-4.3-4.3-4.3-11.2 0-15.5.9-.9 2-1.6 3.1-2.1v-34c-1.1-.5-2.2-1.2-3.1-2.1-3.3-3.3-4.1-8.1-2.4-12.1L43.2 22.1 5.3 60c-3.6 3.6-3.6 9.4 0 13l52.3 52.3c3.6 3.6 9.4 3.6 13 0l52.1-52.1c3.6-3.6 3.6-9.5 0-13.1z" fill="#F05032" />
      </svg>
    );
  }

  // GitHub / GitLab
  if (normalized.includes("github") || normalized.includes("gitlab")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M64 5.3C28.7 5.3 0 34 0 69.4c0 28.3 18.4 52.3 43.9 60.8 3.2.6 4.4-1.4 4.4-3.1v-10.8c-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3 1.1-4.1 2.2-7 4-8.6-14.2-1.6-29.2-7.1-29.2-31.6 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-17 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.2 16.1-2.2 5.5 0 11 .7 16.1 2.2 12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.9 1.3 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.6-15 30-29.3 31.6 2.3 2 4.4 5.9 4.4 11.9v17.7c0 1.7 1.2 3.7 4.4 3.1 25.5-8.5 43.8-32.5 43.8-60.8 0-35.4-28.7-64.1-64-64.1z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Swagger / OpenAPI
  if (normalized.includes("swagger") || normalized.includes("openapi")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#85EA2D" />
        <path d="M42 45h44v14H42V45zm0 24h44v14H42V69z" fill="#000000" />
      </svg>
    );
  }

  // Framer Motion
  if (normalized.includes("framer motion") || normalized.includes("framer")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M24 16h80l-40 48H24V16zm0 48h40l40 48H64L24 64zm40 0v48l-40-48h40z" fill="#F005BC" />
      </svg>
    );
  }

  // Vercel
  if (normalized.includes("vercel")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path d="M64 16L120 112H8L64 16z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Dapper / EF Core / ORM
  if (normalized.includes("dapper") || normalized.includes("entity framework")) {
    return <Database className={`${className} text-emerald-400`} size={size} />;
  }

  // SQL / Data access
  if (normalized.includes("sql") || normalized.includes("database") || normalized.includes("data access")) {
    return <Database className={`${className} text-cyan-400`} size={size} />;
  }

  // REST API / API design
  if (normalized.includes("api") || normalized.includes("rest")) {
    return <Network className={`${className} text-teal-400`} size={size} />;
  }

  // Architecture / SOLID
  if (normalized.includes("solid") || normalized.includes("clean architecture") || normalized.includes("architecture")) {
    return <ShieldCheck className={`${className} text-indigo-400`} size={size} />;
  }

  // Modular design
  if (normalized.includes("modular")) {
    return <Layers className={`${className} text-purple-400`} size={size} />;
  }

  // CI/CD / Workflows / GitHub Actions
  if (normalized.includes("ci/cd") || normalized.includes("action") || normalized.includes("workflow")) {
    return <Workflow className={`${className} text-sky-400`} size={size} />;
  }

  // Responsive UI
  if (normalized.includes("responsive")) {
    return <Smartphone className={`${className} text-emerald-400`} size={size} />;
  }

  // Forms / Validation
  if (normalized.includes("hook form") || normalized.includes("yup")) {
    return <CheckCircle2 className={`${className} text-pink-400`} size={size} />;
  }

  // Server / cPanel / Deployment
  if (normalized.includes("cpanel") || normalized.includes("deployment")) {
    return <Server className={`${className} text-amber-400`} size={size} />;
  }

  // Performance / Indexing / Pooling
  if (normalized.includes("index") || normalized.includes("pool")) {
    return <Gauge className={`${className} text-yellow-400`} size={size} />;
  }

  // Fallback
  return <Cpu className={`${className} text-emerald-400/80`} size={size} />;
}

export function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-ink/90 backdrop-blur transition-all duration-200 hover:border-accent/50 hover:bg-surface-hover hover:text-white hover:shadow-sm hover:shadow-accent/10">
      <TechIcon name={name} size={14} className="h-3.5 w-3.5 flex-shrink-0" />
      <span>{name}</span>
    </span>
  );
}
