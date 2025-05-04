import os from 'os';
import { colorize } from "../../utils/index.js";

const osHomeDir = () =>
  console.log(
    colorize('Home Directory: ', 'yellow') +
      colorize(os.homedir(), 'brightGreen')
  );

export default osHomeDir;
