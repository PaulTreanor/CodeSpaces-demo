import fs from 'fs'

const codeSpaceName = process.env.CODESPACE_NAME;

if (codeSpaceName) {
  fs.writeFileSync('.env', `VITE_CODESPACE_NAME=${codeSpaceName}\n`, { flag: 'a' });
}