import React from 'react';
import useCurrentTheme from '@/hooks/useCurrentTheme';
import data from '@/data/footer.json';

export default function Note() {
  const { isDarkMode } = useCurrentTheme();
  const { note } = data;

  return (
    <div className={`${isDarkMode ? 'bg-primary/30' : 'bg-primary/10'} p-4 rounded text-center`}>
      <span className="text-sm text-primary">{note}</span>
    </div>
  );
}
