"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CustomCard } from './CustomCard';
import { BrandIconImage } from '@/constants/icons';
import { TOKENS } from '@/constants/tokens';

type SkillItemProps = {
  name: string;
  brand: string;
  active?: boolean;
  color?: string | undefined;
  iconBg?: string | undefined;
};


export const SkillItem = ({ name, brand, active, color, iconBg }: SkillItemProps) => {
  const isHighlight = !!iconBg;
  const bgColor = (active && isHighlight) ? iconBg : '#323232';
  const textColor = (active && isHighlight) ? '#FFFFFF' : (active ? '#F8C05E' : '#9ca3af');
  const iconFilter = active
    ? ((isHighlight || color === '#FFFFFF') ? 'brightness(0) invert(1)' : 'none')
    : 'grayscale(100%) brightness(0.7)';

  return (
    <motion.div variants={TOKENS.animations.fadeInUp}>
      <CustomCard
        isPressable
        className={`h-44 flex flex-col items-center justify-center gap-5 shadow-xl transition-all duration-500 ${active && !isHighlight ? 'border border-[#F8C05E]/30' : ''}`}
        style={{ backgroundColor: bgColor }}
      >
        <div
          className="w-16 h-16 flex items-center justify-center transition-all duration-500 overflow-hidden"
          style={{ filter: iconFilter }}
        >
          <BrandIconImage
            brand={brand}
            label={name}
            className="w-full h-full object-contain p-1"
          />
        </div>
        <p
          className="font-bold tracking-widest text-[9px] uppercase text-center px-4 transition-colors duration-500"
          style={{ color: textColor }}
        >
          {name}
        </p>
      </CustomCard>
    </motion.div>
  );
};