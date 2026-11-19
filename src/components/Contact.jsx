import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  FileText,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Pesan Portfolio dari ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Halo Aiza El Diana,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    );
    window.open(
      `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`,
      '_blank'
    );
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Mari <span className="text-[#2c67ed]">Terhubung</span> & Berkolaborasi
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Terbuka untuk peluang magang (internship) di bidang Finance, Accounting, Perbankan Syariah, kolaborasi riset ekonomi, maupun undangan pembicara.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Social & Direct Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          <div className="space-card rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Informasi Kontak & Sosial Media
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Jangan ragu untuk menghubungi saya secara langsung melalui LinkedIn, Email, atau WhatsApp untuk diskusi lebih lanjut.
              </p>

              <div className="space-y-4">
                {/* LinkedIn */}
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#070b14]/90 border border-slate-800 hover:border-[#2c67ed] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 flex items-center justify-center text-[#5b8ef5] group-hover:bg-[#2c67ed] group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">LinkedIn Profile</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#5b8ef5] transition-colors">
                        Aiza El Diana Suprayogi
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#5b8ef5]" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#070b14]/90 border border-slate-800 hover:border-[#2c67ed] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 flex items-center justify-center text-[#5b8ef5] group-hover:bg-[#2c67ed] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email Resmi</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#5b8ef5] transition-colors">
                        {profileData.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#5b8ef5]" />
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href="https://wa.me/6281398721976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#070b14]/90 border border-slate-800 hover:border-[#2c67ed] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 flex items-center justify-center text-[#5b8ef5] group-hover:bg-[#2c67ed] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Telepon / WhatsApp</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#5b8ef5] transition-colors">
                        {profileData.phone}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#5b8ef5]" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#070b14]/90 border border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 flex items-center justify-center text-[#5b8ef5]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Domisili</div>
                    <div className="text-sm font-semibold text-white">{profileData.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV Card Banner */}
            <div className="mt-6 pt-6 border-t border-slate-800/80">
              <a
                href={profileData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-[#2c67ed]/20 hover:bg-[#2c67ed] border border-[#2c67ed]/50 text-[#5b8ef5] hover:text-white font-semibold text-sm transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                <span>Lihat & Unduh Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="space-card rounded-3xl p-6 sm:p-8 h-full">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Kirim Pesan Langsung
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Isi formulir di bawah ini untuk mengirimkan pesan penawaran magang, proyek finansial, atau kolaborasi riset.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-slate-800 focus:border-[#2c67ed] focus:outline-none focus:ring-2 focus:ring-[#2c67ed]/30 text-sm text-white placeholder-slate-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-slate-800 focus:border-[#2c67ed] focus:outline-none focus:ring-2 focus:ring-[#2c67ed]/30 text-sm text-white placeholder-slate-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Subjek / Keperluan
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Contoh: Tawaran Internship Finance & Accounting / Kolaborasi Riset"
                  className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-slate-800 focus:border-[#2c67ed] focus:outline-none focus:ring-2 focus:ring-[#2c67ed]/30 text-sm text-white placeholder-slate-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Pesan Anda
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan detail pesan atau kolaborasi yang ingin didiskusikan..."
                  className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-slate-800 focus:border-[#2c67ed] focus:outline-none focus:ring-2 focus:ring-[#2c67ed]/30 text-sm text-white placeholder-slate-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#2c67ed] hover:bg-[#1d4ed8] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(44,103,237,0.6)] hover:shadow-[0_0_35px_rgba(44,103,237,0.85)]"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Membuka Aplikasi Email Anda...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
