import { compile } from 'tailwindcss';
import fs from 'fs';
import path from 'path';

async function loadStylesheet(id, base) {
  if (id === 'tailwindcss' || id === 'tailwindcss/index.css') {
    const full = path.resolve('node_modules/tailwindcss/index.css');
    return {
      base: path.dirname(full),
      content: fs.readFileSync(full, 'utf-8'),
    };
  }
  const resolved = path.resolve(base, id);
  if (fs.existsSync(resolved)) {
    return {
      base: path.dirname(resolved),
      content: fs.readFileSync(resolved, 'utf-8'),
    };
  }
  const nm = path.resolve('node_modules', id);
  if (fs.existsSync(nm)) {
    return {
      base: path.dirname(nm),
      content: fs.readFileSync(nm, 'utf-8'),
    };
  }
  throw new Error(`Cannot resolve stylesheet: ${id} from ${base}`);
}

const inputCss = fs.readFileSync('src/app/globals.css', 'utf-8');
const compiler = await compile(inputCss, {
  base: process.cwd(),
  loadStylesheet,
});

// Scan all source files in src/ for classes
const candidateSet = new Set();
function scanDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (/\.(tsx|ts|jsx|js|html)$/.test(entry.name)) {
      const content = fs.readFileSync(full, 'utf-8');
      const tokens = content.match(/[\w\-\/:\.\[\]#%_!(),]+/g) || [];
      for (const t of tokens) candidateSet.add(t);
    }
  }
}
scanDir('src');

const candidates = Array.from(candidateSet);
const compiledCss = compiler.build(candidates);

console.log('Candidates found:', candidates.length);
console.log('Compiled CSS length:', compiledCss.length);
fs.writeFileSync('src/app/compiled-tailwind.css', compiledCss, 'utf-8');
