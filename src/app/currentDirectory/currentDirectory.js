import colorize from '../utils/colorize.js';

const currentDirectory = () => {
  const currentDirectory = process.cwd();

  console.log(
    colorize('You are currently in ', 'orange') +
      colorize(currentDirectory, 'yellow')
  );
};

export default currentDirectory;
