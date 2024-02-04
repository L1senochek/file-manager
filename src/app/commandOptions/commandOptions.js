import up from '../commandsNavigation/up/up.js';
import changeDirectory from '../commandsNavigation/changeDirectory/changeDirectory.js';
import listOfAllFiles from '../commandsNavigation/listOfAllFiles/listOfAllFiles.js';
import cat from '../commandsBasic/cat/cat.js';
import colorize from '../utils/colorize.js';
import add from '../commandsBasic/add/add.js';
import renameCommand from '../commandsBasic/rename/rename.js';
import copy from '../commandsBasic/copy/copy.js';
import moveCommand from '../commandsBasic/move/move.js';
import remove from '../commandsBasic/remove/remove.js';
import hash from '../commandsHash/hash/hash.js';
import compress from '../commandsZip/compress/compress.js';
import decompress from '../commandsZip/decompress/decompress.js';
import osEOL from '../commandsOperatingSystemInfo/EOL/EOL.js';
import osCpus from '../commandsOperatingSystemInfo/cpus/cpus.js';
import osHomeDir from '../commandsOperatingSystemInfo/homedir/homedir.js';

const commandOptions = async (command) => {
  const [operation, ...args] = command.split(' ');

  switch (operation) {
    case 'up':
      await up();
      break;
    case 'cd':
      args.length === 1
        ? await changeDirectory(args[0])
        : console.log(colorize('Invalid input', 'red'));
      break;
    case 'ls':
      listOfAllFiles();
      break;
    case 'cat':
      args.length === 1
        ? await cat(args[0])
        : console.log(colorize('Invalid input', 'red'));
      break;
    case 'add':
      args.length === 1
        ? await add(args[0])
        : console.log(colorize('Invalid input', 'red'));
      break;
    case 'rn':
      args.length === 2
        ? await renameCommand(args[0], args[1])
        : console.log(colorize('Invalid input', 'red'));
      break;
    case 'cp':
      args.length === 2
        ? await copy(args[0], args[1])
        : console.log(colorize('Invalid input', 'red'));
      break;
    case 'mv':
      args.length === 2
        ? await moveCommand(args[0], args[1])
        : console.log(colorize('Invalid input', 'red'));
      break;
    case 'rm':
      args.length === 1
        ? await remove(args[0])
        : console.log(colorize('Invalid input', 'red'));
      break;
    case 'os':
      switch (args[0]) {
        case '--EOL':
          osEOL();
          break;
        case '--cpus':
          osCpus();
          break;
        case '--homedir':
          osHomeDir();
          break;
        default:
          console.log(colorize('Invalid input', 'red'));
      }
      break;
    case 'hash':
      args.length === 1
        ? await hash(args[0])
        : console.log(colorize('Invalid input', 'red'));
      break;
    case 'compress':
      args.length === 2
        ? await compress(args[0], args[1])
        : console.log(colorize('Invalid input', 'red'));
      break;
    case 'decompress':
      args.length === 2
        ? await decompress(args[0], args[1])
        : console.log(colorize('Invalid input', 'red'));
      break;
    default:
      console.log(colorize('Invalid input', 'red'));
  }
};

export default commandOptions;
