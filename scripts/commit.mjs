import { execSync } from 'node:child_process';

const cwd = 'd:/dev/x-space/x-space-blog';
const msg = 'style: redesign blog list item layout';

execSync('git add -A', { cwd, stdio: 'inherit' });
execSync(`git commit -m "${msg}"`, { cwd, stdio: 'inherit' });
execSync('git push origin main', { cwd, stdio: 'inherit' });
console.log('OK: committed and pushed');
