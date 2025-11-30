import React from "react";

export const FaceIcon = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 4.5C9 4.5 11 4 12 4C13 4 15 4.5 15 4.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M12 4V20"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="3 3"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="3 3"
    />
    <rect
      x="5"
      y="5"
      width="14"
      height="14"
      rx="5"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const TemperamentIcon = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path d="M12 6V18" stroke="currentColor" strokeWidth="0.5" />
    <path d="M6 12H18" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export const EyeDesignIcon = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 13C3 13 6 7 12 7C18 7 21 13 21 13"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7 6C7 6 9.5 4 12 4C14.5 4 17 6 17 6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path d="M12 10V13" stroke="currentColor" strokeWidth="0.5" />
    <path d="M12 13L13.5 14.5" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export const HarmonizationIcon = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3V21" stroke="currentColor" strokeWidth="0.8" />
    <path
      d="M4 12H20"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="2 2"
    />
    <path
      d="M7 8C7 8 9 7 12 7C15 7 17 8 17 8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M7 16C7 16 9 17 12 17C15 17 17 16 17 16"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" />
  </svg>
);
