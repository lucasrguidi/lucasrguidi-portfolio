'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface TechCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export function TechCard({ icon, name, description }: TechCardProps) {
  return (
    <motion.div
      className={cn(
        'group p-6 rounded-xl border border-muted bg-card hover:bg-accent  transition-all hover:shadow-md  duration-75',
      )}
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-primary group-hover:bg-muted group-hover:text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">{name}</h3>
      <p className="text-sm text-foreground">{description}</p>
    </motion.div>
  );
}
