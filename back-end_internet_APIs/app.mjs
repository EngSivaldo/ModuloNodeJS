import http from 'node:http';
import { URL } from 'node:url';
import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';

const server = http.createServer();

server.on('request', async (request, response) => {
  const filePath = new URL(request.url, `http://${request.headers.host}`).pathname;
  const fullPath = process.cwd() + filePath;

  try {
    await fs.stat(fullPath);
    const readStream = createReadStream(fullPath);
    response.writeHead(200, {'Content-Type': 'text/html'});
    readStream.pipe(response);
  } catch {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('File not found!');
    response.end();
  }
});

server.listen(8000, () => {
  console.log('Server is listening on port 8000');
});