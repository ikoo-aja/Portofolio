import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// AuthKit / WorkOS Signature Faceted Prism Emblem
export function AuthKitEmblem({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2.5L20.5 7.4V16.6L12 21.5L3.5 16.6V7.4L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 2.5V12M12 12L20.5 16.6M12 12L3.5 16.6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.8" />
    </svg>
  );
}

// Next.js Official Monochrome SVG Mark
export function NextjsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={className}>
      <mask
        id="mask0_nextjs"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_nextjs)">
        <circle cx="90" cy="90" r="90" fill="currentColor" fillOpacity="0.1" />
        <path
          d="M149.508 157.086L61.8797 45H45V135H58.625V62.4844L138.891 165.703C142.633 163.078 146.195 160.195 149.508 157.086Z"
          fill="currentColor"
        />
        <path d="M121 45H134.625V135H121V45Z" fill="currentColor" />
      </g>
    </svg>
  );
}

// React Atom SVG Mark
export function ReactIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// TypeScript SVG Mark
export function TypeScriptIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 9.5H12M9 9.5V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 15.5C14.5 16.5 15.5 17 17 17C18.5 17 19.5 16 19.5 14.8C19.5 13.5 18.5 13 16.5 12.5C14.5 12 14.5 11 14.5 10C14.5 9 15.5 8 17 8C18.2 8 19 8.6 19.5 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Tailwind CSS Wave SVG Mark
export function TailwindIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12.5 7.5C10.5 4.5 7.5 5 6 6.5C3.5 9 3 12 5 12.5C7 13 8 11.5 9.5 11.5C11 11.5 12 12.5 14 12C15.5 11.5 16 10 15 9C14 8 13.5 9 12.5 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 12.5C16.5 9.5 13.5 10 12 11.5C9.5 14 9 17 11 17.5C13 18 14 16.5 15.5 16.5C17 16.5 18 17.5 20 17C21.5 16.5 22 15 21 14C20 13 19.5 14 18.5 12.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Laravel Geometric Mark
export function LaravelIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 3V12M12 12L20 7.5M12 12L4 7.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V21M12 12L4 16.5M12 12L20 16.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

// C# / .NET Hex Mark
export function CSharpIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5L20 7V17L12 21.5L4 17V7L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 9C9 9.5 8 10.5 8 12C8 13.5 9 14.5 10 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 10V14M16 10V14M13 11H17M13 13H17"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

// PostgreSQL Elephant Silhouette Outline
export function PostgresIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="13" rx="7" ry="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7C14.5 7 16 5 16 4C14 4 12 5.5 12 7Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M7 11C7 9 9 7 12 7C15 7 17 9 17 11"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M9 16C9 18 10 19 12 19C14 19 15 18 15 16"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="10" cy="12" r="0.75" fill="currentColor" />
      <circle cx="14" cy="12" r="0.75" fill="currentColor" />
    </svg>
  );
}

// SQL Server / Database Cylinder Stack
export function SqlServerIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 6V18M15 6V18"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

// MySQL Dolphin Outline
export function MySQLIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 16C6 14 7 10 9 7C11 4 14 4 16 5C18 6 20 9 20 12C20 16 16 19 12 19C8 19 5 18 4 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 7C10 9 11 11 13 12C15 13 18 12 19 11"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="15.5" cy="8.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

// Linux Terminal Shell Mark
export function LinuxIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 9L10 12L7 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Web Security / OWASP Shield Lock
export function SecurityShieldIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3L4 7V13C4 17.5 7.5 21 12 22C16.5 21 20 17.5 20 13V7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M12 14V16"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Google "G" Clean Mark (For AuthKit provider button)
export function GoogleIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.35 11.1H12v2.98h5.36c-.23 1.25-.94 2.31-2 3.01l3.23 2.51c1.89-1.74 2.98-4.31 2.98-7.5 0-.67-.06-1.33-.22-2z" />
      <path d="M12 21c2.7 0 4.96-.9 6.61-2.43l-3.23-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.81-1.76-5.6-4.12L3.06 15.5C4.74 18.84 8.1 21 12 21z" />
      <path d="M6.4 12.9c-.2-.6-.32-1.24-.32-1.9s.12-1.3.32-1.9L3.06 6.5C2.38 7.86 2 9.38 2 11s.38 3.14 1.06 4.5l3.34-2.6z" />
      <path d="M12 5.98c1.47 0 2.79.51 3.82 1.5l2.87-2.87C16.95 3.03 14.69 2 12 2 8.1 2 4.74 4.16 3.06 7.5l3.34 2.6c.79-2.36 3-4.12 5.6-4.12z" />
    </svg>
  );
}

// Microsoft 4-Tile Clean Mark (For AuthKit provider button)
export function MicrosoftIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="3" y="3" width="8.5" height="8.5" rx="1" />
      <rect x="12.5" y="3" width="8.5" height="8.5" rx="1" />
      <rect x="3" y="12.5" width="8.5" height="8.5" rx="1" />
      <rect x="12.5" y="12.5" width="8.5" height="8.5" rx="1" />
    </svg>
  );
}
