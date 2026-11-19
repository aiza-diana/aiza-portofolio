import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  BarChart3,
  CheckCircle2,
  MapPin,
  Briefcase,
  Radio,
} from 'lucide-react';
import {
  profileData,
  educationData,
  leadershipData,
  analyticsStats,
} from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Profil, Pendidikan & <span className="text-[#2c67ed]">Kepemimpinan</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Perpaduan kompetensi analitis keuangan syariah, akuntansi terkomputerisasi, serta pengalaman memimpin organisasi dan proyek anggaran berskala kampus maupun nasional.
        </p>
      </motion.div>

      {/* Top Grid: Profile Photo Card + Education & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
        {/* Left: Professional Photo Card */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="space-card rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#2c67ed]/25 blur-3xl pointer-events-none" />

            <div>
              {/* Profile Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2c67ed]/50 shadow-[0_0_30px_rgba(44,103,237,0.35)] aspect-[4/4.6] mb-6 bg-[#070b14]">
                <img
                  src={profileData.photoUrl}
                  alt={profileData.fullName}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03050a] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#2c67ed] text-white text-xs font-semibold shadow-lg mb-1.5">
                      Google Student Ambassador &apos;25
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      {profileData.fullName}
                    </h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#5b8ef5]" />
                      {profileData.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Identity Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Mahasiswa aktif <strong className="text-white">D4 Keuangan dan Perbankan Syariah</strong> di{' '}
                <strong className="text-[#5b8ef5]">Politeknik Negeri Jakarta</strong> dengan IPK{' '}
                <strong className="text-white">3,71 / 4,00</strong>. Terbiasa menyusun Rencana Anggaran Biaya (RAB), menghitung HPP, mencatat transaksi akuntansi, serta merancang analisis riset berbasis metode ANP/AHP dan Single Index Model.
              </p>
            </div>

            {/* Key Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-[#070b14]/90 border border-slate-800">
                <div className="text-xs text-slate-400">Program Studi</div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  D4 Keuangan & Bank Syariah
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#070b14]/90 border border-slate-800">
                <div className="text-xs text-slate-400">Fokus Utama</div>
                <div className="text-sm font-semibold text-[#5b8ef5] mt-0.5">
                  Finance, Audit & Riset
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Education & Leadership Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Education Card */}
          <div className="space-card rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 flex items-center justify-center text-[#5b8ef5] shadow-[0_0_15px_rgba(44,103,237,0.35)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Riwayat Pendidikan</h3>
                <p className="text-xs text-slate-400">Academic Background & Qualifications</p>
              </div>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-[#2c67ed]/50 pb-2 last:pb-0"
                >
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#03050a] border-2 border-[#2c67ed] shadow-[0_0_10px_#2c67ed]" />
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="font-display text-base sm:text-lg font-bold text-white">
                      {edu.institution}
                    </h4>
                    <span className="px-3 py-1 rounded-full bg-[#2c67ed]/20 border border-[#2c67ed]/40 text-[#5b8ef5] text-xs font-mono font-semibold">
                      {edu.gpa}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#5b8ef5] mb-1">{edu.degree}</div>
                  <div className="text-xs text-slate-400 mb-3">{edu.period}</div>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2c67ed] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Organization Card */}
          <div className="space-card rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 flex items-center justify-center text-[#5b8ef5] shadow-[0_0_15px_rgba(44,103,237,0.35)]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Riwayat Kepemimpinan & Organisasi
                </h3>
                <p className="text-xs text-slate-400">
                  Station Manager Poros FM, Google Student Ambassador & Bendahara Umum
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {leadershipData.map((lead, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#070b14]/85 border border-slate-800/90 hover:border-[#2c67ed]/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2c67ed]/15 border border-[#2c67ed]/40 text-[#5b8ef5] text-[11px] font-semibold">
                        {lead.badge}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">{lead.period}</span>
                    </div>
                    <h4 className="font-display font-bold text-white text-base flex items-center gap-1.5">
                      {lead.role.includes('Poros') ? (
                        <Radio className="w-4 h-4 text-[#2c67ed] shrink-0" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-[#2c67ed] shrink-0" />
                      )}
                      {lead.role}
                    </h4>
                    <div className="text-xs font-medium text-[#5b8ef5] mb-2">
                      {lead.organization}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {lead.description}
                    </p>
                  </div>
                  <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Impact Metric</span>
                    <span className="font-mono font-semibold text-white">{lead.metrics}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Financial Analysis & Budgeting Project Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-card rounded-3xl p-6 sm:p-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 flex items-center justify-center text-[#5b8ef5] shadow-[0_0_15px_rgba(44,103,237,0.35)]">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Statistik Analisis Keuangan & Budgeting Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Rekam jejak kuantitatif pengelolaan anggaran, akurasi pelaporan LPJ, dan riset finansial
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2c67ed]/15 border border-[#2c67ed]/40 text-xs font-mono text-[#5b8ef5]">
            <span className="w-2 h-2 rounded-full bg-[#2c67ed] animate-ping" />
            Verified Track Record
          </span>
        </div>

        {/* Summary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {analyticsStats.summaryCards.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#070b14]/90 border border-slate-800 hover:border-[#2c67ed]/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400">{stat.label}</span>
                <span className="px-2 py-0.5 rounded-md bg-[#2c67ed]/20 text-[#5b8ef5] text-[10px] font-mono font-semibold">
                  {stat.trend}
                </span>
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Interactive Progress Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analyticsStats.budgetBreakdown.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#070b14]/75 border border-slate-800/80"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#5b8ef5]">
                    {item.category}
                  </span>
                  <h4 className="font-display font-semibold text-white text-sm sm:text-base">
                    {item.project}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm font-bold text-white bg-[#2c67ed]/20 border border-[#2c67ed]/40 px-2.5 py-1 rounded-lg">
                    {item.budget}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-3">{item.details}</p>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.accuracy}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#2c67ed] to-[#38bdf8] shadow-[0_0_12px_#2c67ed]"
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                <span>Efisiensi & Akuntabilitas</span>
                <span className="text-[#5b8ef5] font-semibold">{item.accuracy}%</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
