import os from 'os';
import { colorize } from "../../utils/index.js";

const osEOL = () =>
  console.log(
    colorize('EOL: ', 'yellow') +
      colorize(JSON.stringify(os.EOL), 'brightGreen')
  );

export default osEOL;
