'use client';
import { STACKS } from '@/constants/stacks';
import { motion } from 'motion/react';
import { TechCard } from './tech-card';

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-16 md:py-24 bg-background p-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 justify-center items-center">
        <motion.div
          className=" text-center max-w-3xl mx-auto flex flex-col gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Tecnologias</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Tecnologias que utilizo
          </h3>
          <p className="text-foreground">
            As tecnologias, frameworks e ferramentas que uso para transformar ideias em realidade
          </p>
        </motion.div>

        {STACKS.map((stack, stackIndex) => (
          <motion.div
            key={stackIndex}
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-primary text-center">{stack.title}</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stack.items.map((tech, index) => (
                <TechCard
                  key={index}
                  icon={tech.icon}
                  name={tech.name}
                  description={tech.description}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
