import { Code } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2 cursor-pointer">
    <span className="whitespace-nowrap font-bold text-lg text-foreground">Lucas Guidi</span>
    <Code />
  </div>
);

export { Logo };
