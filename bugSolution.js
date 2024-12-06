const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error
    throw new Error('Something went wrong!');
  } catch (error) {
    console.error('Error:', error);
    res.statusCode = 500; // Internal Server Error
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
    return; // Important: Stop further execution
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});