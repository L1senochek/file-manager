import fs from 'fs';
import path from 'path';
import colorize from '../../utils/colorize.js';

const copy = async (pathToFile, pathToNewDirectory) => {
  try {
    const fileName = path.basename(pathToFile);
    const fullPathNewFile = path.join(pathToNewDirectory, fileName);

    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(fullPathNewFile);

    writeStream.on('error', () => {
      console.log(colorize('Operation failed', 'red'));
    });

    readStream.pipe(writeStream);

    await new Promise((resolve) => {
      writeStream.on('close', () => resolve());
    });
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default copy;
