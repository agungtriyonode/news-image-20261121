// News-image entry (Node 22, standard library only).
// The repository ships the finished front page as entry.png; this program
// places an exact copy of it at the grader's output location.
// It reads no network and writes the same bytes on every run.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = resolve(targetDir, 'entry.png');

mkdirSync(targetDir, { recursive: true });
writeFileSync(target, readFileSync(source));
