import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFile = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(currentFile), '..');
const schemaPath = path.join(repoRoot, 'schemas', 'oxp-v0.1.schema.json');
const examplesDir = path.join(repoRoot, 'examples');

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const schema = JSON.parse(await readFile(schemaPath, 'utf8'));
const validate = ajv.compile(schema);
const exampleFiles = (await readdir(examplesDir))
  .filter((fileName) => fileName.endsWith('.json'))
  .sort();

if (exampleFiles.length === 0) {
  console.error('No example JSON files found in examples/.');
  process.exit(1);
}

let hasErrors = false;

for (const fileName of exampleFiles) {
  const filePath = path.join(examplesDir, fileName);
  const rawContent = await readFile(filePath, 'utf8');
  const json = JSON.parse(rawContent);
  const isValid = validate(json);

  if (isValid) {
    console.log(`PASS ${path.join('examples', fileName)}`);
    continue;
  }

  hasErrors = true;
  console.error(`FAIL ${path.join('examples', fileName)}`);

  for (const error of validate.errors ?? []) {
    const location = error.instancePath || '/';
    console.error(`  - ${location} ${error.message}`);
  }
}

if (hasErrors) {
  process.exit(1);
}