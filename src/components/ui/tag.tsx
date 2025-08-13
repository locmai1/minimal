import { TagProps } from '@/src/types';
import useCurrentTheme from '@/src/hooks/useCurrentTheme';

export default function Tag({ text, variant = 'primary', className = '' }: TagProps) {
  const { isDarkMode } = useCurrentTheme();

  const baseClasses = 'px-2 py-0.5 text-sm rounded-md';
  const variantClasses = {
    primary: `text-primary ${isDarkMode ? 'bg-primary/30' : 'bg-primary/10'}`,
    secondary: `${isDarkMode ? 'text-gray-300 bg-gray-700/50' : 'text-gray-700 bg-gray-200'}`,
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={`${variant} tag`}
    >
      {text}
    </span>
  );
}
