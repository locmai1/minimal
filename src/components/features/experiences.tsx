import React from 'react';
import { getExperiencesSync } from '@/src/lib/utils/data';
import { Experience } from '@/src/types';
import { Section, List, ListItem } from '@/src/components/ui';

export default function Experiences() {
  const experiences: Experience[] = getExperiencesSync();

  return (
    <Section title="Experiences">
      <List>
        {experiences.map((experience, index) => (
          <ListItem key={index}>
            <span className="font-medium">{experience.role}</span> |{' '}
            <span className="italic">{experience.company}</span>
            <br className="md:hidden" /> | <span className="text-primary">{experience.team}</span> |{' '}
            <span className="text-gray-600 dark:text-gray-400">{experience.date}</span>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
