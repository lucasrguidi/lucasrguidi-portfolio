'use client';

import { autoScroll } from '@/app/utils/auto-scroll';

import { motion } from 'motion/react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center overflow-hidden bg-background p-8 pt-0 py-16 md:py-24"
    >
      <div className="max-w-6xl relative w-full mx-auto flex flex-col justify-center items-center gap-8">
        <motion.div
          className="text-center max-w-3xl flex flex-col gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Sobre Mim</h2>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Para me conhecer melhor
          </h3>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="justify-start">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image
                src="/photo-placeholder.png"
                alt="Your Name"
                fill
                sizes={'100%'}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>

          <div className="w-full flex-1 flex flex-col justify-center gap-8 text-left">
            <div className="flex flex-col gap-4">
              <p className="text-primary leading-relaxed">
                Meu nome é Lucas Guidi, nasci e moro em Criciúma, Santa Catarina. Tenho 21 anos e,
                no momento, estou na reta final para terminar a graduação em Engenharia de Software
                na UniSATC.
              </p>

              <p className="text-primary leading-relaxed">
                Sou desenvolvedor full-stack com quase 3 anos de experiência e atualmente atuo na
                empresa eTopocart, com foco no frontend. Trabalho diariamente com tecnologias como
                JavaScript/TypeScript, React, Next.js, TailwindCSS e{' '}
                <button onClick={(e) => autoScroll(e, 'technologies')} className="underline">
                  diversas outras.
                </button>{' '}
                Meu objetivo é criar soluções e experiências que transformem o dia a dia das
                pessoas, desenvolvendo ferramentas que simplificam processos complexos, buscando ser
                a ponte entre inovação tecnológica e necessidades reais.
              </p>

              <p className="text-primary leading-relaxed">
                Minha paixão desde pequeno por novas tecnologias me fez optar por essa área que une
                inovação e resolução de problemas, habilidades que aplico diariamente tanto na vida
                acadêmica quanto na profissional.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
