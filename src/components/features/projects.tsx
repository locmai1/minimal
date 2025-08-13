import React from 'react';
import { getProjectsSync } from '@/src/lib/utils/data';
import { Project } from '@/src/types';
import { Section, List, ListItem, ExternalLink, Tag } from '@/src/components/ui';

export default function Projects() {
  const projects: Project[] = getProjectsSync();

  return (
    <Section title="Projects">
      <List>
        {projects.map((project, index) => (
          <ListItem key={index}>
            <ExternalLink href={project.link}>{project.name}</ExternalLink> |{' '}
            <span>{project.description}</span> |{' '}
            <Tag
              text={project.status}
              variant={project.status === 'Current' ? 'primary' : 'secondary'}
              className="text-xs"
            />
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
