import { Code } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <span className="whitespace-nowrap font-bold text-xl text-foreground">Lucas Guidi</span>
      <Code className="size-5 text-primary" />
    </div>
  );
}
