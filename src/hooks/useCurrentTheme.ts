import { useTheme } from 'next-themes';

export default function useCurrentTheme() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = currentTheme === 'dark';

  return { currentTheme, setTheme, isDarkMode };
}
