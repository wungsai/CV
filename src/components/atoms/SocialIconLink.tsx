"use client";
import React from "react";
import { motion } from "framer-motion";
import { MaskedBrandIcon } from "@/constants/icons";

type SocialIconLinkProps = {
  href: string;
  brand: string;
  label: string;
  className?: string;
  iconClassName?: string;
  hover?: "slide" | "scale";
};

export const SocialIconLink = ({
  href,
  brand,
  label,
  className,
  iconClassName = "w-[22px] h-[22px]",
  hover = "slide",
}: SocialIconLinkProps) => (
  <motion.a
    whileHover={hover === "scale" ? { scale: 1.3, color: "#F8C05E" } : { x: -5, color: "#F8C05E" }}
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className={className}
  >
    <MaskedBrandIcon brand={brand} label={label} className={iconClassName} />
  </motion.a>
);