import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Layout, Server, Database, Bot, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';

const workflowSteps = [
  {
    id: 'idea',
    step: '01',
    title: 'Product & System Ideation',
    shortTitle: 'IDEA',
    icon: Lightbulb,
    accent: '#f59e0b',
    summary: 'Deconstruct complex user problems into concrete architectural blueprints, data models, and interface wireframes.',
    points: [
      'Requirements modeling & edge-case mapping',
      'System boundary definition & throughput estimation',
      'Interactive UI/UX prototypes & user flow validation'
    ]
  },
  {
    id: 'frontend',
    step: '02',
    title: 'Modern Reactive Frontend',
    shortTitle: 'FRONTEND',
    icon: Layout,
    accent: '#38bdf8',
    summary: 'Engineer accessible, high-framerate client applications with React/Next.js, Tailwind, and micro-interactions.',
    points: [
      'Component architecture with atomic design tokens',
      'Sub-second render speeds with SSR & ISR hydration',
      'Fluid state management & WebSocket event streams'
    ]
  },
  {
    id: 'backend',
    step: '03',
    title: 'Resilient Distributed Backend',
    shortTitle: 'BACKEND',
    icon: Server,
    accent: '#6366f1',
    summary: 'Construct robust Node.js/Python microservices, type-safe API gateways, and asynchronous background queues.',
    points: [
      'FastAPI & Express REST / GraphQL services',
      'OAuth2, JWT authentication & role-based access',
      'Rate-limiting, retry loops & circuit breakers'
    ]
  },
  {
    id: 'database',
    step: '04',
    title: 'Optimized Data Infrastructure',
    shortTitle: 'DATABASE',
    icon: Database,
    accent: '#10b981',
    summary: 'Design relational schemas, document stores, and in-memory caches configured for sub-millisecond query latency.',
    points: [
      'PostgreSQL relational schemas & Prisma/Drizzle ORM',
      'Redis distributed caching & session stores',
      'pgvector & Pinecone semantic search indexing'
    ]
  },
  {
    id: 'ai',
    step: '05',
    title: 'Applied AI & Multi-Agent Systems',
    shortTitle: 'AI INTEGRATION',
    icon: Bot,
    accent: '#8b5cf6',
    summary: 'Infuse applications with LLMs, retrieval-augmented generation (RAG), autonomous sub-agents, and guardrails.',
    points: [
      'LangChain / LlamaIndex orchestration engines',
      'Hybrid dense-sparse vector search & reranking',
      'Function calling, tool orchestration & prompt eval'
    ]
  },
  {
    id: 'deployment',
    step: '06',
    title: 'Continuous Cloud Deployment',
    shortTitle: 'DEPLOYMENT',
    icon: Rocket,
    accent: '#ec4899',
    summary: 'Containerize systems with Docker, manage automated CI/CD pipelines, and deploy with zero-downtime edge routing.',
    points: [
      'Automated GitHub Actions linting & test suites',
      'Docker multi-stage container builds & Kubernetes',
      'Vercel edge functions & AWS infrastructure as code'
    ]
  }
];

export const AIWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="section relative border-t border-white/5">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="section-tag" data-cursor-text="WORKFLOW">
            <span className="section-tag-dot" />
            <span>03 // ENGINEERING LIFECYCLE</span>
          </div>
          <h2 className="section-title">
            The AI + Full-Stack <span className="text-gradient-accent interactive-word" data-cursor-text="DEVELOPMENT">Development Flow</span>
          </h2>
          <p className="section-subtitle">
            How I conceptualize, build, augment with intelligence, and ship end-to-end production systems from first principles.
          </p>
        </div>

        {/* Interactive Flow Stepper Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                data-cursor-text={step.shortTitle}
                className={`relative p-3.5 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-[#151928] border-indigo-400/60 shadow-md shadow-indigo-500/10 -translate-y-0.5'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] font-bold text-zinc-400">
                    {step.step}
                  </span>
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center"
                    style={{
                      backgroundColor: `${step.accent}20`,
                      color: step.accent,
                    }}
                  >
                    <Icon size={13} />
                  </div>
                </div>

                <div className="font-display font-bold text-xs text-white tracking-wide">
                  {step.shortTitle}
                </div>

                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeFlowIndicator"
                    className="absolute -bottom-[1px] left-2.5 right-2.5 h-[2px] rounded-full"
                    style={{ backgroundColor: step.accent }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <AnimatePresence mode="wait">
          {workflowSteps[activeStep] && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[90px] pointer-events-none opacity-15"
                style={{ backgroundColor: workflowSteps[activeStep].accent }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                
                {/* Left Overview */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: `${workflowSteps[activeStep].accent}20`,
                        color: workflowSteps[activeStep].accent,
                        border: `1px solid ${workflowSteps[activeStep].accent}40`,
                      }}
                    >
                      STAGE {workflowSteps[activeStep].step}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase">
                      Architecture Tier
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                    {workflowSteps[activeStep].title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {workflowSteps[activeStep].summary}
                  </p>
                </div>

                {/* Right Points List */}
                <div className="lg:col-span-6 flex flex-col gap-2.5">
                  {workflowSteps[activeStep].points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: workflowSteps[activeStep].accent }}
                      />
                      <span className="text-xs sm:text-sm font-medium text-zinc-200 leading-snug">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Next step button */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  Step {activeStep + 1} of {workflowSteps.length}
                </span>

                <button
                  onClick={() => setActiveStep((activeStep + 1) % workflowSteps.length)}
                  data-cursor-text="NEXT"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white transition-colors"
                >
                  <span>
                    Next: {workflowSteps[(activeStep + 1) % workflowSteps.length].shortTitle}
                  </span>
                  <ChevronRight size={14} />
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
