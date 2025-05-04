import { colorize } from "../../utils/index.js";
import { copy, remove } from '../../commandOptions/commands.js';

const move = async (pathToFile, pathToNewDirectory) => {
  try {
    await copy(pathToFile, pathToNewDirectory);
    await remove(pathToFile);
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default move;
