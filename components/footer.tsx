import React from 'react';
import data from '@/data/footer.json';

export default function Footer() {
  const { email, updated } = data;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium">Contact</h2>
      <ul className="list-inside">
        <li>
          <span>{'Email: '}</span>
          <a href="mailto:loc.mai@tufts.edu" className="italic underline text-primary">
            {email}
          </a>
        </li>
      </ul>
      <div className="flex-col gap-2">
        <p className="text-xs">Last Updated: {updated}</p>
      </div>
    </div>
  );
}
