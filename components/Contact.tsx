import React, { useRef, useState } from 'react';
import { TranslationData } from '../types';
import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../constants';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
  t: TranslationData;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        if(form.current) form.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-cyan-500 font-bold tracking-widest text-2xl uppercase mb-3">{t.contactTitle}</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                START RECORDING?
              </span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-lg">
              {t.contactDescription}
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-400">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                        <Send size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">Email Us</p>
                        <p>contact@asrecstudio.com</p>
                    </div>
                </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-slate-950 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-2 ml-1">{t.formName}</label>
                <input 
                  type="text" 
                  name="Name" 
                  id="name"
                  placeholder={t.formNamePlaceholder}
                  required
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2 ml-1">{t.formEmail}</label>
                <input 
                  type="email" 
                  name="Email" 
                  id="email"
                  placeholder={t.formEmailPlaceholder}
                  required
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-400 mb-2 ml-1">{t.formSubject}</label>
                <input 
                  type="text" 
                  name="Subject" 
                  id="subject"
                  placeholder={t.formSubjectPlaceholder}
                  required
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-2 ml-1">{t.formMessage}</label>
                <textarea 
                  name="Message" 
                  id="message"
                  rows={4}
                  placeholder={t.formMessagePlaceholder}
                  required
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300 ${
                    status === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' :
                    status === 'error' ? 'bg-red-500 hover:bg-red-600 text-white' :
                    'bg-cyan-500 hover:bg-cyan-400 text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                }`}
              >
                {status === 'sending' && <Loader2 className="animate-spin mr-2" />}
                {status === 'success' && <CheckCircle2 className="mr-2" />}
                {status === 'error' && <AlertCircle className="mr-2" />}
                
                {status === 'sending' ? t.formSending : 
                 status === 'success' ? t.formSuccess : 
                 status === 'error' ? t.formError : 
                 t.formSubmitBtn}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};