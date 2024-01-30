import colorize from '../utils/colorize.js';

const greeting = async () => {
  const username = process.env.npm_config_username;

  if (!username || username === 'true') {
    console.error(
      colorize('The username is not specified. Use ', 'red') +
        colorize('"npm start -- --username=your_username"', 'yellow')
    );
    process.exit(1);
  } else if (typeof username === 'string' && username !== 'true') {
    console.log(
      colorize('Welcome to the File Manager, ', 'cyan') +
        colorize(username, 'magenta') +
        colorize('!', 'cyan')
    );
  }
};

export default greeting;
