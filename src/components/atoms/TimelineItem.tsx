"use client";
import React from "react";
import { motion } from "framer-motion";

type TimelineItemProps = {
  year: string;
  role: string;
  company: string;
  desc: string;
  image?: string;
};

const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';

export const TimelineItem = ({ year, role, company, desc, image }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 group"
  >
    <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#252525] border-4 border-[#F8C05E] z-10" />
    <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-4">
      <div>
        <span className="inline-block px-3 py-1 bg-[#323232] text-[#F8C05E] text-[10px] font-black uppercase tracking-[0.2em] rounded mb-4">
          {year}
        </span>
        <h3 className="text-3xl font-serif font-bold text-white mb-1">
          {role}
        </h3>
        <p className="text-[#F8C05E] text-xs uppercase tracking-[0.3em] font-black mb-2 md:mb-6">
          {company}
        </p>
      </div>
      <div>
        {image && <img src={`${basePath}/${image}`} alt={company} className="h-24 p-2 rounded-md bg-white object-contain" />}
      </div>
    </div>
    <div className="text-[#A1A1A1] font-light leading-relaxed text-lg max-w-3xl whitespace-pre-wrap">
      {desc}
    </div>
  </motion.div>
);