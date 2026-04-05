import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFile = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(currentFile), '..');
const schemaPath = path.join(repoRoot, 'schemas', 'oxp-v0.1.schema.json');

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const schema = JSON.parse(await readFile(schemaPath, 'utf8'));
ajv.compile(schema);

console.log('PASS schemas/oxp-v0.1.schema.json');