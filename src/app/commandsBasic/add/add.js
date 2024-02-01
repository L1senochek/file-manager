import fs from 'fs';
import colorize from '../../utils/colorize.js';

const add = async (fileName) => {
  try {
    const currentDirectory = process.cwd();
    const filePath = path.join(currentDirectory, fileName);

    fs.writeFile(filePath, content, { flag: 'wx' });

    console.log(colorize(`File created successfully.`, 'green'));
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default add;
