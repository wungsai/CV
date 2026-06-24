"use client";
import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'solid' | 'bordered';

type CustomButtonProps = HTMLMotionProps<'button'> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  endContent?: React.ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  solid: 'bg-[#F8C05E] text-black px-6 py-4 hover:brightness-110',
  bordered: 'border-2 border-[#F8C05E] text-[#F8C05E] px-8 py-4 hover:bg-[#F8C05E] hover:text-black',
};

export const CustomButton = ({ children, variant = 'solid', className = '', endContent, ...props }: CustomButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-widest text-[10px] transition-all duration-300 rounded-lg';

  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
      {endContent && <span className="ml-2">{endContent}</span>}
    </motion.button>
  );
};