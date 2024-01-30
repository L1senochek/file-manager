const colorize = (text, color) => {
  const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
  };
  const colorCode = colors[color] || colors.reset;

  return `${colorCode}${text}${colors.reset}`;
};

export default colorize;
