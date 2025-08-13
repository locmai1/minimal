import { ListItemProps } from '@/src/types';

export function List({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <ul className={`list-inside ${className}`}>{children}</ul>;
}

export function ListItem({ children, className = '' }: ListItemProps) {
  return <li className={className}>{children}</li>;
}
