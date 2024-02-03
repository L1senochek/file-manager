import fs from 'fs/promises';
import colorize from '../../utils/colorize.js';

const remove = async (filePath) => {
  try {
    await fs.unlink(filePath);
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default remove;
