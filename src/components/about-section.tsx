'use client';

import { Lightbulb, MessageSquareQuote, UserSearch } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const QUALITIES = [
  {
    icon: <UserSearch className="size-5" />,
    title: 'Foco no Usuário',
    description:
      'Interfaces intuitivas e acessíveis são prioridade, garantindo experiências que resolvem necessidades reais.',
  },
  {
    icon: <MessageSquareQuote className="size-5" />,
    title: 'Colaborativo',
    description:
      'Valorizo o trabalho em equipe, com comunicação clara e busca por resultados compartilhados.',
  },
  {
    icon: <Lightbulb className="size-5" />,
    title: 'Inovador',
    description:
      'Mantenho-me atualizado com as tendências do mercado, explorando ferramentas emergentes para soluções eficientes.',
  },
] as const;

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
            Criatividade técnica para soluções que unem código e propósito
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
                Sou desenvolvedor Fullstack com atuação profissional focada em Front-End, construo
                aplicações web modernas com React, TypeScript e Next.js, integradas a APIs robustas
                com Node.js e bancos de dados PostgreSQL via PrismaORM. Domino ferramentas como
                TailwindCSS e bibliotecas headless como RadixUI para desenvolvimento ágil de
                interfaces. Além disso, já trabalhei com Angular, PHP e Laravel em outros projetos
                desafiadores.
              </p>

              <p className="text-primary leading-relaxed">
                Atualmente, estou no penúltimo período do Bacharelado em Engenharia de Software na
                UniSATC, aliando teoria acadêmica à prática do mercado para desenvolver soluções
                escaláveis e eficientes.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {QUALITIES.map((quality, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1 p-2 rounded-full bg-secondary text-primary">
                    {quality.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{quality.title}</h4>
                    <p className="text-sm text-foreground">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
