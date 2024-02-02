import fs from 'fs';
import path from 'path';
import colorize from '../../utils/colorize.js';

const add = async (fileName) => {
  try {
    const currentDirectory = process.cwd();
    const filePath = path.join(currentDirectory, fileName);
    const content = '';

    fs.writeFile(filePath, content, { flag: 'wx' }, (error) => {
      if (error) {
        console.log(colorize('Operation failed', 'red'));
      } else {
        console.log(colorize(`File created successfully.`, 'green'));
      }
    });
  } catch (error) {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default add;
