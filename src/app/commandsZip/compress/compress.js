import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import colorize from '../../utils/colorize.js';

const compress = async (pathToFile, pathToDestination) => {
  try {
    const fileName = path.basename(pathToFile, path.extname(pathToFile));
    const fullPathDestination = !pathToDestination.endsWith('.br')
      ? path.join(pathToDestination, fileName + '.br')
      : pathToDestination;

    await fs.promises.access(pathToFile);

    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(fullPathDestination);
    const brotliStream = zlib.createBrotliCompress();

    readStream.on('error', () =>
      console.log(colorize('Operation failed', 'red'))
    );
    writeStream.on('error', () =>
      console.log(colorize('Operation failed', 'red'))
    );
    brotliStream.on('error', () =>
      console.log(colorize('Operation failed', 'red'))
    );

    readStream.pipe(brotliStream).pipe(writeStream);

    await new Promise((resolve) => writeStream.on('close', () => resolve()));
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default compress;
