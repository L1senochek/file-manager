import os from 'os';
import { colorize } from "../../utils/index.js";

const osArchitecture = () =>
  console.log(
    colorize('CPU Architecture: ', 'yellow') +
      colorize(os.arch(), 'brightGreen')
  );

export default osArchitecture;
