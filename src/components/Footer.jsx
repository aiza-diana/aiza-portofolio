import React from 'react';
import { Linkedin, Mail, FileText } from 'lucide-react';
import { profileData } from '../data/portfolioData';
const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#03050a]/90 backdrop-blur-lg py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="font-display font-semibold text-sm text-white">
            {profileData.fullName}
          </span>
          <span className="text-xs text-slate-500">• Finance & Islamic Banking Portfolio</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5b8ef5] flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#2c67ed]" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="hover:text-[#5b8ef5] flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#2c67ed]" />
            <span>Email</span>
          </a>
          <a
            href={profileData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5b8ef5] flex items-center gap-1.5 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#2c67ed]" />
            <span>CV PDF</span>
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {profileData.name}. Built with React, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
