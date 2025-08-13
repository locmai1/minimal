import {
  PersonalInfo,
  Experience,
  Project,
  Education,
  SkillCategory,
  Social,
  ContactInfo,
} from '@/src/types';

// Type-safe data loaders
export async function getPersonalInfo(): Promise<PersonalInfo> {
  try {
    const data = await import('@/data/header.json');
    return data.default as PersonalInfo;
  } catch (error) {
    console.error('Failed to load personal info:', error);
    throw new Error('Failed to load personal information');
  }
}

export async function getExperiences(): Promise<Experience[]> {
  try {
    const data = await import('@/data/experiences.json');
    return data.default as Experience[];
  } catch (error) {
    console.error('Failed to load experiences:', error);
    throw new Error('Failed to load experience data');
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await import('@/data/projects.json');
    return data.default as Project[];
  } catch (error) {
    console.error('Failed to load projects:', error);
    throw new Error('Failed to load project data');
  }
}

export async function getEducation(): Promise<Education[]> {
  try {
    const data = await import('@/data/education.json');
    return data.default as Education[];
  } catch (error) {
    console.error('Failed to load education:', error);
    throw new Error('Failed to load education data');
  }
}

export async function getSkills(): Promise<SkillCategory[]> {
  try {
    const data = await import('@/data/skills.json');
    return data.default as SkillCategory[];
  } catch (error) {
    console.error('Failed to load skills:', error);
    throw new Error('Failed to load skills data');
  }
}

export async function getSocials(): Promise<Social[]> {
  try {
    const data = await import('@/data/socials.json');
    return data.default as Social[];
  } catch (error) {
    console.error('Failed to load socials:', error);
    throw new Error('Failed to load social links');
  }
}

export async function getContactInfo(): Promise<ContactInfo> {
  try {
    const data = await import('@/data/footer.json');
    return data.default as ContactInfo;
  } catch (error) {
    console.error('Failed to load contact info:', error);
    throw new Error('Failed to load contact information');
  }
}

// Synchronous data loaders for cases where we know the data is available
export function getPersonalInfoSync(): PersonalInfo {
  const data = require('@/data/header.json');
  return data as PersonalInfo;
}

export function getExperiencesSync(): Experience[] {
  const data = require('@/data/experiences.json');
  return data as Experience[];
}

export function getProjectsSync(): Project[] {
  const data = require('@/data/projects.json');
  return data as Project[];
}

export function getEducationSync(): Education[] {
  const data = require('@/data/education.json');
  return data as Education[];
}

export function getSkillsSync(): SkillCategory[] {
  const data = require('@/data/skills.json');
  return data as SkillCategory[];
}

export function getSocialsSync(): Social[] {
  const data = require('@/data/socials.json');
  return data as Social[];
}

export function getContactInfoSync(): ContactInfo {
  const data = require('@/data/footer.json');
  return data as ContactInfo;
}
