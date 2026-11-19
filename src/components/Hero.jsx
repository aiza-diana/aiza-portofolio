import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Award, TrendingUp, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profileData.roles[roleIndex];
    const typingSpeed = isDeleting ? 42 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % profileData.roles.length);
      } else {
        setDisplayedText(
          currentRole.substring(0, displayedText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] sm:w-[760px] sm:h-[760px] rounded-full border border-[#2c67ed]/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] rounded-full border border-dashed border-[#2c67ed]/20 pointer-events-none animate-[spin_90s_linear_infinite]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d1424]/90 border border-[#2c67ed]/40 shadow-[0_0_20px_rgba(44,103,237,0.3)] mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2c67ed] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2c67ed]" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-wide">
            D4 Keuangan & Perbankan Syariah • Politeknik Negeri Jakarta
          </span>
        </motion.div>

        {/* Main Display Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.08]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
            Aiza El Diana Suprayogi
          </span>
          <span
            className="inline-block ml-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#2c67ed]"
            style={{ boxShadow: '0 0 20px #2c67ed, 0 0 40px #2c67ed' }}
          />
        </motion.h1>

        {/* Typewriter Effect Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-12 sm:h-14 flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-2xl bg-[#070b14]/80 border border-[#2c67ed]/30 shadow-[0_0_25px_rgba(44,103,237,0.2)]">
            <span className="font-mono text-lg sm:text-2xl md:text-3xl font-semibold text-[#5b8ef5] tracking-tight">
              {displayedText}
            </span>
            <span className="ml-1 w-0.5 h-6 sm:h-8 bg-[#2c67ed] animate-pulse" />
          </div>
        </motion.div>

        {/* Bio Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300/90 leading-relaxed mb-10"
        >
          {profileData.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2c67ed] hover:bg-[#1d4ed8] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-[0_0_28px_rgba(44,103,237,0.65)] hover:shadow-[0_0_40px_rgba(44,103,237,0.9)] hover:-translate-y-0.5"
          >
            <span>Jelajahi Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={profileData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0d1424]/90 hover:bg-[#152038] text-slate-100 font-semibold text-sm sm:text-base border border-[#2c67ed]/40 hover:border-[#2c67ed] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-[#5b8ef5]" />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Quick Credential Pills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto"
        >
          <div className="space-card rounded-2xl p-4 flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/40 flex items-center justify-center text-[#5b8ef5] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Sertifikasi Profesi</div>
              <div className="text-sm font-semibold text-white">CAP Accurate (Nilai 100)</div>
            </div>
          </div>

          <div className="space-card rounded-2xl p-4 flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/40 flex items-center justify-center text-[#5b8ef5] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Prestasi Nasional</div>
              <div className="text-sm font-semibold text-white">Juara 3 TEMILNAS × UI</div>
            </div>
          </div>

          <div className="space-card rounded-2xl p-4 flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/40 flex items-center justify-center text-[#5b8ef5] shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Kepemimpinan Aktif</div>
              <div className="text-sm font-semibold text-white">GSA Google & Station Manager</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
