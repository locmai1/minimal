import React from 'react';
import { getContactInfoSync } from '@/src/lib/utils/data';
import { ContactInfo } from '@/src/types';
import { Section, List, ListItem, ExternalLink } from '@/src/components/ui';

export default function Footer() {
  const { email, updated }: ContactInfo = getContactInfoSync();

  return (
    <Section title="Contact">
      <List>
        <ListItem>
          <span>Email: </span>
          <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>
        </ListItem>
      </List>
      <div className="mt-[-10px]">
        <p className="text-xs text-gray-600 dark:text-gray-400">Last Updated: {updated}</p>
      </div>
    </Section>
  );
}
