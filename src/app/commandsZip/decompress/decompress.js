import fs from 'fs';
import zlib from 'zlib';
import colorize from '../../utils/colorize.js';

const decompress = async (pathToFile, pathToDestination) => {
  try {
    await fs.promises.access(pathToFile);

    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToDestination);
    const brotliStream = zlib.createBrotliDecompress();

    readStream.on('error', () =>
      console.log(colorize('Decompression operation failed', 'red'))
    );
    writeStream.on('error', () =>
      console.log(colorize('Decompression operation failed', 'red'))
    );
    brotliStream.on('error', () =>
      console.log(colorize('Decompression operation failed', 'red'))
    );

    readStream.pipe(brotliStream).pipe(writeStream);

    await new Promise((resolve) => writeStream.on('close', resolve));
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default decompress;
