const username = process.env.npm_config_username;

console.log(typeof username, username);

if (!username || username === 'true') {
  console.error(
    '\x1b[31mThe username is not specified. Use\x1b[0m ' +
      '\x1b[33m"npm start -- --username=your_username"\x1b[0m '
  );
  process.exit(1);
} else if (typeof username === 'string' && username !== 'true') {
  console.log(
    '\x1b[36mWelcome to the File Manager, \x1b[0m' +
      `\x1b[35m${username}\x1b[0m` +
      '\x1b[36m!\x1b[0m'
  );
}
