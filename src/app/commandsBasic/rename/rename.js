import fs from 'fs/promises';
import path from 'path';
import colorize from '../../utils/colorize.js';

const renameCommand = async (pathToFile, newFileName) => {
  try {
    const currentDirectory = path.dirname(pathToFile);
    const newFullPath = path.join(currentDirectory, newFileName);

    await fs.access(pathToFile);
    await fs.rename(pathToFile, newFullPath);
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default renameCommand;
