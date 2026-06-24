"use client";
import React from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AppNavbar } from '@/components/organisms/AppNavbar';
import { Hero } from '@/components/organisms/Hero';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { SkillItem } from '@/components/atoms/SkillItem';
import { TimelineItem } from '@/components/atoms/TimelineItem';
import { CustomCard } from '@/components/atoms/CustomCard';
import { SocialIconLink } from '@/components/atoms/SocialIconLink';
import { SKILL_CATEGORIES, EXPERIENCES } from '@/constants/data';
import { TOKENS } from '@/constants/tokens';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-[#252525] min-h-screen selection:bg-[#F8C05E] selection:text-black font-sans text-white overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#F8C05E] z-[100] origin-left" style={{ scaleX }} />
      <AppNavbar />
      
      <main>
        <Hero />

        {/* ABOUT */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={TOKENS.animations.fadeInUp} className="py-32 bg-[#1A1A1A]/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <SectionHeading title="About" />
            <p className="text-2xl text-[#A1A1A1] leading-relaxed font-light">
              I am a <span className="text-[#F8C05E] font-medium italic underline decoration-[#F8C05E]/30 underline-offset-8">trustworthy, creative, and highly proactive</span> Software Engineer based in Vientiane, Laos. 
              With an International Bachelor&apos;s in Computer Science, I specialize in building robust E-Wallet, E-Commerce, and Insurance systems. 
              I am self-motivated and fondly anticipate professional growth in challenging environments.
            </p>
          </div>
        </motion.section>

        {/* SKILLS CATEGORIZED */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={TOKENS.animations.fadeInUp} className="py-32 max-w-7xl mx-auto px-6">
          <SectionHeading title="My Skills" subtitle="High-tier expertise across the modern development stack" />
          
          <div className="space-y-20">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-lg font-serif italic text-white/50">{category.title}</h3>
                  <div className="h-[1px] flex-1 bg-white/5" />
                </div>
                <motion.div variants={TOKENS.animations.stagger} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillItem 
                      key={skillIdx}
                      name={skill.name} 
                      brand={skill.brand} 
                      color={skill.color} 
                      active={skill.active}
                      iconBg={skill.iconBg}
                    />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE - FULL LIST FROM CV */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={TOKENS.animations.fadeInUp} className="py-32 max-w-5xl mx-auto px-6">
          <SectionHeading title="Experience" subtitle="Full professional trajectory and tenure" />
          <div className="relative border-l-2 border-white/10 ml-6 space-y-24">
            {EXPERIENCES.map((exp, idx) => (
              <TimelineItem 
                key={idx}
                year={exp.year} 
                role={exp.role} 
                company={exp.company} 
                desc={exp.desc}
                image={exp.image}
              />
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="portfolio" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={TOKENS.animations.fadeInUp} className="py-32 bg-[#1A1A1A]/30">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Portfolio" subtitle="Key Projects Handled" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative group rounded-3xl overflow-hidden bg-[#323232] aspect-video flex items-center justify-center p-12 border border-white/5 hover:border-[#F8C05E]/30 transition-all">
                <div className="text-center">
                  <h3 className="text-3xl font-serif font-bold text-[#F8C05E] mb-4">STB Visa Card Registration</h3>
                  <p className="text-gray-400 font-light mb-8">Data Managemnet built with Nuxt, AdonisJS, Postgresql</p>
                  {/* <CustomButton variant="solid" className="px-8">View Case Study</CustomButton> */}
                </div>
              </div>
              <div className="relative group rounded-3xl overflow-hidden bg-[#323232] aspect-video flex items-center justify-center p-12 border border-white/5 hover:border-[#F8C05E]/30 transition-all">
                <div className="text-center">
                  <h3 className="text-3xl font-serif font-bold text-[#F8C05E] mb-4">STB QR Merchant</h3>
                  <p className="text-gray-400 font-light mb-8">Web app built with Next.js and MariaDB.</p>
                  {/* <CustomButton variant="solid" className="px-8">View Case Study</CustomButton> */}
                </div>
              </div>
              <div className="relative group rounded-3xl overflow-hidden bg-[#323232] aspect-video flex items-center justify-center p-12 border border-white/5 hover:border-[#F8C05E]/30 transition-all">
                <div className="text-center">
                  <h3 className="text-3xl font-serif font-bold text-[#F8C05E] mb-4">OCWA Mobile App</h3>
                  <p className="text-gray-400 font-light mb-8">Full-scale E-Wallet and utility app running on Android and iOS.</p>
                  {/* <CustomButton variant="solid" className="px-8">View Case Study</CustomButton> */}
                </div>
              </div>
              <div className="relative group rounded-3xl overflow-hidden bg-[#323232] aspect-video flex items-center justify-center p-12 border border-white/5 hover:border-[#F8C05E]/30 transition-all">
                <div className="text-center">
                  <h3 className="text-3xl font-serif font-bold text-[#F8C05E] mb-4">Oudomsup Web Platform</h3>
                  <p className="text-gray-400 font-light mb-8">Integrated E-Commerce and corporate website built with PHP and JavaScript.</p>
                  {/* <CustomButton variant="solid" className="px-8">View Case Study</CustomButton> */}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={TOKENS.animations.fadeInUp} className="py-32">
          <SectionHeading title="Contact Me" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <CustomCard className="bg-[#323232] p-10 flex flex-row items-center gap-6">
              <div className="p-4 bg-[#252525] rounded-xl text-[#F8C05E]"><Mail size={24} /></div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Email</p>
                <p className="text-sm truncate">wungsailor@gmail.com</p>
              </div>
            </CustomCard>
            <CustomCard className="bg-[#323232] p-10 flex flex-row items-center gap-6">
              <div className="p-4 bg-[#252525] rounded-xl text-[#F8C05E]"><Phone size={24} /></div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                <p className="text-sm">+856 20 2811 7274</p>
                <p className="text-sm">+856 20 7867 2719</p>

              </div>
            </CustomCard>
            <CustomCard className="bg-[#323232] p-10 flex flex-row items-center gap-6">
              <div className="p-4 bg-[#252525] rounded-xl text-[#F8C05E]"><MapPin size={24} /></div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Location</p>
                <p className="text-sm">Vientiane, Laos</p>
              </div>
            </CustomCard>
          </div>
        </motion.section>
      </main>

      <footer className="py-32 text-center border-t border-white/5">
        <div className="flex justify-center gap-10 mb-16 text-[#A1A1A1]">
          <SocialIconLink
            href="https://github.com/wungsai"
            brand="GitHub"
            label="GitHub profile"
            className="cursor-pointer transition-colors"
            iconClassName="w-[24px] h-[24px]"
            hover="scale"
          />
          <SocialIconLink
            href="https://gitlab.com/wslvc-it"
            brand="GitLab"
            label="GitLab profile"
            className="cursor-pointer transition-colors"
            iconClassName="w-[24px] h-[24px]"
            hover="scale"
          />
          <SocialIconLink
            href="https://www.linkedin.com/"
            brand="LinkedIn"
            label="LinkedIn profile"
            className="cursor-pointer transition-colors"
            iconClassName="w-[24px] h-[24px]"
            hover="scale"
          />
        </div>
        <h2 className="text-6xl font-serif italic text-white/5 tracking-tight">&quot;Thanks for Scrolling&quot;</h2>
        <p className="mt-12 text-[10px] uppercase tracking-[0.4em] text-gray-700 font-bold">WUNGSAILOR VANGCHAY • Full Cycle Developer</p>
      </footer>
    </div>
  );
}
