# Component Documentation

This guide explains how each component in the portfolio works and how to customize them.

## 🏗️ Component Architecture

Components are organized into three categories:

- **🎯 Features** - Portfolio sections (education, projects, etc.)
- **🏢 Layout** - Structural components (header, footer)
- **🧩 UI** - Reusable interface elements (buttons, tags, etc.)

## 🎯 Feature Components

These components display your portfolio content and are the main sections of your page.

### Education (`src/components/features/education.tsx`)

**Purpose**: Displays your educational background

**Data Source**: `data/education.json`

**Structure**:

```json
[
  {
    "degree": "Bachelor of Science in Computer Science",
    "institution": "University Name",
    "date": "2021 - Present"
  }
]
```

**Customization**:

- Add more degree entries to the JSON array
- Modify the display format by editing the component
- All fields (degree, institution, date) are required

### Experiences (`src/components/features/experiences.tsx`)

**Purpose**: Shows your work experience and roles

**Data Source**: `data/experiences.json`

**Structure**:

```json
[
  {
    "company": "Company Name",
    "team": "Department/Team",
    "role": "Your Position",
    "date": "2024 - Present"
  }
]
```

**Features**:

- Responsive layout (stacks on mobile)
- Chronological display (newest first recommended)
- Highlights company, team, and role clearly

### Projects (`src/components/features/projects.tsx`)

**Purpose**: Showcases your projects with links and status

**Data Source**: `data/projects.json`

**Structure**:

```json
[
  {
    "name": "Project Name",
    "link": "https://github.com/user/project",
    "description": "Brief project description",
    "status": "Current" // "Current" | "Complete" | "In Progress" | "Paused"
  }
]
```

**Features**:

- Clickable project links (opens in new tab)
- Status tags with different colors
- Security: All links include `rel="noopener noreferrer"`

### Skills (`src/components/features/skills.tsx`)

**Purpose**: Displays your technical skills organized by category

**Data Source**: `data/skills.json`

**Structure**:

```json
[
  {
    "type": "Programming Languages",
    "skills": ["JavaScript", "TypeScript", "Python"]
  },
  {
    "type": "Frameworks",
    "skills": ["React", "Next.js", "Node.js"]
  }
]
```

**Features**:

- Categorized skill display
- Tag-based visual representation
- Responsive grid layout

### Socials (`src/components/features/socials.tsx`)

**Purpose**: Links to your social media and professional profiles

**Data Source**: `data/socials.json`

**Structure**:

```json
[
  {
    "name": "GitHub",
    "link": "https://github.com/username"
  },
  {
    "name": "LinkedIn",
    "link": "https://linkedin.com/in/username"
  }
]
```

**Customization**:

- Add any social platform or professional profile
- Links automatically open in new tabs

### Note (`src/components/features/note.tsx`)

**Purpose**: A special highlighted message or personal note

**Data Source**: `data/footer.json` (shares with footer)

**Structure**:

```json
{
  "email": "your@email.com",
  "updated": "11/2024",
  "note": "Your personal message here"
}
```

**Features**:

- Prominent styling with background color
- Theme-aware (adapts to light/dark mode)
- Perfect for personal messages or calls-to-action

## 🏢 Layout Components

### Header (`src/components/layout/header.tsx`)

**Purpose**: Main introduction section with your name and current role

**Data Source**: `data/header.json`

**Key Features**:

- **Name Display**: First name + highlighted last name
- **Current Position**: Shows role, company, and team (optional)
- **About Section**: Personal bio/introduction
- **Interests**: Tagged list of your interests
- **Theme Toggle**: Dark/light mode switcher

**Current Position Logic**:
The current position section only appears if ALL fields are provided:

```json
{
  "current": {
    "role": "Software Engineer", // Required
    "company": "Company Name", // Required
    "team": "Team Name" // Required
  }
}
```

If any field is missing or null, the entire current position section is hidden.

### Footer (`src/components/layout/footer.tsx`)

**Purpose**: Contact information and last updated date

**Data Source**: `data/footer.json`

**Features**:

- Email contact link
- Last updated timestamp
- Clean, minimal design

## 🧩 UI Components

These are reusable components used throughout the application.

### Section (`src/components/ui/section.tsx`)

**Purpose**: Consistent wrapper for all content sections

**Usage**:

```tsx
<Section title="Section Title">
  <content />
</Section>
```

**Features**:

- Consistent spacing and typography
- Standardized title styling
- Used by all feature components

### Tag (`src/components/ui/tag.tsx`)

**Purpose**: Styled tags for skills, interests, and status indicators

**Variants**:

- `primary` - Green theme color (default)
- `secondary` - Gray color scheme

**Usage**:

```tsx
<Tag text="React" variant="primary" />
<Tag text="Complete" variant="secondary" />
```

**Features**:

- Theme-aware styling
- Two color variants
- Consistent sizing and spacing

### ExternalLink (`src/components/ui/external-link.tsx`)

**Purpose**: Secure external links with consistent styling

**Features**:

- Automatic `target="_blank"`
- Security: `rel="noopener noreferrer"`
- Consistent hover states
- Theme-aware colors

### List Components (`src/components/ui/list.tsx`)

**Purpose**: Semantic list structures

**Components**:

- `List` - Wrapper for list items
- `ListItem` - Individual list item

**Usage**:

```tsx
<List>
  <ListItem>Content</ListItem>
  <ListItem>More content</ListItem>
</List>
```

### ThemeToggle (`src/components/ui/theme-toggle.tsx`)

**Purpose**: Switch between light and dark modes

**Features**:

- Automatic theme detection
- Smooth transitions
- Accessible with proper ARIA labels
- Icon changes based on current theme

### ErrorDisplay (`src/components/ui/error-display.tsx`)

**Purpose**: Consistent error messaging and 404 pages

**Features**:

- Auto-redirect functionality
- Customizable messages and actions
- Countdown timers
- Accessible error states

## 🔧 Customization Guide

### Adding a New Feature Component

1. **Create the data file**:

```json
// data/new-section.json
[
  {
    "title": "Item Title",
    "description": "Item description"
  }
]
```

2. **Define TypeScript types**:

```typescript
// src/types/index.ts
export interface NewSection {
  title: string;
  description: string;
}
```

3. **Create the component**:

```tsx
// src/components/features/new-section.tsx
import { getNewSectionSync } from '@/src/lib/utils/data';
import { NewSection } from '@/src/types';
import { Section, List, ListItem } from '@/src/components/ui';

export default function NewSectionComponent() {
  const data: NewSection[] = getNewSectionSync();

  return (
    <Section title="New Section">
      <List>
        {data.map((item, index) => (
          <ListItem key={index}>
            <strong>{item.title}</strong>: {item.description}
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
```

4. **Add data loader**:

```typescript
// src/lib/utils/data.ts
export function getNewSectionSync(): NewSection[] {
  const data = require('@/data/new-section.json');
  return data as NewSection[];
}
```

5. **Export and use**:

```typescript
// src/components/features/index.ts
export { default as NewSectionComponent } from './new-section';
```

```tsx
// app/page.tsx
import { NewSectionComponent } from '@/src/components/features';
// Add <NewSectionComponent /> to your page
```

### Modifying Existing Components

- **Data Structure**: Edit the JSON files in `/data`
- **Styling**: Modify Tailwind classes in the component files
- **Layout**: Change the JSX structure in component files
- **Types**: Update interfaces in `src/types/index.ts`

### Best Practices

1. **Always validate data** with `npm run validate-data` after changes
2. **Follow TypeScript types** - they guide you to correct data structures
3. **Test both themes** when modifying styling
4. **Use existing UI components** for consistency
5. **Keep components focused** on a single responsibility

## 🎨 Styling Guidelines

- **Use Tailwind utilities** instead of custom CSS
- **Follow responsive patterns**: `md:desktop-class mobile-class`
- **Maintain theme support**: Use `dark:` variants
- **Keep consistent spacing**: Use the design system values
- **Test accessibility**: Ensure proper contrast and focus states

## 📱 Responsive Design

All components are built mobile-first:

- **Mobile**: Single column, stacked layout
- **Desktop** (`md:` and up): Multi-column where appropriate
- **Flexible**: Content adapts to container width

The layout automatically adjusts for different screen sizes without additional configuration.
