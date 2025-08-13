import { SectionProps } from '@/src/types';

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-medium text-2xl">{title}</h2>
      {children}
    </section>
  );
}
