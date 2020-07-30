const net = require('net');

// Establish connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '192.168.1.64',
    port: 50541
  });
  conn.setEncoding('utf8');
  // attach an event handler to handle incoming data and console log it for the player.
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

console.log('Connecting..');
connect();