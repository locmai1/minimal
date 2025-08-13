import { DATA_SCHEMAS } from '@/src/lib/config/constants';

export type ValidationResult = {
  isValid: boolean;
  errors: string[];
};

export function validateObject(
  obj: any,
  schema: { required: readonly string[]; optional: readonly string[] }
): ValidationResult {
  const errors: string[] = [];

  // Check required fields
  for (const field of schema.required) {
    if (!(field in obj) || obj[field] === null || obj[field] === undefined) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateArray<T>(
  arr: T[],
  itemValidator: (item: T) => ValidationResult,
  name: string = 'item'
): ValidationResult {
  const errors: string[] = [];

  if (!Array.isArray(arr)) {
    return {
      isValid: false,
      errors: [`Expected array, got ${typeof arr}`],
    };
  }

  arr.forEach((item, index) => {
    const result = itemValidator(item);
    if (!result.isValid) {
      errors.push(`${name} at index ${index}: ${result.errors.join(', ')}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Specific validators for each data type
export const validators = {
  experience: (item: any) => validateObject(item, DATA_SCHEMAS.experience),
  project: (item: any) => validateObject(item, DATA_SCHEMAS.project),
  education: (item: any) => validateObject(item, DATA_SCHEMAS.education),
  skill: (item: any) => validateObject(item, DATA_SCHEMAS.skill),
  social: (item: any) => validateObject(item, DATA_SCHEMAS.social),
};

// Helper function to safely parse JSON data
export function safeParseData<T>(data: any, validator: (item: T) => ValidationResult): T[] {
  try {
    if (Array.isArray(data)) {
      const validationResult = validateArray(data, validator);
      if (!validationResult.isValid) {
        console.warn('Data validation warnings:', validationResult.errors);
      }
      return data as T[];
    } else {
      console.error('Expected array data');
      return [];
    }
  } catch (error) {
    console.error('Failed to parse data:', error);
    return [];
  }
}
