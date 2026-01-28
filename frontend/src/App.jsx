import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Code, BarChart, Headset, Mail, Phone, MapPin, ChevronDown, ArrowRight, Menu, X, Send, ShieldCheck, Zap, Target, PieChart, Award, Quote, CheckCircle, Activity, Fingerprint } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// --- SHARED DATA ---
const services = [
  {
    id: "networking",
    title: "Enterprise Connectivity",
    desc: "Uninterrupted high-speed fiber solutions designed for modern enterprise scalability and robust networking infrastructure.",
    icon: <Globe className="w-10 h-10" />,
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Fiber", "99.9% Uptime", "SLA",]
  },
  {
    id: "mobile-app",
    title: "Mobile App Engineering",
    desc: "Crafting intuitive iOS and Android experiences using cutting-edge frameworks to put your business at your customers' fingertips.",
    icon: <Smartphone className="w-10 h-10" />,
    image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["iOS/Android", "Native", "UI/UX",]
  },
  {
    id: "web-dev",
    title: "Software/Website Development",
    desc: "Architecting complex custom software and web applications with Next.js and Python for high-performance business logic.",
    icon: <Code className="w-10 h-10" />,
    image: "https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Python", "SaaS", "Full-Stack"]
  },
  {
    id: "marketing",
    title: "Growth Marketing",
    desc: "Driving qualified leads and revenue through data-driven digital marketing strategies and ROI-focused campaigns.",
    icon: <BarChart className="w-10 h-10" />,
    image: "https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["SEO", "PPC", "ROI"]
  },
  {
    id: "bpo",
    title: "BPO & Client Services",
    desc: "Supporting your digital growth every step of the way with 24/7 proactive monitoring and premium customer evaluation.",
    icon: <Headset className="w-10 h-10" />,
    image: "https://images.pexels.com/photos/7007191/pexels-photo-7007191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["24/7", "Maintenance", "Strategic"]
  }
];

const heroSlides = ["Robust Networking", "Mobile App Development", "Digital Marketing", "24/7 Customer Support", "Web Developments"];

// --- UPDATED HANDLER ---
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://netwavesolution.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Thanks For Your Message!");
      e.target.reset();
    } else {
      const errorData = await response.json();
      console.log("Validation Error:", errorData);
      alert("Validation failed. Please check your data.");
    }
  } catch (error) {
    alert("Server error! Please check backend.");
  }
};

// --- HELPER COMPONENTS ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const InteractiveWorld = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsClicked(false);
      setTimeout(() => setIsClicked(true), 8000);
    }, 12000);
    const initialTimer = setTimeout(() => setIsClicked(true), 8000);
    return () => { clearInterval(timer); clearTimeout(initialTimer); };
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[550px] flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md rounded-[2rem] md:rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl cursor-pointer" onClick={() => setIsClicked(!isClicked)}>
      <div className="absolute inset-0">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-netwave-cyan/20 rounded-full blur-[120px]" />
      </div>
      <AnimatePresence mode="wait">
        {!isClicked ? (
          <motion.div key="world" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }} transition={{ duration: 0.8 }} className="relative flex flex-col items-center text-white">
            <div className="relative p-10 text-white">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="relative z-10 text-white">
                <Globe size={120} className="md:size-[180px] text-white/10 stroke-[1px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-40 md:h-40 border border-netwave-cyan/30 rounded-full animate-ping opacity-20" />
                </div>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-lg md:text-2xl italic tracking-tighter opacity-40 uppercase">NETWAVE</span>
              </div>
            </div>
            <p className="mt-8 text-[8px] md:text-[9px] tracking-[0.5em] text-netwave-cyan uppercase font-bold text-center">Scanning Infrastructure</p>
          </motion.div>
        ) : (
          <motion.div key="message" initial={{ opacity: 0, filter: "blur(20px)", y: 30 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 1, ease: "easeOut" }} className="text-center px-6 md:px-12 z-20 text-white">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="w-12 h-[2px] bg-netwave-cyan mx-auto mb-6" />
            <h4 className="text-netwave-cyan font-mono text-[10px] md:text-xs tracking-[0.5em] mb-4 italic uppercase text-white text-center">GOING DIGITAL ?</h4>
            <h3 className="text-3xl md:text-7xl font-black italic uppercase leading-tight mb-6 tracking-tighter text-white text-center">NO NEED<br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 text-white">TO WORRY.</span></h3>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-netwave-cyan font-black italic uppercase tracking-widest text-[10px] md:text-xs text-center">CONTACT WITH US WE ARE HERE TO HELP YOU</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- PAGES ---
const AboutPage = () => (
  <div className="min-h-screen bg-[#050505] text-white pt-32 md:pt-56 pb-20">
    <section className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-40 grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl text-center lg:text-left">
        <h2 className="text-netwave-cyan font-mono uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 italic">Driven by Digital Excellence</h2>
        <h1 className="text-4xl md:text-[90px] font-black italic uppercase leading-[0.9] mb-10 tracking-tighter">Our Journey. <br /> Your success.</h1>
        <p className="text-gray-400 text-sm md:text-xl font-bold uppercase tracking-widest leading-relaxed border-l-4 border-netwave-cyan pl-6 md:pl-8 mb-12">
          Since 2017 Netwave Solution has committed itself to researching and developing the best digital technology that will help clients grow their brand.
        </p>
      </motion.div>
      <div className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden aspect-square w-full max-w-[500px]">
        <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" className="w-full h-full object-cover grayscale" alt="Netwave" />
      </div>
    </section>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-[#050505] text-white pt-32 md:pt-56 pb-20">
    <section className="max-w-[1440px] mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 md:gap-24 items-start text-white">
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-netwave-cyan font-mono uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 italic text-white">Stay Tuned</h2>
        <h1 className="text-5xl md:text-[120px] font-black italic uppercase leading-[0.8] mb-16 tracking-tighter text-white">Get In <br /> Touch.</h1>
        <div className="space-y-8 md:space-y-12">
          <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-8 group">
            <Mail className="text-netwave-cyan" size={32} />
            <div><p className="text-gray-500 text-[10px] uppercase font-black mb-1">Email Support</p><p className="text-lg md:text-2xl font-black uppercase italic break-all text-white">info@netwavesolution.com</p></div>
          </div>
          <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-8 group">
            <Phone className="text-netwave-cyan" size={32} />
            <div><p className="text-gray-500 text-[10px] uppercase font-black mb-1">Call Us</p><p className="text-lg md:text-2xl font-black uppercase italic break-all text-white">+1 (346) 279-1467</p></div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a0a0a] p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] border border-white/5 shadow-2xl">
        <form className="space-y-8 md:space-y-10 text-white" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <input name="first_name" type="text" placeholder="FIRST NAME" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-netwave-cyan outline-none transition uppercase text-[10px] md:text-xs tracking-widest text-white font-bold" required />
            <input name="last_name" type="text" placeholder="LAST NAME" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-netwave-cyan outline-none transition uppercase text-[10px] md:text-xs tracking-widest text-white font-bold" />
          </div>
          <input name="email" type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-netwave-cyan outline-none transition uppercase text-[10px] md:text-xs tracking-widest text-white font-bold" required />
          <textarea name="message" rows="4" placeholder="MESSAGE" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-netwave-cyan outline-none transition uppercase text-[10px] md:text-xs tracking-widest text-white font-bold" required></textarea>
          <button type="submit" className="w-full bg-white text-black py-5 md:py-7 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-netwave-cyan transition-all active:scale-95 shadow-xl">Send Inquiry</button>
        </form>
      </div>
    </section>
  </div>
);

const ServicePage = ({ id, title, navigate }) => {
  const s = services.find(item => item.id === id);

  const handleExpertClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) { contactSection.scrollIntoView({ behavior: 'smooth' }); }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 md:pt-56 pb-20">
      <section className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-20 flex flex-col items-center gap-12">

        {/* IMAGE BLOCK (AB YEH TOP PAR HAI) */}
        <div className="relative group w-full lg:w-[60%] aspect-video rounded-[2rem] md:rounded-[5rem] overflow-hidden border border-white/10">
          <img src={s?.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[3000ms]" alt={title} />
        </div>

        {/* TEXT BLOCK (AB YEH IMAGE KE NICHE HAI) */}
        <div className="flex-1 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {s?.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-netwave-cyan/10 border border-netwave-cyan/30 rounded-full text-[10px] uppercase font-bold text-netwave-cyan">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-[85px] font-black italic uppercase leading-[0.9] mb-10 tracking-tighter text-white">{title}.</h1>
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm md:text-xl uppercase font-bold border-l-4 border-netwave-cyan pl-6 mb-12 max-w-2xl text-left">{s?.desc}</p>
          </div>
          <div className="space-y-4 mb-12 flex flex-col items-center">
            {["Enterprise Grade Security", "Custom Tailored Solutions", "24/7 Strategic Support"].map((point, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300 font-bold uppercase text-xs">
                <CheckCircle size={16} className="text-netwave-cyan" /> {point}
              </div>
            ))}
          </div>
          <button onClick={handleExpertClick} className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-netwave-cyan transition-all shadow-2xl active:scale-95">
            Start Expert Session
          </button>
        </div>
      </section>

      <section className="bg-white/5 py-12 md:py-32 border-y border-white/5 backdrop-blur-3xl text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center text-white">
          {[{ l: "Success Rate", v: "99%" }, { l: "ROI", v: "3.5x" }, { l: "Reach", v: "Global" }, { l: "Support", v: "24/7" }].map((st, i) => (
            <div key={i}><h4 className="text-2xl md:text-5xl font-black italic text-netwave-cyan mb-2 md:mb-4 uppercase">{st.v}</h4><p className="text-[8px] md:text-[11px] text-gray-500 font-black uppercase tracking-[0.4em]">{st.l}</p></div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- MAIN PAGE ---
const MainPage = ({ loading, slideIndex, scrollToContact }) => (
  <>
    <AnimatePresence>
      {loading && (
        <motion.div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 text-center" exit={{ y: '-100%', transition: { duration: 0.8 } }}>
          <img src="/logo.png" alt="Netwave" className="h-40 md:h-64 w-auto mb-8 mx-auto" />
          <div className="overflow-hidden h-16 md:h-20 text-white"><motion.div animate={{ y: [0, -80, -160] }} transition={{ duration: 3, times: [0, 0.5, 1], repeat: Infinity }} className="text-3xl md:text-6xl font-black italic uppercase text-center"><div className="h-20 text-netwave-cyan">INNOVATE</div><div className="h-20 text-white">NETWAVE</div><div className="h-20 text-netwave-cyan">SOLUTION</div></motion.div></div>
          <motion.div className="w-32 md:w-48 h-1 bg-white/10 mt-8 rounded-full overflow-hidden" initial={{ width: 0 }} animate={{ width: 150 }} transition={{ duration: 3 }}><motion.div className="h-full bg-netwave-cyan" /></motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center px-6 md:px-20 pt-20 overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-netwave-cyan/5 blur-[100px] md:blur-[150px] -z-10" />
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1 border border-white/10 rounded-full mb-8 bg-white/5"><span className="text-netwave-cyan text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white">⚡ LLC-Standard Digital Agency</span></motion.div>
          <div className="relative h-[80px] md:h-[150px] mb-8 flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait"><motion.h1 key={heroSlides[slideIndex]} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-[80px] font-black uppercase italic leading-none tracking-tighter text-white">{heroSlides[slideIndex]}.</motion.h1></AnimatePresence>
          </div>
          <motion.p className="max-w-xl text-gray-400 text-sm md:text-xl mb-12 leading-relaxed border-l-4 border-netwave-cyan pl-6 font-bold text-white uppercase">A premier technology partner engineering high-performance ecosystems.</motion.p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-white"><button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase text-[10px] hover:bg-netwave-cyan transition-colors">Our Expertise</button><button onClick={scrollToContact} className="border border-white/20 px-8 py-4 rounded-xl font-black uppercase text-[10px] hover:bg-white/5 transition-colors text-white">Contact</button></div>
        </div>
        <InteractiveWorld />
      </div>
    </section>

    {/* 1. SERVICES GRID */}
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-white border-t border-white/5">
      <motion.div className="mb-16 md:mb-20 text-center lg:text-left"><h2 className="text-netwave-cyan font-mono uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 italic text-white">Core Capabilities</h2><h3 className="text-4xl md:text-8xl font-black italic uppercase leading-none text-white">Engineering<br />The Future.</h3></motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, i) => (
          <Link key={i} to={`/service/${s.id}`}><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="p-8 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:border-netwave-cyan/50 transition-all group relative overflow-hidden h-full text-white"><div className="absolute -right-4 -top-4 w-24 h-24 bg-netwave-cyan/5 blur-3xl group-hover:bg-netwave-cyan/10 transition-colors" /><div className="text-netwave-cyan mb-6 md:mb-8 group-hover:scale-110 transition-transform">{s.icon}</div><h4 className="text-xl md:text-2xl font-black mb-4 italic uppercase tracking-tighter text-white">{s.title}</h4><p className="text-gray-500 text-[10px] md:text-sm leading-relaxed uppercase font-bold tracking-widest text-white">{s.desc}</p></motion.div></Link>
        ))}
      </div>
    </section>

    {/* 2. INFRASTRUCTURE */}
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative overflow-hidden text-white">
      <div className="absolute -right-20 top-1/2 w-96 h-96 bg-netwave-cyan/5 blur-[120px] rounded-full" />
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-netwave-cyan font-mono uppercase tracking-[0.4em] text-sm mb-4 italic text-white">Infrastructure</h2>
          <h3 className="text-5xl md:text-7xl font-black italic uppercase mb-8 tracking-tighter text-white">Global Fiber backbone.</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 uppercase font-bold tracking-widest leading-relaxed border-l-4 border-netwave-cyan pl-6">Our Tier-1 network architecture is engineered for zero-latency performance. We provide the foundational data pathways for modern digital commerce.</p>
          <div className="space-y-6">
            {[{ label: "End-to-End Encryption", val: "Enterprise Grade" }, { label: "Network Availability", val: "99.99% Uptime" }, { label: "Monitoring", val: "24/7 Global" }].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-xs uppercase tracking-widest font-bold text-gray-500">{item.label}</span>
                <span className="text-xs uppercase tracking-widest font-black text-netwave-cyan">{item.val}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-[#0a0a0a] p-2 rounded-[3rem] border border-white/5 overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-netwave-cyan/10 to-transparent flex items-center justify-center relative group">
            <Globe className="w-32 h-32 text-netwave-cyan/20 group-hover:text-netwave-cyan/40 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border border-netwave-cyan/5 rounded-full animate-ping" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* 3. WEB & SOFTWARE */}
    <section className="py-32 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-netwave-cyan font-mono uppercase text-sm mb-4 italic text-white">Elite Engineering</h2>
          <h3 className="text-5xl font-black italic uppercase text-white mb-8 tracking-tighter leading-none">Web & <br />App Development.</h3>
          <p className="text-gray-400 text-lg uppercase font-bold mb-8 leading-relaxed border-l-4 border-netwave-cyan pl-6">Architecting complex custom software and high-performance applications with modern tech stacks like Next.js and Python.</p>
          <Link to="/service/web-dev" className="bg-white text-black px-10 py-4 rounded-xl font-black uppercase text-[10px] hover:bg-netwave-cyan transition-all inline-block shadow-2xl">View Expertise</Link>
        </div>
        <div className="order-1 lg:order-2 relative rounded-[3rem] overflow-hidden border border-white/10 aspect-video group">
          <img src="https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Software" />
        </div>
      </div>
    </section>

    {/* 4. MARKETING SECTION */}
    <section className="bg-white/5 py-32 text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-video group">
          <img src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Marketing" />
        </div>
        <div>
          <h2 className="text-netwave-cyan font-mono uppercase text-sm mb-4 italic text-white">Marketing Mastery</h2>
          <h3 className="text-5xl font-black italic uppercase text-white mb-8 tracking-tighter leading-none">Growth <br />Dominance.</h3>
          <p className="text-gray-400 text-lg uppercase font-bold mb-8 leading-relaxed border-l-4 border-netwave-cyan pl-6">We utilize deep analytics and high-conversion strategies to scale your brand presence globally.</p>
          <div className="grid grid-cols-2 gap-6">
            <div><h4 className="text-netwave-cyan font-black text-2xl italic">ROI</h4><p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Focused Campaigns</p></div>
            <div><h4 className="text-netwave-cyan font-black text-2xl italic">DATA</h4><p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Driven Analysis</p></div>
          </div>
        </div>
      </div>
    </section>

    {/* 6. Methodology Section */}
    <section className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <h2 className="text-netwave-cyan font-mono uppercase tracking-[0.4em] text-sm mb-4 italic text-white">Our Methodology</h2>
          <h3 className="text-5xl md:text-7xl font-black italic uppercase leading-none text-white">How We Lead Projects to Success.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[{ step: "01", title: "Strategic Discovery", desc: "Uncovering your core business DNA to align technical architecture." }, { step: "02", title: "Blueprint Stage", desc: "Architecting a high-precision roadmap engineered for massive scalability." }, { step: "03", title: "Elite Engineering", desc: "Crafting pixel-perfect, high-performance systems with rigorous quality." }, { step: "04", title: "Market Dominance", desc: "Seamless deployment followed by 24/7 hyper-optimization." }].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} className="relative group text-white">
              <div className="text-6xl font-black text-white/5 group-hover:text-netwave-cyan/20 transition-colors absolute -top-8 -left-4 italic"> {item.step}</div>
              <h4 className="text-xl font-black uppercase italic mb-4 relative z-10 tracking-tighter text-white">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed uppercase font-bold tracking-widest text-white">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 6. CORE VALUES (4 BOXES) */}
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: <ShieldCheck className="w-10 h-10" />, title: "Secure", desc: "Enterprise Protection" },
          { icon: <Zap className="w-10 h-10" />, title: "Fast", desc: "Zero Latency Build" },
          { icon: <Activity className="w-10 h-10" />, title: "Stable", desc: "99.9% Infrastructure" },
          { icon: <Fingerprint className="w-10 h-10" />, title: "Unique", desc: "Custom Tailored Code" }
        ].map((v, i) => (
          <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-netwave-cyan/50 transition-all text-center">
            <div className="text-netwave-cyan mb-6 flex justify-center">{v.icon}</div>
            <h4 className="text-xl font-black uppercase italic text-white mb-2">{v.title}</h4>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 7. STATS */}
    <section className="bg-white/5 py-12 md:py-32 border-y border-white/5 backdrop-blur-3xl text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center text-white">
        {[{ l: "Success Rate", v: "99%" }, { l: "ROI", v: "3.5x" }, { l: "Reach", v: "Global" }, { l: "Support", v: "24/7" }].map((st, i) => (
          <div key={i}><h4 className="text-2xl md:text-5xl font-black italic text-netwave-cyan mb-2 md:mb-4 uppercase text-white">{st.v}</h4><p className="text-[8px] md:text-[11px] text-gray-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-white">{st.l}</p></div>
        ))}
      </div>
    </section>

    {/* 8. TESTIMONIALS */}
    <section className="max-w-7xl mx-auto px-6 py-32 text-white">
      <div className="text-center mb-20">
        <h2 className="text-netwave-cyan font-mono uppercase text-sm italic mb-4">Reviews</h2>
        <h3 className="text-5xl font-black uppercase italic">Client Trust.</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {[1, 2].map((i) => (
          <div key={i} className="bg-[#0a0a0a] p-12 rounded-[3rem] border border-white/5 relative">
            <Quote size={40} className="text-netwave-cyan/20 absolute top-8 right-8" />
            <p className="text-gray-400 text-lg uppercase font-bold italic mb-8 leading-relaxed text-white">"The level of technical precision provided by Netwave Solution exceeded our global expectations."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full" />
              <div><p className="font-black uppercase italic text-white">Technical Director</p><p className="text-netwave-cyan text-[10px] font-bold uppercase tracking-widest">Global Corp</p></div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* 9. INQUIRY */}
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 md:py-40 text-white border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
        <div className="text-center lg:text-left text-white"><h2 className="text-netwave-cyan font-mono uppercase tracking-widest mb-6 italic text-white">Inquiry</h2><h3 className="text-5xl md:text-[100px] font-black italic uppercase mb-12 leading-[0.8] tracking-tighter text-white">Build<br />Your Vision.</h3></div>
        <motion.form initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#0a0a0a] p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] border border-white/5 space-y-8 text-white" onSubmit={handleSubmit}>
          <input name="first_name" type="text" placeholder="FIRST NAME" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-netwave-cyan outline-none transition uppercase text-[10px] md:text-xs tracking-widest italic text-white font-bold" required />
          <input name="last_name" type="text" placeholder="LAST NAME" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-netwave-cyan outline-none transition uppercase text-[10px] md:text-xs tracking-widest italic text-white font-bold" />
          <input name="email" type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-netwave-cyan outline-none transition uppercase text-[10px] md:text-xs tracking-widest italic text-white" required />
          <textarea name="message" rows="4" placeholder="PROJECT BRIEF" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-netwave-cyan outline-none transition uppercase text-[10px] md:text-xs tracking-widest italic text-white" required></textarea>
          <button type="submit" className="w-full bg-white text-black font-black py-5 md:py-6 rounded-2xl md:rounded-3xl uppercase tracking-widest text-[10px] hover:bg-netwave-cyan transition-all shadow-2xl italic">Send Inquiry →</button>
        </motion.form>
      </div>
    </section>
  </>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [isMobServicesOpen, setIsMobServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { const timer = setTimeout(() => setLoading(false), 3500); return () => clearTimeout(timer); }, []);
  useEffect(() => { if (!loading) { const interval = setInterval(() => { setSlideIndex((prev) => (prev + 1) % heroSlides.length); }, 3000); return () => clearInterval(interval); } }, [loading]);
  const scrollToContact = () => { const section = document.getElementById('contact'); if (section) section.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-netwave-cyan selection:text-black scroll-smooth overflow-x-hidden text-white">
      <ScrollToTop />
      <nav className="fixed w-full z-[80] bg-black/40 backdrop-blur-2xl border-b border-white/5 text-white">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center text-white">
          <Link to="/" className="flex items-center gap-4 group cursor-pointer text-white">
            <img src="/logo.png" alt="Netwave" className="h-14 md:h-24 w-auto object-contain transition-all hover:scale-110 text-white" />
            <div className="flex flex-col leading-none text-white"><span className="text-lg md:text-2xl font-black italic uppercase text-white">Netwave</span><span className="text-netwave-cyan text-[7px] md:text-[9px] uppercase tracking-[0.4em] font-bold text-white">Solution</span></div>
          </Link>
          <div className="hidden lg:flex items-center gap-10 text-white">
            <Link to="/" className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-netwave-cyan transition-all text-white">Home</Link>
            <div className="relative h-full py-2 cursor-pointer text-white" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-bold hover:text-netwave-cyan transition-all italic text-white">Services <ChevronDown size={12} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} /></div>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 shadow-2xl backdrop-blur-3xl text-white">
                    <div className="grid grid-cols-2 gap-6 text-white">
                      {services.map((s, idx) => (
                        <Link key={idx} to={`/service/${s.id}`} onClick={() => setIsServicesOpen(false)} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 group transition-all text-white">
                          <div className="text-netwave-cyan scale-75 group-hover:scale-90 transition-transform text-white" />
                          <div className="text-white"><div className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-netwave-cyan">{s.title}</div><div className="text-[9px] text-gray-500 mt-1 uppercase tracking-tighter text-white">Premium Solutions</div></div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/about" className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-netwave-cyan transition-all text-white">About</Link>
            <Link to="/contact" className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-netwave-cyan transition-all uppercase italic text-white">Contact</Link>
          </div>
          <div className="flex items-center gap-4 text-white">
            <button onClick={scrollToContact} className="hidden md:block bg-white text-black px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-netwave-cyan transition-all italic shadow-xl">Get Quote</button>
            <button onClick={() => setIsMobMenuOpen(true)} className="lg:hidden text-white p-2 text-white"><Menu size={28} /></button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobMenuOpen(false)} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] text-white" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-y-0 right-0 w-[75%] md:w-[400px] bg-[#080808] z-[100] p-8 border-l border-white/5 shadow-2xl flex flex-col text-white">
              <button onClick={() => setIsMobMenuOpen(false)} className="self-end p-2 text-gray-500 hover:text-netwave-cyan transition-colors text-white"><X size={24} /></button>
              <div className="flex flex-col gap-6 mt-12 text-white">
                <Link to="/" onClick={() => setIsMobMenuOpen(false)} className="text-lg font-black italic uppercase tracking-widest text-white hover:text-netwave-cyan transition-all text-white">Home</Link>
                <div className="border-y border-white/5 py-4 text-white">
                  <button onClick={() => setIsMobServicesOpen(!isMobServicesOpen)} className="text-lg font-black italic uppercase tracking-widest text-white flex items-center justify-between w-full hover:text-netwave-cyan transition-all text-white">Services <ChevronDown size={18} className={`transition-transform duration-300 ${isMobServicesOpen ? "rotate-180" : ""}`} /></button>
                  <AnimatePresence>{isMobServicesOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 mt-4 space-y-4 border-l border-netwave-cyan/20 text-white">{services.map(s => (<Link key={s.id} to={`/service/${s.id}`} onClick={() => setIsMobMenuOpen(false)} className="block text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] hover:text-netwave-cyan transition-colors text-white">{s.title}</Link>))}</motion.div>)}</AnimatePresence>
                </div>
                <Link to="/about" onClick={() => setIsMobMenuOpen(false)} className="text-lg font-black italic uppercase tracking-widest text-white hover:text-netwave-cyan transition-all text-white">About</Link>
                <Link to="/contact" onClick={() => setIsMobMenuOpen(false)} className="text-xl font-black italic uppercase tracking-widest text-left text-white hover:text-netwave-cyan transition-all text-white">Contact</Link>
                <button onClick={() => { setIsMobMenuOpen(false); scrollToContact(); }} className="group flex items-center justify-between bg-white text-black py-4 px-6 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] mt-8 shadow-xl hover:bg-netwave-cyan transition-all active:scale-95 text-black shadow-2xl"><span>Get a Quote</span><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-black" /></button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<MainPage loading={loading} slideIndex={slideIndex} scrollToContact={scrollToContact} />} />
        {services.map(s => (<Route key={s.id} path={`/service/${s.id}`} element={<ServicePage id={s.id} title={s.title} navigate={navigate} />} />))}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <footer className="bg-[#030303] pt-24 pb-12 border-t border-white/5 text-white">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-white">
          <div className="col-span-1 text-center lg:text-left text-white"><Link to="/"><img src="/logo.png" className="h-24 md:h-32 w-auto mb-8 mx-auto lg:mx-0 object-contain text-white" alt="Netwave Solution" /></Link><p className="text-gray-500 text-[10px] leading-relaxed max-w-xs uppercase tracking-tighter italic font-medium mx-auto lg:mx-0 text-white">Elite digital infrastructure and software engineering globally.</p></div>
          <div className="text-center lg:text-left text-white"><h5 className="text-netwave-cyan font-black mb-6 uppercase tracking-[0.3em] text-[10px] italic text-white">Expertise</h5><ul className="text-gray-400 space-y-4 text-[10px] font-bold uppercase tracking-widest text-white">{services.map(s => <li key={s.id}><Link to={`/service/${s.id}`} className="hover:text-white transition uppercase text-white">{s.title}</Link></li>)}</ul></div>
          <div className="text-center lg:text-left text-white"><h5 className="text-netwave-cyan font-black mb-6 uppercase tracking-[0.3em] text-[10px] italic text-white">Corporate</h5><ul className="text-gray-400 space-y-4 text-[10px] font-bold uppercase tracking-widest text-white"><li><Link to="/about" className="hover:text-white transition text-white">About Netwave</Link></li><li><Link to="/contact" className="hover:text-white uppercase transition tracking-widest text-white">Contact Us</Link></li><li><Link to="/" className="hover:text-white transition text-white">Home Page</Link></li></ul></div>
          <div id="contact-info" className="text-white"><h5 className="text-netwave-cyan font-black mb-8 uppercase tracking-[0.3em] text-[10px] italic text-white">Contact </h5><div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold uppercase transition hover:text-white tracking-widest italic leading-relaxed break-all text-white"><Mail size={14} className="text-netwave-cyan text-white" /><span>info@netwavesolution.com</span></div></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 pt-12 border-t border-white/5 text-center text-white"><p className="text-gray-700 text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-bold italic text-white">&copy;  Netwave Solution . All Rights Reserved.</p></div>
      </footer>
    </div>
  );
}

// Wrap in Router for the whole App
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
