const { conn } = require('./client');
let connection;

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077') { // w
    connection.write("Move: up");
  }
  if (key === '\u0061') { // a
    connection.write("Move: left");
  }
  if (key === '\u0073') { // s
    connection.write("Move: down");
  }
  if (key === '\u0064') { // d
    connection.write("Move: right");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };