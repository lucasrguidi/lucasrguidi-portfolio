import { Code } from 'lucide-react';
import { motion } from 'motion/react';

export function Logo() {
  return (
    <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.05 }}>
      <span className="whitespace-nowrap font-bold text-xl text-foreground">Lucas Guidi</span>
      <Code className="size-5 text-primary" />
    </motion.div>
  );
}
