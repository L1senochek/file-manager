import colorize from '../../utils/colorize.js';
import copy from '../copy/copy.js';
import remove from '../remove/remove.js';

const move = async (pathToFile, pathToNewDirectory) => {
  try {
    await copy(pathToFile, pathToNewDirectory);
    await remove(pathToFile);
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default move;
