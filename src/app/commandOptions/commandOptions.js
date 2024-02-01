import up from '../commandsNavigation/up/up.js';
import changeDirectory from '../commandsNavigation/changeDirectory/changeDirectory.js';
import listOfAllFiles from '../commandsNavigation/listOfAllFiles/listOfAllFiles.js';
import cat from '../commandsBasic/commandCat/cat.js';
import colorize from '../utils/colorize.js';

const commandOptions = async (command) => {
  const [operation, ...args] = command.split(' ');

  switch (operation) {
    case 'up':
      await up();
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
    case 'cat':
      if (args.length === 1) {
        await cat(args[0]);
      } else {
        console.log(colorize('Invalid input', 'red'));
      }
      break;
    default:
      console.log(colorize('Invalid input', 'red'));
  }
};

export default commandOptions;
