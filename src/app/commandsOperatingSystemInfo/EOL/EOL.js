import os from 'os';
import colorize from '../../utils/colorize.js';

const osEOL = () =>
  console.log(
    colorize('EOL: ', 'yellow') +
      colorize(JSON.stringify(os.EOL), 'brightGreen')
  );

export default osEOL;
