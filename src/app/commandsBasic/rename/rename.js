import fs from 'fs/promises';
import path from 'path';
import colorize from '../../utils/colorize.js';

const renameCommand = async (oldFilePath, newFileName) => {
  try {
    const currentDirectory = path.dirname(oldFilePath);
    const newFullPath = path.join(currentDirectory, newFileName);

    await fs.access(oldFilePath);
    await fs.rename(oldFilePath, newFullPath);
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default renameCommand;
