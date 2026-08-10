import React from 'react';

export const GithubIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetcodeIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .349 1.017 5.938 5.938 0 0 0 .581.999 6.228 6.228 0 0 0 .783.896l3.415 3.149a5.952 5.952 0 0 0 1.258.857 5.795 5.795 0 0 0 1.954.558 5.96 5.96 0 0 0 2.221-.219 5.86 5.86 0 0 0 1.765-.929l4.582-4.148a1.37 1.37 0 0 0 .349-1.391 1.385 1.385 0 0 0-.97-.932 1.394 1.394 0 0 0-1.373.359L11.5 19.656a3.25 3.25 0 0 1-1.026.549 3.242 3.242 0 0 1-1.258.118 3.228 3.228 0 0 1-1.096-.328 3.298 3.298 0 0 1-.72-.486L4.013 16.38a3.468 3.468 0 0 1-.448-.521 3.298 3.298 0 0 1-.328-.599 3.22 3.22 0 0 1-.035-1.364 3.03 3.03 0 0 1 .1-.301 3.056 3.056 0 0 1 .712-1.242l3.864-4.142 5.093-5.46a1.384 1.384 0 0 0 .034-1.921A1.37 1.37 0 0 0 13.483 0z" />
    <path d="M21.578 12.385h-10.7a1.375 1.375 0 0 0 0 2.75h10.7a1.375 1.375 0 1 0 0-2.75z" />
  </svg>
);

export const TwitterIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
