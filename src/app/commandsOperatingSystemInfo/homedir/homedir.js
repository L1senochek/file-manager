import os from 'os';
import colorize from '../../utils/colorize.js';

const osHomeDir = () => {
  const homeDir = os.homedir();
  console.log(
    colorize('Home Directory: ', 'yellow') + colorize(homeDir, 'brightGreen')
  );
};

export default osHomeDir;
