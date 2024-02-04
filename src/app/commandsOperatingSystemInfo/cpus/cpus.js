import os from 'os';
import colorize from '../../utils/colorize.js';

const osCpus = () => {
  const cpus = os.cpus();

  const tableData = cpus.map(({ model, speed }, index) => ({
    CPU: index + 1,
    Model: model,
    'Speed (GHz)': (speed / 1000).toFixed(2),
  }));

  console.log(colorize('CPUs info:', 'yellow'));
  console.table(tableData);
};

export default osCpus;
