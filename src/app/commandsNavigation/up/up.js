import path from 'path';
import { colorize } from "../../utils/index.js";

const up = async () => {
  try {
    const currentDirectory = process.cwd();
    const parentDirectory = path.resolve(currentDirectory, '..');
    const rootDirectory = path.parse(parentDirectory).root;

    currentDirectory !== rootDirectory ? process.chdir(parentDirectory) : null;
  } catch {
    console.error(colorize('Operation failed', 'red'));
  }
};

export default up;
