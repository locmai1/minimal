const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', '..', 'data');
const schemas = {
  experiences: {
    required: ['company', 'team', 'role', 'date'],
    optional: [],
  },
  projects: {
    required: ['name', 'link', 'description', 'status'],
    optional: [],
  },
  education: {
    required: ['degree', 'institution', 'date'],
    optional: [],
  },
  skills: {
    required: ['type', 'skills'],
    optional: [],
  },
  socials: {
    required: ['name', 'link'],
    optional: [],
  },
  header: {
    required: ['firstName', 'lastName', 'about', 'interests'],
    optional: ['current'],
  },
  footer: {
    required: ['email', 'updated', 'note'],
    optional: [],
  },
};

function validateObject(obj, schema, context = '') {
  const errors = [];

  // Check required fields
  for (const field of schema.required) {
    if (!(field in obj) || obj[field] === null || obj[field] === undefined) {
      errors.push(`${context}: Missing required field: ${field}`);
    }
  }

  return errors;
}

function validateFile(filename) {
  const filePath = path.join(dataDir, filename);
  const baseName = path.basename(filename, '.json');

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filename}`);
    return false;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    const schema = schemas[baseName];

    if (!schema) {
      console.warn(`⚠️  No schema defined for: ${baseName}`);
      return true;
    }

    let allErrors = [];

    if (Array.isArray(data)) {
      data.forEach((item, index) => {
        const errors = validateObject(item, schema, `${baseName}[${index}]`);
        allErrors = allErrors.concat(errors);
      });
    } else {
      const errors = validateObject(data, schema, baseName);
      allErrors = allErrors.concat(errors);
    }

    if (allErrors.length > 0) {
      console.error(`❌ Validation errors in ${filename}:`);
      allErrors.forEach((error) => console.error(`   ${error}`));
      return false;
    } else {
      console.log(`✅ ${filename} is valid`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Failed to parse ${filename}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔍 Validating data files...\n');

  const files = fs.readdirSync(dataDir).filter((file) => file.endsWith('.json'));
  let allValid = true;

  for (const file of files) {
    const isValid = validateFile(file);
    allValid = allValid && isValid;
  }

  console.log('\n' + '='.repeat(50));

  if (allValid) {
    console.log('🎉 All data files are valid!');
    process.exit(0);
  } else {
    console.log('💥 Some data files have validation errors');
    process.exit(1);
  }
}

main();
