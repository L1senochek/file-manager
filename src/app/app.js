import greeting from './greeting/greeting.js';
import readline from 'readline';
import colorize from './utils/colorize.js';

const app = async () => {
  const username = process.env.npm_config_username;
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const processCommand = (command) =>
    console.log(colorize('Command: ', 'brightGreen') + command);

  await greeting();

  readLine.setPrompt(colorize('> ', 'brightGreen'));
  readLine.prompt();

  readLine.on('line', async (input) => {
    const command = input.trim();
    processCommand(command);

    //

    readLine.prompt();
  });

  readLine.on('close', () => {
    console.log(
      colorize('Thank you for using File Manager, ', 'purple') +
        colorize(username, 'magenta') +
        colorize(', goodbye!', 'purple')
    );
    process.exit(0);
  });
};

export default app;
