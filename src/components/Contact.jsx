import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, User, Mail, MessageSquare, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#6366f1', '#8b5cf6', '#38bdf8', '#10b981']
      });

      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/10 bg-[#07080c] overflow-hidden">
      
      {/* Soft Ambient Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 max-w-3xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mx-auto mb-12">
          <div className="section-tag justify-center mb-3" data-cursor-text="MESSAGE">
            <span className="section-tag-dot bg-emerald-400" />
            <span>07 // CONTACT</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-3">
            Send a <span className="text-gradient-accent interactive-word" data-cursor-text="MESSAGE">Message</span>
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
            Have a project idea, question, or engineering opportunity? Leave a message below and I'll get back to you directly.
          </p>
        </div>

        {/* Centered Message Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0f121e]/95 backdrop-blur-xl border border-white/12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 px-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center flex flex-col items-center gap-3.5 my-auto"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-xl shadow-emerald-500/20">
                <Sparkles size={28} />
              </div>
              <h4 className="font-display font-black text-xl text-white">
                Message Sent Successfully!
              </h4>
              <p className="text-sm text-zinc-300 max-w-sm leading-relaxed">
                Thank you for reaching out, your message has been received and Veerabathini Vishwateja will respond to your email shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                    <User size={13} className="text-indigo-400" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090a12] border border-white/10 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:outline-none text-sm text-white placeholder-zinc-600 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                    <Mail size={13} className="text-indigo-400" />
                    <span>Your Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090a12] border border-white/10 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:outline-none text-sm text-white placeholder-zinc-600 transition-all"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                  <Tag size={13} className="text-sky-400" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Discussion"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#090a12] border border-white/10 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:outline-none text-sm text-white placeholder-zinc-600 transition-all"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                  <MessageSquare size={13} className="text-purple-400" />
                  <span>Your Message *</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#090a12] border border-white/10 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 focus:outline-none text-sm text-white placeholder-zinc-600 resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary py-4 mt-2 flex items-center justify-center gap-2.5 font-display font-bold text-xs tracking-wider shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 uppercase transition-all"
                data-cursor="contact"
                data-cursor-text="SEND"
              >
                {isSubmitting ? (
                  <span>SENDING MESSAGE...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE TO VISHWATEJA</span>
                    <Send size={15} />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
