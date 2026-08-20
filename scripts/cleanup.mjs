import { execSync } from 'node:child_process';

const cwd = 'd:/dev/x-space/x-space-blog';

execSync('git add -A', { cwd, stdio: 'inherit' });
execSync('git commit -m "chore: remove temp script"', { cwd, stdio: 'inherit' });
execSync('git push origin main', { cwd, stdio: 'inherit' });
console.log('OK: cleanup committed and pushed');
