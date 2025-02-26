import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  position: string;
  company: string;
  period: string;
  description: string;
  isActive?: boolean;
}

export function ExperienceCard({
  position,
  company,
  period,
  description,
  isActive = false,
}: ExperienceCardProps) {
  const descriptionParagraphs = description.split(';').filter((line) => line.trim() !== '');

  return (
    <div
      className={cn(
        'relative pl-8 pb-12',
        'before:absolute before:left-0 before:top-1 before:w-[1px] before:h-full',
        isActive ? 'before:bg-border' : 'before:bg-muted',
      )}
    >
      <div
        className={cn(
          'absolute left-0 top-1 w-4 h-4 rounded-full -translate-x-[7px]',
          'border-2 border-white',
          isActive ? 'bg-input' : 'bg-muted',
        )}
      ></div>

      <div className="space-y-3">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-primary rounded-full mb-2">
            {period}
          </span>
          <h3 className="text-lg font-medium text-foreground">{position}</h3>
          <p className="text-foreground">{company}</p>
        </div>
        <p className="text-sm text-foreground leading-relaxed space-y-4">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>- {paragraph.trim()}</p>
          ))}
        </p>
      </div>
    </div>
  );
}
