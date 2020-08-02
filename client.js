const net = require('net');

// Establish connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.1.64',
    port: 50541,
  });
  conn.on('connect', (connect) => {
    console.log('Successfully connected to game server');
  });
  conn.on('connect', (connect) => {
    conn.write("Name: BL");
    // setInterval(()=>{conn.write("Move: up")}, 100);
  });
  conn.on('data', (data) => {
    console.log('you ded cuz you idled');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  return conn;
};

connect();

module.exports = connect;