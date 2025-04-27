/**
 * TypeScript Lab
 * 
 * This is the main entry point for the TypeScript Lab.
 * Run this file with `npm start` to see a list of available examples.
 */

import * as fs from 'fs';
import * as path from 'path';

const examplesDir = path.join(__dirname, 'examples');
const recipesDir = path.join(__dirname, 'recipes');

console.log('\n=== TypeScript Lab ===\n');
console.log('A comprehensive repository for TypeScript\n');

console.log('Available Examples:');
try {
  const examples = fs.readdirSync(examplesDir);
  examples.forEach(example => {
    if (example.endsWith('.ts')) {
      console.log(`- ${example}`);
    }
  });
} catch (err) {
  console.log('Examples directory not found or empty');
}

console.log('\nAvailable Recipes:');
try {
  const recipes = fs.readdirSync(recipesDir);
  recipes.forEach(recipe => {
    if (fs.statSync(path.join(recipesDir, recipe)).isDirectory()) {
      console.log(`- ${recipe}`);
    }
  });
} catch (err) {
  console.log('Recipes directory not found or empty');
}

console.log('\nTo run an example:');
console.log('  npm run examples examples/filename.ts');
console.log('\nTo explore a module, navigate to its directory and follow its README instructions'); 