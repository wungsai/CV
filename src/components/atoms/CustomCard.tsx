"use client";
import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type CustomCardProps = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
  className?: string;
  isPressable?: boolean;
};

export const CustomCard = ({ children, className = '', isPressable = false, style, ...props }: CustomCardProps) => (
  <motion.div
    whileHover={isPressable ? { y: -8 } : undefined}
    className={`rounded-2xl overflow-hidden transition-all duration-300 ${className}`}
    style={style}
    {...props}
  >
    {children}
  </motion.div>
);