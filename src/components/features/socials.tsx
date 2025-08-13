import React from 'react';
import { getSocialsSync } from '@/src/lib/utils/data';
import { Social } from '@/src/types';
import { Section, List, ListItem, ExternalLink } from '@/src/components/ui';

export default function Socials() {
  const socials: Social[] = getSocialsSync();

  return (
    <Section title="Social">
      <List>
        {socials.map((social, index) => (
          <ListItem key={index}>
            <ExternalLink href={social.link}>
              {social.name} - {social.link}
            </ExternalLink>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
