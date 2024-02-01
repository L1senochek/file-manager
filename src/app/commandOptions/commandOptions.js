import listOfAllFiles from '../listOfAllFiles/listOfAllFiles.js';
import colorize from '../utils/colorize.js';

const commandOptions = (command) => {
  const [operation, ...args] = command.split(' ');

  switch (operation) {
    case 'ls':
      listOfAllFiles();
      break;
    default:
      console.log(colorize('Invalid input', 'red'));
  }
};

export default commandOptions;
