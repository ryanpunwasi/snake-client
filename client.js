const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.2.59',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

module.exports = {
  connect
};