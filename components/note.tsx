import React from 'react';
import useCurrentTheme from '@/hooks/useCurrentTheme';
import data from '@/data/footer.json';

export default function Note() {
  const { themeStyles } = useCurrentTheme();
  const { note } = data;

  return (
    <div className={`${themeStyles.tagBgColor} p-4 rounded text-center`}>
      <span className="text-sm text-primary">{note}</span>
    </div>
  );
}
