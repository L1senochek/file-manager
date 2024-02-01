import fs from 'fs';
import colorize from '../../utils/colorize.js';

const cat = async (filePath) => {
  try {
    console.log(filePath);
    const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
    console.log(filePath, readStream);

    readStream.on('data', (chunk) => process.stdout.write(chunk));
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default cat;
