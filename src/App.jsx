import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Globe,
  Zap,
  Mail,
  ArrowRight,
  Menu,
  X,
  Globe2,
  BookOpen,
  History,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import Logo from './components/ui/Logo';

// --- Logo Komponenti (Stili JX bazuar në foto) ---
const JXLogo = ({ className = "w-10 h-10" }) => (
  <div className={`${className} relative group`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(77,60,255,0.8)]">
      <defs>
        <linearGradient id="jxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4D3CFF" />
          <stop offset="100%" stopColor="#9D4DFF" />
        </linearGradient>
      </defs>
      {/* Background Shape */}
      <rect width="100" height="100" rx="24" fill="black" fillOpacity="0.3" />
      <rect width="100" height="100" rx="24" stroke="url(#jxGradient)" strokeWidth="2" strokeOpacity="0.5" />

      {/* Stylized JX */}
      <path
        d="M30 30H45V60C45 65 42 68 37 68H32M55 30L75 70M75 30L55 70"
        stroke="url(#jxGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-br from-[#4D3CFF] to-[#9D4DFF] blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
  </div>
);

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    contact: 'Contact',
    heroSub: 'The Future of Digital Engineering',
    heroMain: 'JXPLATFORMS',
    heroWeb: 'WEBSITES',
    heroDesc: 'We engineer programs to bring you a future that is ',
    heroUseful: 'truly useful.',
    book: 'BOOK A SPOT',
    touch: 'GET IN TOUCH',
    portfolio: 'Portfolio',
    ecosystem: 'Our Ecosystem',
    showMore: 'Show More',
    showLess: 'Show Less',
    collab: 'Collaboration',
    contactUs: 'Contact Us',
    visitSite: 'Visit Website',
    compDesc: 'JXPlatforms is a leading innovation hub dedicated to building high-performance digital ecosystems, AI-driven solutions, and educational platforms that empower the next generation of users.',
    rights: 'ALL RIGHTS RESERVED.'
  },
  sq: {
    home: 'Kreu',
    about: 'Rreth Nesh',
    products: 'Produkte',
    contact: 'Kontakt',
    heroSub: 'E ardhmja e Inxhinierisë Dixhitale',
    heroMain: 'JXPLATFORMS',
    heroWeb: 'WEBSITES',
    heroDesc: 'Ne krijojmë programe për t\'ju sjellë një të ardhme ',
    heroUseful: 'vërtet të dobishme.',
    book: 'REZERVO TANI',
    touch: 'KONTAKTO',
    portfolio: 'Portofoli',
    ecosystem: 'Ekosistemi Ynë',
    showMore: 'Shiko më shumë',
    showLess: 'Shiko më pak',
    collab: 'Bashkëpunim',
    contactUs: 'Na kontaktoni',
    visitSite: 'Vizito Faqen',
    compDesc: 'JXPlatforms është një qendër inovacioni e përkushtuar në ndërtimin e ekosistemeve dixhitale me performancë të lartë, zgjidhjeve me AI dhe platformave edukative që fuqizojnë brezin e ardhshëm.',
    rights: 'TË GJITHA TË DREJTAT TË REZERVUARA.'
  }
};

const Navbar = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative overflow-hidden rounded-full border border-white/20 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(77,60,255,0.4)]' : 'bg-white/5 backdrop-blur-md'}`}>
          <div className="flex justify-between items-center px-8 py-3">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <Logo />
            </div>

            <div className="hidden lg:flex items-center gap-10">
              {['home', 'products', 'contact'].map((key) => (
                <a key={key} href={`#${key}`} className="text-[11px] font-black text-white hover:text-[#4D3CFF] transition-colors tracking-[0.2em] uppercase">
                  {t[key]}
                </a>
              ))}

              <button
                onClick={() => setLang(lang === 'en' ? 'sq' : 'en')}
                className="px-3 py-1 border border-[#4D3CFF] rounded-full text-[10px] font-black text-white hover:bg-[#4D3CFF]/20 transition-all uppercase flex items-center gap-2"
              >
                <Globe size={12} /> {lang === 'en' ? 'SQ' : 'EN'}
              </button>
            </div>

            <div className="hidden lg:block">
              <button className="px-8 py-2.5 bg-gradient-to-r from-[#4D3CFF] to-[#9D4DFF] text-white rounded-full font-black text-[10px] tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#4D3CFF]/20">
                {t.book}
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-center gap-8">
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-10 text-white"><X size={40} /></button>
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black text-white uppercase">{t.home}</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black text-white uppercase">{t.products}</a>
            <button
              onClick={() => { setLang(lang === 'en' ? 'sq' : 'en'); setMobileMenuOpen(false); }}
              className="text-2xl font-black text-[#4D3CFF] uppercase border-b-2 border-[#4D3CFF]"
            >
              {lang === 'en' ? 'Shqip' : 'English'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ lang }) => {
  const t = translations[lang];
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050610]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[70%] h-[70%] bg-[#4D3CFF]/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-[#9D4DFF]/15 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 text-center">
        <motion.div style={{ y }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[#4D3CFF] text-[10px] font-black tracking-[0.5em] uppercase mb-12 backdrop-blur-xl shadow-[0_0_20px_rgba(77,60,255,0.2)]">
            {t.heroSub}
          </motion.div>

          <h1 className="text-[12vw] md:text-[10rem] lg:text-[13rem] font-[1000] leading-[0.8] tracking-[-0.05em] text-white uppercase">
            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="block">
              {t.heroMain}
            </motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#4D3CFF] to-[#9D4DFF] drop-shadow-[0_0_30px_rgba(77,60,255,0.4)]">
              {t.heroWeb}
            </motion.span>
          </h1>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-16 max-w-4xl mx-auto">
            <p className="text-2xl md:text-5xl text-white font-light leading-tight tracking-tight">
              {t.heroDesc}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D3CFF] to-[#9D4DFF] font-black italic"> {t.heroUseful}</span>
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">
              <button className="px-14 py-6 bg-white text-black rounded-full font-black text-[12px] tracking-widest hover:scale-110 transition-transform shadow-2xl">
                {t.book}
              </button>
              <a href="#contact" className="px-14 py-6 border-2 border-[#4D3CFF] text-white rounded-full font-black text-[12px] tracking-widest hover:bg-[#4D3CFF]/10 transition-all flex items-center gap-3">
                {t.touch} <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Products = ({ lang }) => {
  const t = translations[lang];
  const [showMore, setShowMore] = useState(false);

  const primaryItems = [
    {
      title: 'MicroChat 1.0',
      icon: <MessageSquare />,
      tech: 'AI / Real-time',
      color: 'from-[#4D3CFF] to-blue-400',
      url: 'https://www.microchat10.com'
    },
    {
      title: 'ComeAndVisitAlbania',
      icon: <Globe2 />,
      tech: 'Tourism / Platform',
      color: 'from-[#9D4DFF] to-purple-400',
      url: 'https://programwebjx.github.io/ComeAndVisitAlbania/'
    },
    {
      title: 'VeqilharxhiTimes',
      icon: <BookOpen />,
      tech: 'Digital News',
      color: 'from-blue-500 to-[#4D3CFF]',
      url: '#'
    },
  ];

  const secondaryItems = [
    {
      title: 'Rine-Katerinza Web',
      icon: <Zap />,
      tech: 'Portfolio / Web',
      color: 'from-[#4D3CFF] to-indigo-400',
      url: 'https://programwebjx.github.io/Rine-Katerinza-Website--Gjuhe-Shqie-9--Shkolla-NaumVeqipharxhi/'
    },
    {
      title: 'Gjeografi Website',
      icon: <Globe />,
      tech: 'Edu / Geography',
      color: 'from-purple-500 to-[#9D4DFF]',
      url: 'https://programwebjx.github.io/Gjeografi-8-Website-JX-Platforms/'
    },
    {
      title: 'HistoriWebQuiz',
      icon: <History />,
      tech: 'Interactive / History',
      color: 'from-blue-600 to-[#4D3CFF]',
      url: 'https://programwebjx.github.io/Histori-9-Web-Quiz-JX-Platforms/'
    },
  ];

  return (
    <section id="products" className="py-40 bg-[#050610] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="text-[12px] font-black tracking-[0.6em] text-[#4D3CFF] uppercase mb-4">{t.portfolio}</h2>
          <h3 className="text-6xl md:text-9xl font-[1000] text-white tracking-tighter uppercase leading-none">{t.ecosystem}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {primaryItems.map((item, idx) => (
            <ProductCard key={idx} item={item} btnText={t.visitSite} />
          ))}
          <AnimatePresence>
            {showMore && secondaryItems.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.5 }}>
                <ProductCard item={item} btnText={t.visitSite} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-12 py-5 border-2 border-white/10 rounded-full text-white font-black text-[12px] tracking-[0.3em] hover:border-[#4D3CFF] hover:bg-[#4D3CFF]/5 transition-all uppercase"
          >
            {showMore ? t.showLess : t.showMore}
          </button>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ item, btnText }) => (
  <motion.div
    whileHover={{ y: -15 }}
    className="group p-10 rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl transition-all hover:border-[#4D3CFF]/50 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
  >
    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-10 text-white shadow-2xl group-hover:scale-110 transition-transform`}>
      {item.icon}
    </div>
    <h4 className="text-3xl font-[1000] text-white mb-3 uppercase tracking-tight">{item.title}</h4>
    <p className="text-[#9D4DFF] mb-6 font-black text-[10px] tracking-[0.2em] uppercase">{item.tech}</p>
    <p className="text-white/50 leading-relaxed font-medium mb-10 flex-grow">
      Advanced digital engineering solution designed for performance and global scalability.
    </p>

    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase text-[10px] tracking-widest text-center flex items-center justify-center gap-3 hover:bg-[#4D3CFF] hover:text-white transition-all shadow-xl"
    >
      {btnText} <ExternalLink size={14} />
    </a>
  </motion.div>
);

const Contact = ({ lang }) => {
  const t = translations[lang];
  return (
    <section id="contact" className="py-40 bg-[#050610] relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-[12px] font-black tracking-[0.6em] text-[#9D4DFF] uppercase mb-4">{t.collab}</h2>
        <h3 className="text-6xl md:text-[8rem] font-[1000] text-white tracking-tighter uppercase leading-none mb-20">{t.contactUs}</h3>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <ContactLink icon={<Mail />} label="Email" value="jxplatforms@gmail.com" href="mailto:jxplatforms@gmail.com" />
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl hover:bg-[#4D3CFF]/10 transition-all group flex flex-col items-center shadow-lg"
  >
    <div className="text-[#4D3CFF] mb-4 group-hover:scale-125 transition-transform drop-shadow-[0_0_10px_rgba(77,60,255,0.5)]">{icon}</div>
    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-lg font-bold text-white tracking-tight break-all">{value}</p>
  </a>
);

const Footer = ({ lang }) => {
  const t = translations[lang];
  return (
    <footer className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-20">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Logo />
            </div>
            <p className="text-xl text-white/50 leading-relaxed max-w-md font-medium">
              {t.compDesc}
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-10">
            <div className="flex gap-8 text-white/40 font-black uppercase text-[10px] tracking-widest">
              <a href="#home" className="hover:text-[#4D3CFF] transition-colors">{t.home}</a>
              <a href="#products" className="hover:text-[#4D3CFF] transition-colors">{t.products}</a>
              <a href="#contact" className="hover:text-[#4D3CFF] transition-colors">{t.contact}</a>
            </div>
            <div className="flex gap-6 items-center">
              <a href="mailto:jxplatforms@gmail.com" className="text-white/40 font-black text-[10px] tracking-widest uppercase">jxplatforms@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-white/20 text-[11px] font-black tracking-[0.4em] uppercase">
            © 2025 JXPLATFORMS. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState('sq');

  return (
    <div className="bg-[#050610] selection:bg-[#4D3CFF] selection:text-white font-sans antialiased text-white scroll-smooth">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Products lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
