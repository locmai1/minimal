import React from 'react';
import useCurrentTheme from '@/src/hooks/useCurrentTheme';
import { getContactInfoSync } from '@/src/lib/utils/data';
import { ContactInfo } from '@/src/types';

export default function Note() {
  const { isDarkMode } = useCurrentTheme();
  const { note }: ContactInfo = getContactInfoSync();

  return (
    <div
      className={`${isDarkMode ? 'bg-primary/30' : 'bg-primary/10'} p-3 rounded-lg text-center transition-colors`}
    >
      <span className="text-sm text-primary font-medium">{note}</span>
    </div>
  );
}
