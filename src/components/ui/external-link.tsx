import { ExternalLinkProps } from '@/src/types';

export default function ExternalLink({
  href,
  children,
  className = 'link-primary italic',
}: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
