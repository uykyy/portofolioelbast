/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Smartphone, 
  Code2, 
  Globe, 
  Terminal, 
  ExternalLink, 
  Github, 
  Twitter, 
  Instagram, 
  Facebook,
  Cpu,
  Calculator,
  Book,
  Monitor,
  Wrench,
  ChevronRight
} from "lucide-react";

const PROJECTS = [
  {
    title: "BELIVETV",
    description: "Aplikasi streaming masa kini untuk menikmati tayangan TV Nasional dan siaran Olahraga favorit secara langsung. Dibangun dengan optimasi streaming tinggi dan dukungan DRM.",
    icon: <Monitor className="w-6 h-6 text-cyan-400" />,
    tech: ["Sketchware Pro", "ExoPlayer", "DRM Support", "Live Streaming"],
    accent: "bg-cyan-500/10 border-cyan-500/20",
    link: "https://belivetv.rabproject96.workers.dev/"
  },
  {
    title: "Kalkulator Ilmu Falak",
    description: "Aplikasi perhitungan astronomi Islam menggunakan logika Java murni dan perhitungan trigonometri kompleks untuk akurasi tinggi dalam menentukan arah kiblat dan waktu shalat.",
    icon: <Calculator className="w-6 h-6 text-emerald-400" />,
    tech: ["Java", "Trigonometri", "Android SDK"],
    accent: "bg-emerald-500/10 border-emerald-500/20",
    link: "https://roudhotul-mutaallimin2.vercel.app/"
  },
  {
    title: "Digitalisasi Kitab Pesantren",
    description: "Proyek inovatif mentransformasi literatur klasik pesantren ke dalam format digital menggunakan Script Pegon, memudahkan akses santri di era smartphone.",
    icon: <Book className="w-6 h-6 text-amber-400" />,
    tech: ["Custom Fonts", "Pegon Script", "Blogger Engine"],
    accent: "bg-amber-500/10 border-amber-500/20",
    link: "https://nurulhikam19.blogspot.com/?m=1"
  },
  {
    title: "Web Profil Pesantren Nurul Hikam",
    description: "Desain dan pengembangan website resmi untuk institusi pendidikan, memberikan wajah digital yang modern dan informatif bagi masyarakat luas.",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    tech: ["Web Design", "Responsive", "UI/UX"],
    accent: "bg-blue-500/10 border-blue-500/20"
  },
  {
    title: "Tool Oprek Android",
    description: "Kumpulan script dan utility untuk modifikasi sistem Android, termasuk integrasi Custom Recovery dan optimasi kernel untuk performa maksimal.",
    icon: <Wrench className="w-6 h-6 text-rose-400" />,
    tech: ["Shell Script", "Android System", "Modding"],
    accent: "bg-rose-500/10 border-rose-500/20"
  }
];

const SOCIAL_LINKS = [
  { name: "TikTok", url: "https://www.tiktok.com/@oficialmobilelegends?_r=1&_t=ZS-96ANQxpKsrs", icon: <Terminal className="w-5 h-5" />, color: "hover:text-cyan-400" },
  { name: "Instagram", url: "https://www.instagram.com/rifky_bast96?igsh=MWN1MXdtdXF2NnZpZQ==", icon: <Instagram className="w-5 h-5" />, color: "hover:text-pink-400" },
  { name: "Facebook", url: "https://www.facebook.com/Rhifkee", icon: <Facebook className="w-5 h-5" />, color: "hover:text-blue-500" }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 tech-grid -z-10 opacity-40" />
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-cyan-500/10 to-transparent -z-10 blur-3xl" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-emerald-500/10 to-transparent -z-10 blur-3xl" />

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        
        {/* Hero Section */}
        <section id="hero" className="relative pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-wider animate-pulse">
              <Smartphone className="w-3 h-3" />
              <span>DEVELOPED ON ANDROID DEVICE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Rifqi A Basit</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-mono">
              Android & Web Developer | <span className="text-cyan-300">Sketchware Pro Specialist</span>
            </p>
            
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Membangun aplikasi dan solusi digital langsung dari genggaman. 
              Membuktikan bahwa kreativitas tidak terbatas pada perangkat yang digunakan.
              Seluruh proyek saya dikerjakan 100% menggunakan perangkat mobile.
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors flex items-center gap-2 group"
              >
                Lihat Karya Saya
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    className={`p-3 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all ${link.color} hover:border-slate-700`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tentang Saya */}
        <section id="about" className="grid md:grid-rows-1 md:grid-cols-1 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-px bg-cyan-500" />
                Tentang Saya
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  Saya adalah seorang developer yang memiliki filosofi bahwa <span className="text-cyan-400 font-semibold italic underline decoration-cyan-500/30">"Hardware is just a tool, logic is the limit."</span> 
                </p>
                <p>
                  Seluruh perjalanan coding saya dimulai dari rasa penasaran bagaimana cara kerja sebuah sistem Android. Dengan keterbatasan perangkat PC, saya memutuskan untuk mendalami pengembangan aplikasi melalui <span className="text-emerald-400">Sketchware Pro</span>, sebuah IDE mobile yang powerful untuk Java dan Android SDK.
                </p>
              </div>
              <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30 glass relative overflow-hidden group">
                <Cpu className="absolute -right-8 -bottom-8 w-48 h-48 text-cyan-500/5 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    Workflow Mobile
                  </h3>
                  <ul className="space-y-3 font-mono text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">&gt;</span>
                      IDE: Sketchware Pro, Acode, Termux
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">&gt;</span>
                      Languages: Java, JavaScript, PHP, Shell
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">&gt;</span>
                      Platform: Android Core & Custom ROMs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">&gt;</span>
                      Backend: Firebase & REST APIs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Daftar Karya */}
        <section id="projects" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-px bg-emerald-500" />
                Daftar Karya
              </h2>
              <p className="text-slate-400 max-w-xl text-lg">
                Pilihan proyek unggulan yang didevelop secara eksklusif menggunakan perangkat Android.
              </p>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE PROJECTS</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border ${project.accent} group hover:border-white/20 transition-all duration-300 hover:translate-y-[-4px]`}
              >
                <div className="space-y-4 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="space-y-2 flex-grow">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono uppercase bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors pt-2 group/link"
                      >
                        VIEW PROJECT 
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Call to Action Grid Item */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-dashed border-slate-700 flex flex-col items-center justify-center text-center space-y-4 group cursor-pointer hover:bg-slate-900/40 transition-colors"
            >
              <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-400 transition-all duration-500">
                <Code2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="text-slate-300 font-semibold italic">Ide selanjutnya?</p>
                <p className="text-slate-500 text-xs font-mono italic">Menunggu tantangan baru dari Anda.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Media Sosial & Kontak */}
        <section id="contact" className="py-12 border-t border-slate-900">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Hubungi Saya</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Tertarik untuk berkolaborasi atau sekadar bertanya seputar pengembangan aplikasi mobile? Mari mengobrol di platform favorit Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map(link => (
                  <a 
                    key={link.name} 
                    href={link.url}
                    className="flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all group"
                  >
                    {link.icon}
                    <span className="font-semibold">{link.name}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white italic underline decoration-emerald-500/30 font-mono tracking-tighter">MISSION STATEMEMT</h3>
                <p className="text-slate-400 italic font-mono text-sm">
                  "Menghapus stigma bahwa coding hanya untuk mereka yang memiliki perangkat mahal. Coding adalah tentang logika, bukan hardware."
                </p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <div className="shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Let's talk code!</p>
                  <p className="text-cyan-400 text-xs font-mono">rifkiabdulbasit@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-10 text-center space-y-4 px-6">
        <p className="text-slate-500 text-sm font-mono">
          &copy; {new Date().getFullYear()} Rifqi A Basit.
        </p>
        <p className="text-slate-400 text-xs flex items-center justify-center gap-2">
          <span>Dibuat dengan semangat dari perangkat Android</span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </p>
      </footer>
    </div>
  );
}

