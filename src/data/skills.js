/**
 * Skills & Technologies Data
 * Organized cleanly by category without fake percentage bars.
 */

export const skillsData = [
  {
    category: "Frontend Engineering",
    description: "Building responsive, accessible, and high-framerate interactive interfaces.",
    icon: "Layout",
    skills: [
      { name: "React 19 / 18", highlight: true, tag: "Core" },
      { name: "Next.js (App Router)", highlight: true, tag: "SSR/SSG" },
      { name: "TypeScript", highlight: true, tag: "Type Safe" },
      { name: "JavaScript (ESNext)", highlight: false },
      { name: "Tailwind CSS", highlight: true, tag: "Styling" },
      { name: "HTML5 / Semantic CSS3", highlight: false },
      { name: "Framer Motion", highlight: true, tag: "Animations" },
      { name: "Three.js / WebGL", highlight: false, tag: "3D" },
      { name: "State Management (Zustand / Redux)", highlight: false },
      { name: "Web Performance & SEO", highlight: false },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Architecting resilient APIs, distributed microservices, and asynchronous pipelines.",
    icon: "Server",
    skills: [
      { name: "Node.js & Express", highlight: true, tag: "Runtime" },
      { name: "Python / FastAPI", highlight: true, tag: "High Performance" },
      { name: "RESTful API Design", highlight: false },
      { name: "GraphQL APIs", highlight: false },
      { name: "WebSockets & SSE", highlight: true, tag: "Real-time" },
      { name: "Microservices Architecture", highlight: false },
      { name: "Authentication (OAuth, JWT, Auth0)", highlight: false },
      { name: "Serverless Functions", highlight: false },
    ],
  },
  {
    category: "Database & Storage",
    description: "Managing relational, document, vector, and distributed cache data stores.",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", highlight: true, tag: "Relational" },
      { name: "MongoDB", highlight: true, tag: "Document" },
      { name: "Redis", highlight: true, tag: "In-Memory Cache" },
      { name: "Supabase & Firebase", highlight: false },
      { name: "Prisma & Drizzle ORM", highlight: true, tag: "Modern ORM" },
      { name: "Vector Databases (Pinecone, ChromaDB)", highlight: true, tag: "AI Search" },
      { name: "Database Indexing & Optimization", highlight: false },
    ],
  },
  {
    category: "AI & Intelligent Systems",
    description: "Integrating frontier LLMs, RAG pipelines, autonomous agents, and embedding search.",
    icon: "Cpu",
    skills: [
      { name: "LLM Orchestration (LangChain, LlamaIndex)", highlight: true, tag: "Framework" },
      { name: "OpenAI / Claude / Gemini APIs", highlight: true, tag: "Frontier Models" },
      { name: "Retrieval-Augmented Generation (RAG)", highlight: true, tag: "Knowledge Systems" },
      { name: "Vector Embeddings & Semantic Search", highlight: true, tag: "NLP" },
      { name: "Multi-Agent Workflows", highlight: true, tag: "Autonomy" },
      { name: "Prompt Engineering & Evaluation", highlight: false },
      { name: "Local Inference (Ollama / HuggingFace)", highlight: false },
      { name: "Function Calling & Tool Integration", highlight: true, tag: "Agents" },
    ],
  },
  {
    category: "DevOps, Cloud & Tools",
    description: "Streamlining deployment workflows, infrastructure as code, and automated CI/CD.",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub Workflows", highlight: true, tag: "VCS" },
      { name: "Docker & Containerization", highlight: true, tag: "Containers" },
      { name: "AWS (S3, EC2, Lambda)", highlight: false, tag: "Cloud" },
      { name: "Vercel & Cloudflare", highlight: true, tag: "Edge" },
      { name: "CI/CD (GitHub Actions)", highlight: false },
      { name: "Vite / Webpack / Turbopack", highlight: false },
      { name: "Linux & Bash Scripting", highlight: false },
      { name: "Postman & API Testing", highlight: false },
    ],
  },
];
