import React from 'react';
import data from '@/data/socials.json';

export default function Socials() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-2xl">Social</h2>
      <ul className="list-inside">
        {data.map((social, index) => (
          <li key={index}>
            <a href={social.link} target="_blank" className="text-primary underline italic">
              <span>{social.link}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
