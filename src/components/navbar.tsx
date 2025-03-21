'use client';
import { autoScroll } from '@/app/utils/auto-scroll';
import { cn } from '@/lib/utils';
import { useWindowScroll } from '@uidotdev/usehooks';
import { motion } from 'motion/react';
import { Logo } from './logo';
import { MotionButton } from './motion/motion-button';
import { ThemeToggle } from './theme-toggle';

const MENU_ITEMS = [
  { id: 'about', label: 'Sobre mim' },
  { id: 'experience', label: 'Experiência' },
  { id: 'technologies', label: 'Tecnologias' },
] as const;

export function NavBar() {
  const [{ x, y }, scrollTo] = useWindowScroll();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 px-4 ',
        y && y > 20 ? 'py-4 glassmorphism shadow-sm' : 'py-6 bg-transparent border-none',
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div
          className="text-xl font-display font-semibold tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          <Logo />
        </motion.div>

        <div className="hidden md:flex items-center gap-4">
          {MENU_ITEMS.map((item) => (
            <MotionButton
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant={'ghost'}
              onClick={(e) => autoScroll(e, item.id)}
            >
              {item.label}
            </MotionButton>
          ))}
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
