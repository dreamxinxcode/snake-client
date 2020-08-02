const net = require('net');
const connect = require('./client');

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function(conn) {
  let connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

console.log('Connecting..');
setupInput();