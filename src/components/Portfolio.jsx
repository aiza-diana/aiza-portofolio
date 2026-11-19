import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Award,
  Wrench,
  ExternalLink,
  Eye,
  CheckCircle2,
  X,
  FileSpreadsheet,
  Database,
  Landmark,
  CreditCard,
} from 'lucide-react';
import GlassFolderCards from './GlassFolderCards';
import GlassFolderCards2 from './GlassFolderCards2';
import { portfolioTabs } from '../data/portfolioData';

const tabs = [
  {
    id: 'businessCases',
    label: 'Business Cases & Projects',
    icon: Briefcase,
    count: portfolioTabs.businessCases.length,
  },
  {
    id: 'awards',
    label: 'Awards & Certificates',
    icon: Award,
    count: portfolioTabs.awards.length,
  },
  {
    id: 'financialTools',
    label: 'Financial Tools',
    icon: Wrench,
    count: portfolioTabs.financialTools.length,
  },
];

const getToolIcon = (id) => {
  switch (id) {
    case 'excel':
      return FileSpreadsheet;
    case 'accurate':
      return Database;
    case 'csbo':
      return Landmark;
    case 'iba-teller':
      return CreditCard;
    default:
      return Wrench;
  }
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('businessCases');
  const [previewModal, setPreviewModal] = useState(null);

  return (
    <section id="portfolio" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c67ed]/15 border border-[#2c67ed]/40 text-[#5b8ef5] text-xs font-semibold uppercase tracking-wider mb-4">
          <span>Featured Works & Credentials</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Eksplorasi <span className="text-[#2c67ed]">Portfolio</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Kumpulan studi kasus bisnis, rancangan HPP & budgeting, riset ANP/AHP ekonomi syariah, penghargaan nasional, serta penguasaan software keuangan & perbankan.
        </p>
      </motion.div>

      {/* Tab Selector Bar */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-[#070b14]/90 border border-[#2c67ed]/35 shadow-[0_0_25px_rgba(44,103,237,0.2)] backdrop-blur-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                    className="absolute inset-0 rounded-xl bg-[#2c67ed] shadow-[0_0_20px_rgba(44,103,237,0.75)] -z-10"
                  />
                )}
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Area */}
      <AnimatePresence mode="wait">
        {/* TAB 1: BUSINESS CASES & PROJECTS */}
        {activeTab === 'businessCases' && (
          <motion.div
            key="businessCases"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-7"
          >
            {portfolioTabs.businessCases.map((project) => (
              <div
                key={project.id}
                className="space-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#2c67ed]/20 border border-[#2c67ed]/40 text-[#5b8ef5] text-xs font-semibold">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-slate-300 bg-[#070b14] border border-slate-800 px-3 py-1 rounded-full">
                      {project.highlightMetric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#5b8ef5] transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#5b8ef5] mb-4">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-2 mb-6">
                    {project.keyPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#2c67ed] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Metrics Mini Grid */}
                  <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-[#070b14]/90 border border-slate-800/90 mb-5">
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-[11px] text-slate-400">{m.label}</div>
                        <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Action */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {project.documentUrl && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setPreviewModal({
                              title: project.title,
                              subtitle: project.subtitle,
                              url: project.documentUrl,
                              type: 'pdf',
                            })
                          }
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2c67ed]/20 hover:bg-[#2c67ed] text-[#5b8ef5] hover:text-white border border-[#2c67ed]/40 text-xs font-semibold transition-all"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview Dokumen</span>
                        </button>
                        <a
                          href={project.documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                          title="Buka PDF di Tab Baru"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <GlassFolderCards />
          </motion.div>
        )}

        {/* TAB 2: AWARDS & CERTIFICATES */}
        {activeTab === 'awards' && (
          <motion.div
            key="awards"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioTabs.awards.map((award) => (
              <div
                key={award.id}
                className="space-card rounded-3xl p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Preview Thumbnail or Badge Banner */}
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-[#070b14] border border-slate-800 mb-5 flex items-center justify-center">
                    {award.previewType === 'image' ? (
                      <img
                        src={award.previewUrl}
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-center p-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 flex items-center justify-center text-[#5b8ef5] mx-auto mb-3 shadow-[0_0_20px_rgba(44,103,237,0.4)]">
                          <Award className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-mono text-[#5b8ef5] uppercase tracking-wider">
                          Official Certificate PDF
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#03050a]/90 border border-[#2c67ed]/50 text-[#5b8ef5] text-[11px] font-semibold backdrop-blur-md">
                        {award.badge}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#03050a]/90 border border-slate-700 text-slate-300 text-[11px] font-mono">
                        {award.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#5b8ef5] transition-colors mb-1.5">
                    {award.title}
                  </h3>
                  <div className="text-xs font-medium text-[#5b8ef5] mb-3">
                    {award.issuer}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {award.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() =>
                      setPreviewModal({
                        title: award.title,
                        subtitle: award.issuer,
                        url: award.previewUrl,
                        type: award.previewType,
                      })
                    }
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2c67ed]/20 hover:bg-[#2c67ed] text-[#5b8ef5] hover:text-white border border-[#2c67ed]/40 text-xs font-semibold transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Sertifikat</span>
                  </button>
                  <a
                    href={award.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    title="Buka File Sertifikat"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
            <GlassFolderCards2 />
          </motion.div>
        )}

        {/* TAB 3: FINANCIAL TOOLS */}
        {activeTab === 'financialTools' && (
          <motion.div
            key="financialTools"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {portfolioTabs.financialTools.map((tool) => {
                const IconComponent = getToolIcon(tool.id);
                return (
                  <div
                    key={tool.id}
                    className="space-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 flex items-center justify-center text-[#5b8ef5] shadow-[0_0_20px_rgba(44,103,237,0.35)] group-hover:bg-[#2c67ed] group-hover:text-white transition-all">
                            <IconComponent className="w-7 h-7" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-display text-xl font-bold text-white">
                                {tool.name}
                              </h3>
                              <span className="px-2.5 py-0.5 rounded-full bg-[#2c67ed]/20 border border-[#2c67ed]/40 text-[#5b8ef5] text-[11px] font-semibold">
                                {tool.badge}
                              </span>
                            </div>
                            {tool.fullName && (
                              <div className="text-xs text-slate-400 mt-0.5">{tool.fullName}</div>
                            )}
                            <div className="text-xs font-medium text-[#5b8ef5] mt-0.5">
                              {tool.category}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {tool.description}
                      </p>

                      {/* Capabilities Pills */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {tool.capabilities.map((cap, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#070b14]/85 border border-slate-800 text-xs text-slate-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2c67ed] shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-slate-400">Tingkat Penguasaan Operasional</span>
                        <span className="font-mono font-semibold text-[#5b8ef5]">{tool.level}</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tool.percentage}%` }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-[#2c67ed] to-[#38bdf8] shadow-[0_0_12px_#2c67ed]"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Supporting Skills & Competencies Bar */}
            <div className="space-card rounded-3xl p-6 sm:p-8 text-center">
              <h4 className="font-display text-lg font-bold text-white mb-2">
                Kompetensi Pendukung & Bahasa
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mb-5">
                Instrumen analisis tambahan, standar akuntansi syariah, desain presentasi, dan komunikasi multibahasa
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {portfolioTabs.supportingSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-[#070b14] border border-[#2c67ed]/35 text-xs sm:text-sm text-slate-200 hover:border-[#2c67ed] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Certificate / PDF Preview */}
      <AnimatePresence>
        {previewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setPreviewModal(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-[#070b14] border border-[#2c67ed]/50 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(44,103,237,0.4)]"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <div>
                  <h4 className="font-display font-bold text-white text-base sm:text-lg">
                    {previewModal.title}
                  </h4>
                  <p className="text-xs text-[#5b8ef5]">{previewModal.subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={previewModal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2c67ed] text-white text-xs font-semibold"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka Penuh</span>
                  </a>
                  <button
                    onClick={() => setPreviewModal(null)}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-4 bg-[#03050a] max-h-[78vh] overflow-auto flex items-center justify-center">
                {previewModal.type === 'image' ? (
                  <img
                    src={previewModal.url}
                    alt={previewModal.title}
                    className="max-h-[72vh] w-auto rounded-xl object-contain"
                  />
                ) : (
                  <iframe
                    src={previewModal.url}
                    title={previewModal.title}
                    className="w-full h-[70vh] rounded-xl border border-slate-800"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
