import os from 'os';
import colorize from '../../utils/colorize.js';

const osArchitecture = () =>
  console.log(
    colorize('CPU Architecture: ', 'yellow') +
      colorize(os.arch(), 'brightGreen')
  );

export default osArchitecture;
