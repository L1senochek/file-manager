import fs from 'fs/promises';
import path from 'path';
import colorize from '../../utils/colorize.js';

const listOfAllFiles = async () => {
  try {
    const currentDirectory = process.cwd();
    const allFiles = await fs.readdir(currentDirectory);

    const files = await Promise.all(
      allFiles.map(async (file) => {
        const fullPath = path.join(currentDirectory, file);
        const stat = await fs.stat(fullPath);
        return { name: file, isDirectory: stat.isDirectory() };
      })
    );

    const sortedFiles = files.sort((firstFile, secondFile) => {
      if (firstFile.isDirectory && !secondFile.isDirectory) return -1;
      if (!firstFile.isDirectory && secondFile.isDirectory) return 1;
      return firstFile.name.localeCompare(secondFile.name);
    });

    const tableData = sortedFiles.map((entry) => ({
      Type: entry.isDirectory ? 'Folder' : 'File',
      Name: entry.name,
    }));

    console.log('List of all files:');
    console.table(tableData);
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default listOfAllFiles;
