import fs from 'fs/promises';
import path from 'path';
import colorize from '../utils/colorize.js';

const listOfAllFiles = async () => {
  try {
    const currentDirectory = process.cwd();
    const allFiles = await fs.readdir(currentDirectory);
    allFiles.sort();

    console.log('List of all files:');

    const tableData = await Promise.all(
      allFiles.map(async (file) => {
        const fullPath = path.join(currentDirectory, file);
        const stats = await fs.stat(fullPath);
        const type = stats.isDirectory() ? 'Folder' : 'File';
        return { Type: type, Name: file };
      })
    );

    console.table(tableData);
  } catch (error) {
    console.log(colorize('Operation failed', 'red'));
    console.error(colorize('Error:', 'red'), error.message);
  }
};

export default listOfAllFiles;
