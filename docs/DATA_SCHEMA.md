# Data Schema Guide

This guide explains the structure of all JSON data files and how to modify them safely.

## 📊 Overview

All portfolio content is stored in JSON files in the `/data` folder. Each file has a specific schema that must be followed for the application to work correctly.

## 🔍 Validation

Before making changes, always validate your data:

```bash
npm run validate-data
```

This command checks all JSON files against their expected schemas and reports any errors.

## 📝 Data Files

### Personal Information (`data/header.json`)

**Purpose**: Your main profile information displayed in the header

```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "current": {
    "role": "string (optional)",
    "company": "string (optional)",
    "team": "string (optional)"
  },
  "about": "string (required)",
  "interests": ["array of strings (required)"]
}
```

**Example**:

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "current": {
    "role": "Software Engineer",
    "company": "Tech Corp",
    "team": "Frontend Team"
  },
  "about": "I'm a passionate developer who loves creating amazing web experiences.",
  "interests": ["React", "TypeScript", "Design", "Open Source"]
}
```

**Special Notes**:

- `current` object is optional - omit it or set any field to `null` to hide the current position section
- `interests` array creates tags in the UI
- `about` supports longer text descriptions

### Work Experience (`data/experiences.json`)

**Purpose**: Your professional work history

```json
[
  {
    "company": "string (required)",
    "team": "string (required)",
    "role": "string (required)",
    "date": "string (required)"
  }
]
```

**Example**:

```json
[
  {
    "company": "Google",
    "team": "Search Team",
    "role": "Senior Software Engineer",
    "date": "2023 - Present"
  },
  {
    "company": "Microsoft",
    "team": "Azure",
    "role": "Software Engineer",
    "date": "2021 - 2023"
  }
]
```

**Tips**:

- Order by recency (newest first)
- Use consistent date formats
- Keep role descriptions concise

### Projects (`data/projects.json`)

**Purpose**: Showcase your projects and work

```json
[
  {
    "name": "string (required)",
    "link": "string (required, valid URL)",
    "description": "string (required)",
    "status": "Current | Complete | In Progress | Paused (required)"
  }
]
```

**Example**:

```json
[
  {
    "name": "Weather App",
    "link": "https://github.com/username/weather-app",
    "description": "Real-time weather application with geolocation",
    "status": "Complete"
  },
  {
    "name": "E-commerce Platform",
    "link": "https://my-store.com",
    "description": "Full-stack online store with payment integration",
    "status": "Current"
  }
]
```

**Status Options**:

- `"Current"` - Green tag, for active projects
- `"Complete"` - Gray tag, for finished projects
- `"In Progress"` - Gray tag, for ongoing work
- `"Paused"` - Gray tag, for temporarily stopped projects

**Link Guidelines**:

- Must be valid URLs (include `https://`)
- Can link to GitHub, live demos, case studies, etc.
- Links open in new tabs automatically

### Education (`data/education.json`)

**Purpose**: Your educational background

```json
[
  {
    "degree": "string (required)",
    "institution": "string (required)",
    "date": "string (required)"
  }
]
```

**Example**:

```json
[
  {
    "degree": "Master of Science in Computer Science",
    "institution": "Stanford University",
    "date": "2019 - 2021"
  },
  {
    "degree": "Bachelor of Science in Software Engineering",
    "institution": "UC Berkeley",
    "date": "2015 - 2019"
  }
]
```

**Tips**:

- Include full degree names
- Order by recency or importance
- Can include certifications, bootcamps, etc.

### Skills (`data/skills.json`)

**Purpose**: Technical skills organized by category

```json
[
  {
    "type": "string (required)",
    "skills": ["array of strings (required)"]
  }
]
```

**Example**:

```json
[
  {
    "type": "Programming Languages",
    "skills": ["JavaScript", "TypeScript", "Python", "Java"]
  },
  {
    "type": "Frontend Technologies",
    "skills": ["React", "Vue.js", "HTML", "CSS", "Sass"]
  },
  {
    "type": "Backend Technologies",
    "skills": ["Node.js", "Express", "Django", "PostgreSQL"]
  },
  {
    "type": "Tools & Platforms",
    "skills": ["Git", "Docker", "AWS", "Figma"]
  }
]
```

**Category Suggestions**:

- Programming Languages
- Frontend Technologies
- Backend Technologies
- Databases
- Tools & Platforms
- Design Software
- Languages (spoken)

### Social Links (`data/socials.json`)

**Purpose**: Links to your social and professional profiles

```json
[
  {
    "name": "string (required)",
    "link": "string (required, valid URL)"
  }
]
```

**Example**:

```json
[
  {
    "name": "GitHub",
    "link": "https://github.com/username"
  },
  {
    "name": "LinkedIn",
    "link": "https://linkedin.com/in/username"
  },
  {
    "name": "Twitter",
    "link": "https://twitter.com/username"
  },
  {
    "name": "Portfolio",
    "link": "https://mywebsite.com"
  }
]
```

**Popular Platforms**:

- GitHub, GitLab, Bitbucket
- LinkedIn
- Twitter, Mastodon
- Dribbble, Behance
- Medium, Dev.to
- Personal website/blog

### Contact Information (`data/footer.json`)

**Purpose**: Contact details and metadata

```json
{
  "email": "string (required, valid email)",
  "updated": "string (required)",
  "note": "string (required)"
}
```

**Example**:

```json
{
  "email": "jane.doe@email.com",
  "updated": "December 2024",
  "note": "Always excited to discuss new opportunities and interesting projects!"
}
```

**Fields**:

- `email` - Your contact email (creates mailto link)
- `updated` - When you last updated the portfolio
- `note` - Personal message displayed prominently at the bottom

## ⚠️ Common Errors

### JSON Syntax Errors

```json
// ❌ Wrong: Missing comma
{
  "name": "John"
  "email": "john@email.com"
}

// ✅ Correct: Proper comma placement
{
  "name": "John",
  "email": "john@email.com"
}
```

### Invalid Status Values

```json
// ❌ Wrong: Invalid status
{
  "status": "finished"
}

// ✅ Correct: Use exact values
{
  "status": "Complete"
}
```

### Missing Required Fields

```json
// ❌ Wrong: Missing required field
{
  "company": "Google",
  "role": "Engineer"
  // Missing "team" and "date"
}

// ✅ Correct: All required fields
{
  "company": "Google",
  "team": "Search",
  "role": "Engineer",
  "date": "2024"
}
```

### Invalid URLs

```json
// ❌ Wrong: Invalid URL format
{
  "link": "github.com/user"
}

// ✅ Correct: Full URL with protocol
{
  "link": "https://github.com/user"
}
```

## 🛠️ Validation Tools

### Automatic Validation

Run this command to check all your data:

```bash
npm run validate-data
```

### Manual Validation

You can also check JSON syntax with online tools:

- [JSONLint](https://jsonlint.com/)
- VS Code (shows syntax errors automatically)

### TypeScript Support

The application uses TypeScript interfaces that match these schemas. Your IDE will show errors if data doesn't match expected types.

## 📋 Best Practices

1. **Always validate** after making changes
2. **Use consistent formatting** - proper indentation and spacing
3. **Keep arrays ordered** logically (newest first for experience/education)
4. **Use full URLs** including `https://`
5. **Keep descriptions concise** but informative
6. **Test with empty arrays** to ensure components handle no data gracefully
7. **Use meaningful names** for categories and projects

## 🔄 Adding New Data Types

To add a completely new data type:

1. **Create JSON file** in `/data/` folder
2. **Define TypeScript interface** in `src/types/index.ts`
3. **Add validation schema** in `tools/scripts/validate-data.js`
4. **Create data loader** in `src/lib/utils/data.ts`
5. **Build component** to display the data

This ensures type safety and validation for your new data structure.

## 🎯 Quick Reference

| File               | Purpose          | Required Fields                       |
| ------------------ | ---------------- | ------------------------------------- |
| `header.json`      | Personal info    | firstName, lastName, about, interests |
| `experiences.json` | Work history     | company, team, role, date             |
| `projects.json`    | Project showcase | name, link, description, status       |
| `education.json`   | Education        | degree, institution, date             |
| `skills.json`      | Technical skills | type, skills                          |
| `socials.json`     | Social links     | name, link                            |
| `footer.json`      | Contact info     | email, updated, note                  |

Remember: Always run `npm run validate-data` after making changes!
