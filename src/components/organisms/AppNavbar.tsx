"use client";
import React from 'react';

export const AppNavbar = () => (
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
      {/* <div className="relative group flex items-center">
        <div className="absolute left-4 text-gray-500"><Search size={14} /></div>
        <input type="search" placeholder="Search" className="bg-[#323232] rounded-full pl-10 pr-4 py-2 text-xs text-white border border-transparent focus:border-[#F8C05E] focus:outline-none transition-all w-40" />
      </div> */}
    </div>
  </nav>
);
