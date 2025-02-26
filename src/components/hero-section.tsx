'use client';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { MotionButton } from './motion/motion-button';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background p-4"
    >
      <div className="max-w-6xl  w-full flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
        <motion.div
          className="flex-1 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <motion.p
              className="text-muted-foreground font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Desenvolvedor Front-End
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Olá, eu sou o
              <br />
              Lucas Guidi
            </motion.h1>
          </div>

          <motion.p
            className="max-w-2xl mx-auto md:mx-0 text-foreground text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Desenvolvedor Fullstack com foco em criar experiências digitais eficientes e
            impactantes. Combinando criatividade e tecnologia, transformo ideias em soluções que
            fazem a diferença.
          </motion.p>

          <MotionButton
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            variant={'default'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>Conheça Mais</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ArrowDown />
            </motion.div>
          </MotionButton>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/photo-placeholder.png"
              alt="Your Name"
              className="w-full h-full object-cover rounded-full border-4 border-primary  shadow-lg"
              fill
            />
            <motion.div
              className="absolute inset-0 rounded-full border-8 border-primary/30 "
              animate={{
                boxShadow: [
                  '0 0 0 0 hsla(40, 95%, 55%, 0)',
                  '0 0 0 10px hsla(40, 95%, 55%, 0.2)',
                  '0 0 0 0 hsla(40, 95%, 55%, 0)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
