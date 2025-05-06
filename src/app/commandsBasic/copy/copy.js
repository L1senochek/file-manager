import fs from 'fs';
import path from 'path';
import { colorize } from "../../utils/index.js";

const copy = async (pathToFile, pathToNewDirectory) => {
  try {
    const fileName = path.basename(pathToFile);
    const fullPathNewFile = path.join(pathToNewDirectory, fileName);

    await new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(pathToFile);
      const writeStream = fs.createWriteStream(fullPathNewFile);

      readStream.on('error', reject);
      writeStream.on('error', reject);
      writeStream.on('close', () => resolve());

      readStream.pipe(writeStream);
    });
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default copy;
