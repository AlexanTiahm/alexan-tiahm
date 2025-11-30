import React from "react";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  label?: string; // accessible label
};

const sizeMap = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-16 h-16",
};

export default function Spinner({ size = "md", label = "Loading" }: SpinnerProps) {
  const dims = sizeMap[size] ?? sizeMap.md;

  return (
    <div role="status" aria-live="polite" aria-label={label} className="flex items-center justify-center">
      {/* SVG spinner */}
      <svg
        className={`${dims} animate-spin`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      {/* Visible text for screen readers (kept visually hidden) */}
      <span className="sr-only">{label}</span>
    </div>
  );
}
