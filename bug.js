const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an error
  throw new Error('Something went wrong!');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});