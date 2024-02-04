import colorize from '../../utils/colorize.js';

const changeDirectory = async (targetDirectory) => {
  try {
    process.chdir(targetDirectory);
    console.log(colorize('Successfully!', 'brightGreen'));
  } catch {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default changeDirectory;
