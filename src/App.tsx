import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Terminal, Code, Copy, CheckCircle, Cpu, Zap, ShoppingCart, Github, Server, Database, Box, Users, Layers, Mail, Play, Globe, Cloud, ChevronDown } from 'lucide-react';

const products = [
  {
    id: 'object-detection-flow',
    title: 'Object Detection Flow',
    description: 'Production-ready object detection architecture. Deploy robust computer vision models with ease using our battle-tested pipeline and extensive documentation.',
    price: '$199',
    tags: ['Computer Vision', 'YOLO', 'Python', 'Architecture'],
    link: '#buy',
    status: 'available',
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    features: ['End-to-End inference pipeline', 'REST API setup included', 'Streamlit dashboard attached', 'Complete deployment scripts'],
  },
  {
    id: 'saas-core',
    title: 'SaaS Core',
    description: 'A complete production-ready full-stack boilerplate for scaling SaaS platforms. Launch your next big idea faster with our secure, highly scalable, and customizable core.',
    price: '$199',
    tags: ['Next.js', 'Node.js', 'AWS', 'TypeScript'],
    link: '#buy',
    status: 'preparing',
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    features: ['Magic links & social auth', 'Stripe checkout & webhooks', 'Optimized database schema', 'AWS CDK deployment ready'],
  },
  {
    id: 'async-cv',
    title: 'Async CV Engine',
    description: 'A production-ready asynchronous computer vision pipeline built with FastAPI, Celery, and Redis. Plug in your models and scale infinitely to handle high loads without bottlenecks.',
    price: '$149',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker'],
    link: '#buy',
    status: 'preparing',
    icon: <Cpu className="w-8 h-8 text-lime-400" />,
    features: ['Celery worker auto-scaling', 'Redis message brokering', 'Non-blocking FastAPI endpoints', 'Full Docker compose setup'],
  }
];

const caseStudies = [
  {
    title: "LensaHub - Serverless Website Provisioning",
    role: "Full-stack Developer",
    description: "Developed a comprehensive CMS that acts as a SaaS platform for deploying and provisioning dynamic websites. The system features hierarchical management (System Admin -> Company -> End-User CMS) and is completely powered by a serverless AWS backend.",
    tech: ["React.js", "Node.js", "AWS Lambda", "AWS Step Functions", "MySQL"],
    icon: <Globe className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Educon - Distributed E-Learning Ecosystem",
    role: "Tech Lead & DevOps",
    description: "Designed and led the development of a modular e-learning platform. Built a central configuration hub (Palette) that manages satellite systems for selling courses (Manabite) and conducting examinations (Tokite).",
    tech: ["React.js", "Laravel", "Stripe Integration", "AWS EC2", "Docker"],
    icon: <Database className="w-8 h-8 text-emerald-400" />
  }
];

const experiences = [
  {
    role: "Front-end Team Leader, Unity Developer, Full-stack Developer",
    company: "Live2D",
    period: "Mar 2026 - Present",
    description: "Livestream system featuring integrated 2D models, management, and customization.",
    tech: ["NodeJS", "ReactJS", "NextJS", "Unity"],
    highlights: [
      "Led the front-end team and developed Unity components for a robust livestreaming application.",
      "Implemented comprehensive 2D model management, integration, and customization features."
    ]
  },
  {
    role: "Team Leader, Full-stack Developer",
    company: "Omoide + Dubbing",
    period: "Dec 2025 - Mar 2026",
    description: "Video conversion and storage management system with a focus on performance optimization.",
    tech: ["NodeJS", "ReactJS", "NextJS"],
    highlights: [
      "Designed and implemented storage package systems and system maintenance workflows.",
      "Optimized overall performance and successfully executed a server migration for the video pipeline."
    ]
  },
  {
    role: "Full-stack Engineer (R&D / Solution Design)",
    company: "Digital Printing - AI Object Detection",
    period: "Oct 2025 - Dec 2025",
    description: "Automated AI system for vehicle part detection and upgrade suggestions.",
    tech: ["Python", "Machine Learning", "NodeJS", "ReactJS"],
    highlights: [
      "Designed end-to-end architecture: from model selection and annotation to training and API deployment.",
      "Authored project plans, capacity estimates, and technical requirements for the development team."
    ]
  },
  {
    role: "Full-stack Developer",
    company: "Amivoice",
    period: "Jul 2025 - Oct 2025",
    description: "Voice recognition system for conversations and video, including a desktop app.",
    tech: ["NodeJS", "ReactJS", "Electron/Desktop"],
    highlights: [
      "Developed core voice recognition pipelines applied to meetings and video streams.",
      "Built a companion desktop app featuring auto-updates and customizable keyboard shortcuts."
    ]
  },
  {
    role: "Full-stack Developer",
    company: "Unicore",
    period: "Apr 2025 - Jul 2025",
    description: "B2B Factory attendance management system.",
    tech: ["NextJS", "Supabase", "PostgreSQL", "Vercel"],
    highlights: [
      "Built a multi-tenant attendance platform serving System Admins, Company Admins, and Employees."
    ]
  },
  {
    role: "Full-stack Developer",
    company: "LensaHub",
    period: "Apr 2024 - Apr 2025",
    description: "CMS for creating & provisioning websites. Handled system administration, company management, and user-facing dynamic page generation.",
    tech: ["ReactJS", "Redux", "NodeJS (Serverless)", "MySQL", "AWS"],
    highlights: [
      "Built serverless infrastructure using AWS Lambda, StateMachine, EC2, S3, Cloudfront, and RDS.",
      "Developed comprehensive access control for 3 distinct user scopes (System, Company, CMS)."
    ]
  },
  {
    role: "Technical Leader, Full-stack Developer, DevOps",
    company: "Educon",
    period: "Jan 2023 - Apr 2024",
    description: "E-learning ecosystem consisting of a central configuration system and satellite systems for course and exam management.",
    tech: ["ReactJS", "PHP (Laravel)", "MySQL", "AWS", "Stripe"],
    highlights: [
      "Led development of 'Palette' configuration core and 'Manabite', 'Tokite' satellite e-commerce and exam platforms.",
      "Managed CI/CD and deployment pipelines using Github Actions, AWS EC2, and Route53."
    ]
  },
  {
    role: "Full-stack Developer, DevOps",
    company: "Wellness Kun",
    period: "Jun 2022 - Jan 2023",
    description: "Comprehensive health and wellness management platform for enterprises and end-users.",
    tech: ["AngularJS", "NodeJS (Express)", "MongoDB", "Docker"],
    highlights: [
      "Implemented a multi-tenant B2B health tracking portal integrating companies and internal users."
    ]
  },
  {
    role: "Full-stack Developer",
    company: "Vector / Kensho / Nom",
    period: "Apr 2021 - Jun 2022",
    description: "Multiple projects including testing systems, Twitter content management, and an online dating social network.",
    tech: ["NextJS", "Python (API)", "Ruby on Rails", "Firestore", "PostgreSQL"],
    highlights: [
      "Built custom online testing & question gen systems used by multiple clients.",
      "Designed real-time Twitter data mirroring & scheduling platforms.",
      "Architected matching algorithms & chat functions for an online dating platform."
    ]
  }
];

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl flex flex-col items-center justify-center text-center">
      <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 mb-2">{number}</div>
      <div className="text-sm font-mono text-gray-400">{label}</div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'github'>('portfolio');
  const [copied, setCopied] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleTimelineScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 20) {
      setIsScrolledToBottom(true);
    } else {
      setIsScrolledToBottom(false);
    }
  };

  const githubMarkdown = `
<h1 align="center">Hi 👋, I'm building scalable Software Architectures</h1>
<h3 align="center">Production-Ready Full-Stack, Machine Learning & Architecture Boilerplates</h3>

<p align="center">
  We provide production-ready, highly scalable software architecture boilerplates. Stop rebuilding the wheel—reuse our extensible codebases to save hundreds of development hours. We offer pre-configured, scalable foundations for complex tasks like asynchronous computer vision, object detection, and full-stack AI SaaS platforms.
</p>

---

## 🚀 Premium Boilerplates
If you want to ship faster without reinventing the wheel, check out our premium templates available on Gumroad and Lemon Squeezy:

*   📦 **[Object Detection Flow 🧿](#)** - Production-ready object detection architecture. (Available Now)
*   📦 **[SaaS Core 🌐](#)** - Complete production-ready full-stack boilerplate. (In Development)
*   📦 **[Async CV Engine ⚡](#)** - Asynchronous CV pipeline with FastAPI & Celery. (DOING)

[Deploy faster with our boilerplates →](#)

## 🛠 Tech Stack
- **Languages:** Python, TypeScript, Go, Node.js
- **ML / CV:** PyTorch, OpenCV, YOLO, TensorFlow
- **Backend:** Django, FastAPI, Node.js, Celery
- **Frontend & Web:** Next.js, React, Tailwind CSS
- **Cloud & Architecture:** AWS, Kubernetes, Docker, Redis, Message Queues

## 📈 Connect
*   Check out my [GitHub (@dukedinh-io)](https://github.com/dukedinh-io) for more open-source work.
*   Check out the [storefront](#) for new boilerplates.

<br>
<p align="center">
  <i>"Stop configuring infrastructure, start shipping features."</i>
</p>
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(githubMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 font-sans selection:bg-lime-500/30 selection:text-lime-200">
      <nav className="fixed top-0 left-0 right-0 border-b border-white/10 bg-gray-950/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-lime-400" />
              <span className="font-mono font-bold tracking-tight text-lg">Code_Boilerplates</span>
            </div>
            <a href="https://github.com/dukedinh-io" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-500 hover:text-lime-400 transition-colors hidden sm:block">
              by @dukedinh-io
            </a>
          </div>
          <div className="flex gap-1 bg-white/5 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'portfolio' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Public Profile
            </button>
            <button
              onClick={() => setActiveTab('github')}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'github' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Github className="w-4 h-4" />
              GitHub CV
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'portfolio' ? (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-24"
            >
              <section className="pt-16 md:pt-24 max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                    Lemon Squeezy: Live
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-[pulse_2s_ease-in-out_infinite_reverse]" />
                    Gumroad: Preparing
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                  Months of Architecture. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-600">
                    Ready in Minutes.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                  We provide production-ready, highly scalable software architecture boilerplates. Stop rebuilding the wheel—reuse our extensible codebases to save hundreds of development hours and focus on your core product.
                </p>
                <div className="mt-10 flex gap-4">
                  <a href="#boilerplates" className="px-6 py-3 bg-lime-500 text-gray-950 font-semibold rounded-lg hover:bg-lime-400 transition-colors inline-flex items-center gap-2">
                    View Boilerplates <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href="https://lemonsqueezy.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                    Lemon Squeezy
                  </a>
                  <a href="https://gumroad.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                    Gumroad
                  </a>
                </div>
              </section>

              {/* Stats Section */}
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard number="5+" label="Years Experience" />
                <StatCard number="10k+" label="Hours Saved" />
                <StatCard number="99.9%" label="Reliability" />
                <StatCard number="24/7" label="Support" />
              </section>

              <section id="boilerplates">
                <div className="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-2">Premium Codebases</h2>
                    <p className="text-gray-400">Deployable architectures available instantly.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="group bg-gray-900 border border-white/10 p-8 rounded-2xl hover:border-lime-500/50 transition-colors relative overflow-hidden flex flex-col">
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        {product.icon}
                      </div>
                      <div className="flex justify-between items-start mb-6">
                        <div>{product.icon}</div>
                        {product.status === 'preparing' && (
                          <span className="px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full">
                            Preparing...
                          </span>
                        )}
                        {product.status === 'available' && (
                          <span className="px-3 py-1 text-xs font-medium bg-lime-500/10 text-lime-400 border border-lime-500/20 rounded-full">
                            Available Now
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                      <div className="grid grid-cols-1 grid-rows-1 flex-grow mb-8 relative">
                        <p className="col-start-1 row-start-1 text-gray-400 leading-relaxed group-hover:opacity-0 transition-opacity duration-300 z-10 self-start">
                          {product.description}
                        </p>
                        <div className="col-start-1 row-start-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-start z-20 pointer-events-none self-start">
                          <ul className="space-y-3">
                            {product.features?.map(feature => (
                              <li key={feature} className="flex items-start gap-2 text-sm text-gray-200">
                                <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                                <span className="leading-tight">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-8 relative z-30">
                        {product.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 font-mono text-xs bg-gray-800 text-gray-300 border border-white/5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto relative z-30">
                        <span className="text-2xl font-mono text-white group-hover:text-lime-400 transition-colors">{product.price}</span>
                        <button 
                          disabled={product.status === 'preparing'}
                          className={`px-5 py-2.5 font-semibold rounded-lg transition-colors inline-flex items-center gap-2 ${
                            product.status === 'preparing' 
                              ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                              : 'bg-white text-gray-950 hover:bg-gray-200'
                          }`}
                        >
                          {product.status === 'preparing' ? (
                            'Coming Soon'
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              Buy Source
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tech Stack section */}
              <section>
                <div className="mb-10 text-center">
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Built on Industry Standards</h2>
                  <p className="text-gray-400">Our boilerplates utilize the most robust tools in the ML and Web ecosystems.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Python', icon: <Terminal className="w-5 h-5 text-lime-400/70" /> },
                    { name: 'Django', icon: <Layers className="w-5 h-5 text-lime-400/70" /> },
                    { name: 'Node.js', icon: <Server className="w-5 h-5 text-lime-400/70" /> },
                    { name: 'Next.js', icon: <Globe className="w-5 h-5 text-lime-400/70" /> },
                    { name: 'AWS', icon: <Cloud className="w-5 h-5 text-lime-400/70" /> },
                    { name: 'PyTorch', icon: <Box className="w-5 h-5 text-lime-400/70" /> },
                    { name: 'FastAPI', icon: <Zap className="w-5 h-5 text-lime-400/70" /> },
                    { name: 'Kubernetes', icon: <Layers className="w-5 h-5 text-lime-400/70" /> },
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 p-4 bg-gray-900 border border-white/5 rounded-xl hover:bg-gray-800 transition-colors">
                      {tech.icon}
                      <span className="font-medium text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience & Timeline */}
              <section id="experience" className="pt-16 mt-16 border-t border-white/10">
                <div className="mb-10 lg:w-2/3">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Experience & Timeline</h2>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    My professional journey building distributed systems, scalable web apps, and enterprise architectures.
                  </p>
                </div>
                <div className="relative">
                  <div 
                    className="max-h-[600px] overflow-y-auto pr-4 -mr-4 custom-scrollbar"
                    onScroll={handleTimelineScroll}
                  >
                    <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8 pt-2">
                      {experiences.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12">
                          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-lime-400 ring-4 ring-gray-950" />
                          
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white transition-colors">
                              {exp.role} <span className="text-gray-500 font-normal">@ {exp.company}</span>
                            </h3>
                            <span className="font-mono text-sm text-lime-400/80 shrink-0">{exp.period}</span>
                          </div>
                          
                          <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                          
                          <ul className="space-y-2 mb-6">
                            {exp.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-5 h-5 text-lime-500/50 mt-0.5 shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t, tIdx) => (
                              <span key={tIdx} className="px-3 py-1 font-mono text-xs bg-gray-800 text-gray-300 border border-white/5 rounded-md">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Scroll Indicator Overlay */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent flex items-end justify-center pb-4 transition-opacity duration-500 ${isScrolledToBottom ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <div className="flex flex-col items-center text-lime-400 animate-bounce">
                      <span className="text-xs font-mono mb-1 uppercase tracking-widest bg-gray-950/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5 shadow-lg">Scroll for more</span>
                      <ChevronDown className="w-5 h-5 drop-shadow-md" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Case Studies */}
              <section id="case-studies" className="pt-16 mt-16 border-t border-white/10">
                <div className="mb-10 lg:w-2/3">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Deep-Dive Case Studies</h2>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    A closer look at the architecture and problem-solving behind complex platforms.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {caseStudies.map((study, idx) => (
                    <div key={idx} className="bg-gray-900 border border-white/10 p-8 rounded-2xl hover:border-lime-500/30 transition-all flex flex-col items-start group">
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10 shrink-0 mb-6 group-hover:scale-110 group-hover:bg-lime-500/10 transition-all duration-300">
                        {study.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{study.title}</h3>
                      <p className="text-sm font-mono text-lime-400/80 mb-4">{study.role}</p>
                      
                      <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                        {study.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto w-full pt-6 border-t border-white/5">
                        {study.tech.map((t, tIdx) => (
                          <div key={tIdx} className="flex items-center gap-1.5 text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="github"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto pt-10"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight mb-3">GitHub Profile Generator</h2>
                <p className="text-gray-400">
                  Copy this optimized markdown and paste it into your <code className="text-lime-400 font-mono">README.md</code> repository to showcase your boilerplates on GitHub.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={handleCopy}
                    className="p-2 sm:px-4 sm:py-2 bg-gray-800 border border-white/10 hover:bg-gray-700 text-white rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 shadow-md backdrop-blur-md"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-lime-400" />
                        <span className="hidden sm:inline text-lime-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline">Copy Markdown</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="w-full bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#161b22]">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    <span className="ml-2 text-xs font-mono text-gray-500">README.md</span>
                  </div>
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm font-mono text-[#c9d1d9] whitespace-pre">
                      {githubMarkdown}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/5 bg-gray-900/50 mt-auto py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-lime-400" />
            <span className="font-mono font-bold tracking-tight text-gray-400">Code_Boilerplates</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Code Boilerplates. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400 font-medium h-fit flex-wrap">
            <a href="https://github.com/dukedinh-io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub (@dukedinh-io)</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Gumroad</a>
            <a href="#" className="hover:text-white transition-colors">Lemon Squeezy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
