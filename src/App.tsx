import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Terminal, Code, Copy, CheckCircle, Cpu, Zap, ShoppingCart, Github, Server, Database, Box, Users, Layers, Mail, Play, Globe, Cloud } from 'lucide-react';

const products = [
  {
    id: 'async-cv',
    title: 'Async CV Engine',
    description: 'A production-ready asynchronous computer vision pipeline built with FastAPI, Celery, and Redis. Plug in your models and scale infinitely.',
    price: '$149',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker'],
    link: '#buy',
    status: 'available',
    icon: <Cpu className="w-8 h-8 text-lime-400" />,
  },
  {
    id: 'k8s-object-detector',
    title: 'Distributed Object Detection',
    description: 'Kubernetes-native object detection architecture template. Distributed inferencing setup utilizing YOLOv8, message queues, and auto-scaling pods.',
    price: '$199',
    tags: ['Kubernetes', 'YOLO', 'RabbitMQ', 'Helm'],
    link: '#buy',
    status: 'available',
    icon: <Zap className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 'fullstack-ai-saas',
    title: 'Full-Stack AI SaaS (AWS)',
    description: 'A complete production-ready Next.js & Node.js boilerplate for AI platforms. Deploys to AWS seamlessly with built-in S3 integration and monetization.',
    price: '$199',
    tags: ['Next.js', 'Node.js', 'AWS', 'TypeScript'],
    link: '#buy',
    status: 'preparing',
    icon: <Globe className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 'django-ai-core',
    title: 'Django AI Core',
    description: 'Monolithic yet scalable Python backend with Django. Integrated with Celery for background AI tasks and PostgreSQL for vector embeddings.',
    price: '$129',
    tags: ['Python', 'Django', 'Celery', 'PostgreSQL'],
    link: '#buy',
    status: 'preparing',
    icon: <Database className="w-8 h-8 text-emerald-400" />,
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

  const githubMarkdown = `
<h1 align="center">Hi 👋, I'm building scalable Software Architectures</h1>
<h3 align="center">Production-Ready Full-Stack, Machine Learning & Architecture Boilerplates</h3>

<p align="center">
  We provide production-ready, highly scalable software architecture boilerplates. Stop rebuilding the wheel—reuse our extensible codebases to save hundreds of development hours. We offer pre-configured, scalable foundations for complex tasks like asynchronous computer vision, object detection, and full-stack AI SaaS platforms.
</p>

---

## 🚀 Premium Boilerplates
If you want to ship faster without reinventing the wheel, check out our premium templates available on Gumroad and Lemon Squeezy:

*   📦 **[Async CV Engine ⚡](#)** - Asynchronous CV pipeline with FastAPI & Celery.
*   📦 **[Distributed Object Detection 🧿](#)** - Kubernetes-native inferencing architecture.
*   📦 **[Full-Stack AI SaaS 🌐](#)** - Production-ready Next.js, Node.js & AWS boilerplate.
*   📦 **[Django AI Core 🐍](#)** - Monolithic AI backend with Django & Postgres.

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
                  <a href="https://gumroad.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                    Gumroad
                  </a>
                  <a href="https://lemonsqueezy.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                    Lemon Squeezy
                  </a>
                </div>
              </section>

              {/* Stats Section */}
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard number="200+" label="Happy Devs" />
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
                      <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                        {product.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 font-mono text-xs bg-gray-800 text-gray-300 border border-white/5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
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

              {/* Custom Architecture Consulting */}
              <section>
                <div className="bg-lime-500/5 border border-lime-500/20 rounded-3xl p-10 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4 text-white">Need a custom architecture?</h2>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8 border-b border-lime-500/10 pb-8">
                      We also offer specialized consulting and custom system design for enterprise machine learning applications. Whether it's edge deployment, massive distributed inferencing, or custom model integration, we can help.
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-70">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-lime-400" />
                        <span className="font-mono text-sm leading-none">Dedicated Team</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Server className="w-5 h-5 text-lime-400" />
                        <span className="font-mono text-sm leading-none">Enterprise SLA</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="px-8 py-4 bg-white text-gray-950 font-bold rounded-xl hover:bg-lime-400 hover:text-gray-950 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(163,230,53,0.3)]">
                      <Mail className="w-5 h-5" />
                      Book a Consult
                    </button>
                  </div>
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
