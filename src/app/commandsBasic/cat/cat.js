import fs from 'fs';
import colorize from '../../utils/colorize.js';

const cat = async (filePath) => {
  try {
    console.log(filePath);
    filePath.startsWith("'") || filePath.startsWith('"')
      ? (filePath = filePath.slice(1))
      : null;

    filePath.endsWith("'") || filePath.endsWith('"')
      ? (filePath = filePath.slice(0, -1))
      : null;

    console.log(filePath);

    const readStream = fs.createReadStream(filePath, {
      encoding: 'utf-8',
    });

    readStream.on('data', (chunk) => process.stdout.write(chunk));
    readStream.on('error', () => {
      console.log(colorize('Operation failed', 'red'));
    });
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default cat;
