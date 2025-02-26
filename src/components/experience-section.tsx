'use client';
import { EXPERIENCES } from '@/constants/experiences';
import { motion } from 'motion/react';
import { ExperienceCard } from './experience-card';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background p-8 overflow-hidden">
      <div className="max-w-6xl flex flex-col justify-center w-full mx-auto gap-8">
        <motion.div
          className="text-center max-w-3xl mx-auto flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Experiência</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Minha jornada profissional
          </h3>
          <p className="text-foreground">
            Uma linha do tempo que reflete minha evolução técnica e as soluções que entreguei
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard
              key={index}
              position={exp.position}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              isActive={exp.isActive}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
