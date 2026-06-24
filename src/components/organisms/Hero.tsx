"use client";
import React from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../atoms/CustomButton";
import { SocialIconLink } from "../atoms/SocialIconLink";
import { downloadCV } from "@/utils/downloadCV";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
export const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="text-xl font-light text-[#A1A1A1] mb-2 uppercase tracking-widest">
          I&apos;M
        </h4>
        <h1 className="text-6xl md:text-8xl font-serif text-[#F8C05E] font-bold leading-none mb-6">
          Wungsailor <br />
          Vangchay
        </h1>
        <p className="text-2xl text-gray-400 font-light mb-10 max-w-md leading-relaxed">
          Full-Stack Software Engineer & <br />
          <span className="text-white font-semibold">Full Cycle Developer</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <CustomButton variant="bordered" onClick={() => window.location.href = "#contact"}>Contact Me</CustomButton>
          <CustomButton variant="bordered" onClick={downloadCV}>
            Download CV
          </CustomButton>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center md:block md:flex md:justify-center"
      >
        <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-b-[240px] overflow-hidden border-b-[12px] border-[#F8C05E] shadow-2xl">
          <img
            alt="Wungsailor Vangchay"
            className="w-full h-full object-cover object-top md:grayscale lg:grayscale sm:grayscale-0 hover:grayscale-0 transition-all duration-1000"
            src={`${basePath}/profile.jpg`}
            loading="lazy"
          />
        </div>
        <div className="mt-8 flex flex-row gap-8 text-[#A1A1A1] md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:flex-col">
          <SocialIconLink
            href="https://github.com/wungsai"
            brand="GitHub"
            label="GitHub profile"
            className="transition-colors"
          />
          <SocialIconLink
            href="https://gitlab.com/wslvc-it"
            brand="GitLab"
            label="GitLab profile"
            className="transition-colors"
          />
          <SocialIconLink
            href="https://www.linkedin.com/"
            brand="LinkedIn"
            label="LinkedIn profile"
            className="transition-colors"
          />
        </div>
      </motion.div>
    </div>
  </header>
);