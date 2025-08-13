import React from 'react';
import useCurrentTheme from '@/src/hooks/useCurrentTheme';
import { getPersonalInfoSync } from '@/src/lib/utils/data';
import { PersonalInfo } from '@/src/types';
import { Tag } from '@/src/components/ui';
import ThemeToggle from '@/src/components/ui/theme-toggle';

export default function Header() {
  const { isDarkMode } = useCurrentTheme();
  const { firstName, lastName, current, about, interests }: PersonalInfo = getPersonalInfoSync();

  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-medium">
            {firstName} <span className="text-primary">{lastName}</span>
          </h1>
          <ThemeToggle />
        </div>
        {current && current.role && current.company && current.team && (
          <p>
            {current.role} |{' '}
            <span className="font-bold">
              {current.company} | {current.team}
            </span>{' '}
            <Tag text="CURRENT" className="ml-1 leading-6 text-xs font-semibold" />
          </p>
        )}
        <p>Hello! 👋 </p>
        <p className="text-justify">{about}</p>
        <div className="flex gap-2 md:flex-row flex-col">
          <span className="font-medium">Interested in</span>
          <div className="flex gap-2 flex-wrap">
            {interests.map((interest, index) => (
              <Tag key={index} text={interest} className="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
