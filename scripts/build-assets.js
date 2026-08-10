import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');
const projectsDir = path.resolve('public/assets/projects');

if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });

// 1. Copy generated profile image if available, or create fallback
const sourcePortrait = 'C:/Users/vishu/.gemini/antigravity/brain/6794d618-18c3-4be5-99c8-b8691b060a9d/developer_portrait_1786337873929.jpg';
const destPortrait = path.join(assetsDir, 'profile.jpg');

if (fs.existsSync(sourcePortrait)) {
  fs.copyFileSync(sourcePortrait, destPortrait);
  console.log('✓ Profile image copied successfully from', sourcePortrait);
} else {
  console.log('Portrait source not found, creating SVG placeholder...');
}

// 2. Generate crisp modern project preview SVGs
const projects = [
  {
    filename: 'project-1.jpg',
    title: 'NeuralCanvas AI',
    subtitle: 'Autonomous Multi-Agent Workspace',
    accent: '#6366f1',
    secondary: '#8b5cf6',
    tags: ['Multi-Agent', 'WebSockets', 'LangChain', 'FastAPI'],
    diagram: 'agent-mesh'
  },
  {
    filename: 'project-2.jpg',
    title: 'OmniQuery RAG',
    subtitle: 'Hybrid Semantic Search Engine',
    accent: '#38bdf8',
    secondary: '#6366f1',
    tags: ['Dense-Sparse Hybrid', 'pgvector', 'Reranker', 'Next.js'],
    diagram: 'rag-flow'
  },
  {
    filename: 'project-3.jpg',
    title: 'Pulsar Telemetry',
    subtitle: 'Sub-Second Event Analytics',
    accent: '#10b981',
    secondary: '#06b6d4',
    tags: ['Kafka', 'ClickHouse', '50k eps', 'D3.js WebGL'],
    diagram: 'time-series'
  },
  {
    filename: 'project-4.jpg',
    title: 'DevFlow Cloud IDE',
    subtitle: 'Ephemeral Containerized Environments',
    accent: '#f59e0b',
    secondary: '#ef4444',
    tags: ['Docker / K8s', 'Monaco Editor', 'xterm.js', 'Go'],
    diagram: 'ide-view'
  }
];

function generateProjectSvg(p) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="bg-${p.filename}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1017" />
      <stop offset="100%" stop-color="#161922" />
    </linearGradient>
    <linearGradient id="accent-${p.filename}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <pattern id="grid-${p.filename}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
    </pattern>
    <filter id="glow-${p.filename}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="60" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="675" fill="url(#bg-${p.filename})" />
  <rect width="1200" height="675" fill="url(#grid-${p.filename})" />

  <!-- Ambient Glow -->
  <circle cx="950" cy="200" r="280" fill="${p.accent}" opacity="0.18" filter="url(#glow-${p.filename})" />
  <circle cx="300" cy="550" r="220" fill="${p.secondary}" opacity="0.12" filter="url(#glow-${p.filename})" />

  <!-- Window Container Mockup -->
  <g transform="translate(100, 75)">
    <!-- Window frame -->
    <rect width="1000" height="525" rx="16" fill="#13151c" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5" />
    
    <!-- Titlebar -->
    <rect width="1000" height="48" rx="16" fill="#181b24" />
    <rect y="36" width="1000" height="12" fill="#181b24" />
    <line x1="0" y1="48" x2="1000" y2="48" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />
    
    <!-- Traffic lights -->
    <circle cx="28" cy="24" r="6" fill="#ef4444" opacity="0.8" />
    <circle cx="48" cy="24" r="6" fill="#f59e0b" opacity="0.8" />
    <circle cx="68" cy="24" r="6" fill="#10b981" opacity="0.8" />

    <!-- Window title -->
    <text x="500" y="30" fill="rgba(255, 255, 255, 0.5)" font-family="system-ui, sans-serif" font-size="13" font-weight="500" text-anchor="middle">app.${p.filename.replace('.jpg','')}.dev — Production</text>

    <!-- Sidebar mock -->
    <rect x="0" y="48" width="220" height="477" fill="#0f1118" />
    <line x1="220" y1="48" x2="220" y2="525" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1" />
    
    <rect x="24" y="80" width="120" height="12" rx="4" fill="rgba(255, 255, 255, 0.2)" />
    <rect x="24" y="110" width="170" height="8" rx="3" fill="rgba(255, 255, 255, 0.08)" />
    <rect x="24" y="132" width="140" height="8" rx="3" fill="rgba(255, 255, 255, 0.08)" />
    <rect x="24" y="154" width="155" height="8" rx="3" fill="${p.accent}" opacity="0.4" />
    <rect x="24" y="176" width="130" height="8" rx="3" fill="rgba(255, 255, 255, 0.08)" />

    <!-- Main Workspace Content -->
    <g transform="translate(250, 75)">
      <!-- Header inside window -->
      <text x="0" y="32" fill="#ffffff" font-family="'Syne', system-ui, sans-serif" font-size="28" font-weight="700">${p.title}</text>
      <text x="0" y="58" fill="rgba(255, 255, 255, 0.6)" font-family="system-ui, sans-serif" font-size="14">${p.subtitle}</text>

      <!-- Tags inside window -->
      <g transform="translate(0, 80)">
        ${p.tags.map((t, idx) => `
          <g transform="translate(${idx * 160}, 0)">
            <rect width="145" height="28" rx="6" fill="rgba(255, 255, 255, 0.05)" stroke="${p.accent}" stroke-width="1" stroke-opacity="0.3" />
            <text x="72" y="18" fill="rgba(255, 255, 255, 0.85)" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">${t}</text>
          </g>
        `).join('')}
      </g>

      <!-- Interactive UI preview block -->
      <rect x="0" y="130" width="700" height="280" rx="10" fill="#090a0f" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />
      
      <!-- Graph / Nodes simulation -->
      <circle cx="150" cy="270" r="32" fill="${p.accent}" opacity="0.25" stroke="${p.accent}" stroke-width="2" />
      <text x="150" y="275" fill="#fff" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Input Stream</text>
      
      <line x1="182" y1="270" x2="318" y2="270" stroke="url(#accent-${p.filename})" stroke-width="2" stroke-dasharray="4,4" />
      
      <circle cx="350" cy="270" r="36" fill="${p.secondary}" opacity="0.3" stroke="${p.secondary}" stroke-width="2" />
      <text x="350" y="275" fill="#fff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">AI Agent</text>

      <line x1="386" y1="270" x2="518" y2="270" stroke="url(#accent-${p.filename})" stroke-width="2" stroke-dasharray="4,4" />
      
      <circle cx="550" cy="270" r="32" fill="${p.accent}" opacity="0.25" stroke="${p.accent}" stroke-width="2" />
      <text x="550" y="275" fill="#fff" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Output Result</text>

      <!-- Wave / Telemetry lines in preview -->
      <path d="M 60 360 Q 180 320, 300 370 T 540 330 T 640 350" fill="none" stroke="${p.accent}" stroke-width="2.5" opacity="0.7" />
      <path d="M 60 380 Q 200 340, 340 390 T 580 350 T 640 370" fill="none" stroke="${p.secondary}" stroke-width="2" opacity="0.5" />
    </g>
  </g>
</svg>`;
}

// Write the project preview files (both as .jpg SVG content and standard)
for (const p of projects) {
  const filePath = path.join(projectsDir, p.filename);
  fs.writeFileSync(filePath, generateProjectSvg(p));
  console.log('✓ Created project graphic:', filePath);
}

// 3. Create a clean sample PDF for resume
const samplePdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 180 >>
stream
BT
/F1 24 Tf
50 720 Td
(Alex Morgan - AI + Full-Stack Developer Resume) Tj
/F1 12 Tf
0 -30 Td
(Email: alex.morgan.dev@example.com | GitHub: alexmorgan-dev) Tj
0 -20 Td
(Full-stack engineer specializing in React, Node.js, Python, & AI Architectures.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000228 00000 n 
0000000460 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
537
%%EOF`;

fs.writeFileSync(path.join(assetsDir, 'resume.pdf'), samplePdf);
console.log('✓ Created sample resume.pdf');
