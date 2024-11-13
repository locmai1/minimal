import React from 'react';
import data from '@/data/education.json';

export default function Education() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-2xl">Education</h2>
      <ul className="list-inside">
        {data.map((degree, index) => (
          <li key={index}>
            <span className="font-medium">{degree.degree}</span> | <span>{degree.institution}</span>{' '}
            | <span>{degree.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
