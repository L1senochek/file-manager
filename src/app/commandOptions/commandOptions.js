import changeDirectory from '../changeDirectory/changeDirectory.js';
import commandUp from '../commandUp/commandUp.js';
import listOfAllFiles from '../listOfAllFiles/listOfAllFiles.js';
import colorize from '../utils/colorize.js';

const commandOptions = async (command) => {
  const [operation, ...args] = command.split(' ');

  switch (operation) {
    case 'up':
      await commandUp();
      break;
    case 'cd':
      if (args.length === 1) {
        await changeDirectory(args[0]);
      } else {
        console.log(colorize('Invalid input', 'red'));
      }
      break;
    case 'ls':
      listOfAllFiles();
      break;
    default:
      console.log(colorize('Invalid input', 'red'));
  }
};

export default commandOptions;
