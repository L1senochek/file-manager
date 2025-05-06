import {
  up, changeDirectory, listOfAllFiles, cat, add, renameCommand, copy,
  moveCommand, remove, hash, compress, decompress, mkdir,
  osEOL, osCpus, osHomeDir, osUsername, osArchitecture
} from './commands.js';
import { parseCommand, colorize } from "../utils/index.js";

const osHandlers = {
  '--EOL': osEOL,
  '--cpus': osCpus,
  '--homedir': osHomeDir,
  '--username': osUsername,
  '--architecture': osArchitecture,
};

const handlers = {
  up: { fn: up, args: 0 },
  cd: { fn: changeDirectory, args: 1 },
  ls: { fn: listOfAllFiles, args: 0 },
  cat: { fn: cat, args: 1 },
  add: { fn: add, args: 1 },
  mkdir: { fn: mkdir, args: 1 },
  rn: { fn: renameCommand, args: 2 },
  cp: { fn: copy, args: 2 },
  mv: { fn: moveCommand, args: 2 },
  rm: { fn: remove, args: 1 },
  hash: { fn: hash, args: 1 },
  compress: { fn: compress, args: 2 },
  decompress: { fn: decompress, args: 2 },
};

const commandOptions = async (command) => {
  const [operation, ...args] = parseCommand(command.trim());

  if (operation === 'os') {
    const osCommand = args[0];
    const osFn = osHandlers[osCommand];
    osFn ? osFn() : console.log(colorize('Invalid input', 'red'));
    return;
  }

  const handler = handlers[operation];
  if (!handler) {
    console.log(colorize('Invalid input', 'red'));
    return;
  }

  if (args.length !== handler.args) {
    console.log(colorize('Invalid input', 'red'));
    return;
  }

  try {
    await handler.fn(...args);
  } catch (e) {
    console.log(colorize('Operation failed', 'red'));
  }
};

export default commandOptions;
