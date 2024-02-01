import path from 'path';
import colorize from '../../utils/colorize.js';

const up = async () => {
  try {
    const currentDirectory = process.cwd();
    const parentDirectory = path.resolve(currentDirectory, '..');
    const rootDirectory = path.parse(parentDirectory).root;

    if (currentDirectory !== rootDirectory) {
      process.chdir(parentDirectory);
    }
  } catch {
    console.error(colorize('Operation failed', 'red'));
  }
};

export default up;
