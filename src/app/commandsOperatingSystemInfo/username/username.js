import os from 'os';
import colorize from '../../utils/colorize.js';

const osUsername = () =>
  console.log(
    colorize('System User Name: ', 'yellow') +
      colorize(os.userInfo().username, 'brightGreen')
  );

export default osUsername;
