import React from 'react';
import { getEducationSync } from '@/src/lib/utils/data';
import { Education as EducationType } from '@/src/types';
import { Section, List, ListItem } from '@/src/components/ui';

export default function Education() {
  const education: EducationType[] = getEducationSync();

  return (
    <Section title="Education">
      <List>
        {education.map((degree, index) => (
          <ListItem key={index}>
            <span className="font-medium">{degree.degree}</span> | <span>{degree.institution}</span>{' '}
            | <span className="text-gray-600 dark:text-gray-400">{degree.date}</span>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
