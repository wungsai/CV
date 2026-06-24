"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#252525]/90 backdrop-blur-xl border-b border-white/5 h-20">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className=" flex items-center justify-center p-1 rounded-lg border-2 border-[#F8C05E]">
              <span className="text-[#F8C05E] font-bold text-xl">WSLVC-IT</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['About', 'Portfolio', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-[#F8C05E] text-[10px] font-black uppercase tracking-widest transition-colors">
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="text-white hover:text-[#F8C05E] transition-colors">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#252525] flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-white hover:text-[#F8C05E] transition-colors p-2"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-10">
              {['About', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#F8C05E] text-3xl font-black uppercase tracking-widest transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
