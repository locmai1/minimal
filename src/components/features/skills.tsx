import React from 'react';
import { getSkillsSync } from '@/src/lib/utils/data';
import { SkillCategory } from '@/src/types';
import { Section, Tag } from '@/src/components/ui';

export default function Skills() {
  const skillCategories: SkillCategory[] = getSkillsSync();

  return (
    <Section title="Skills">
      <div className="flex flex-col gap-4">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex flex-col gap-2">
            <h3 className="font-medium text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              {category.type}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Tag key={skillIndex} text={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
