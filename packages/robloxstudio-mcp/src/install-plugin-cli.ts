import { installPlugin } from './install-plugin.js';

installPlugin().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exitCode = 1;
});
