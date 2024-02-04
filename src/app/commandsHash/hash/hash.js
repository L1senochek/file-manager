import fs from 'fs';
import crypto from 'crypto';
import colorize from '../../utils/colorize.js';

const hash = async (fileToPath) => {
  try {
    const stream = fs.createReadStream(fileToPath);
    const hash = crypto.createHash('sha256');

    return new Promise((resolve, reject) => {
      stream.on('data', (chunk) => hash.update(chunk));

      stream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(colorize(fileHash, 'brightGreen'));
        resolve(fileHash);
      });

      stream.on('error', (error) => reject(error));
    });
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default hash;
