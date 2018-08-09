const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {

  let body = '';
  req.setEncoding('utf-8');

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      res.on('finish', () => {
        console.log('finish');
      });
      const data = JSON.parse(body || '{}');
      res.write(typeof data);
      res.end();

    } catch (err) {
      res.statusCode = 400;
      return res.end(`error, ${err.message}`);
    }
  });

});

server.listen(3000);

const stream = require('stream');

