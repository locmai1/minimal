import { useTheme } from 'next-themes';

export default function useCurrentTheme() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = currentTheme === 'dark';

  const themeStyles = {
    tagBgColor: isDarkMode ? 'bg-primary/30' : 'bg-primary/10',
  };

  return { currentTheme, setTheme, themeStyles, isDarkMode };
}
