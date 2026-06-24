"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="flex flex-col items-center mb-16 md:mb-24">
    <div className="flex items-center gap-6 mb-4">
      <motion.div initial={{ width: 0 }} whileInView={{ width: 64 }} className="h-[2px] bg-[#F8C05E] origin-right" />
      <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">{title}</h2>
      <motion.div initial={{ width: 0 }} whileInView={{ width: 64 }} className="h-[2px] bg-[#F8C05E] origin-left" />
    </div>
    {subtitle && <p className="text-[#A1A1A1] font-light mt-6 max-w-2xl text-center text-lg leading-relaxed">{subtitle}</p>}
  </div>
);
