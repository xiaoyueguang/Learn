const http = require('http');
const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

function middle(msg) {
  const id = asyncLocalStorage.getStore();
  console.log('async_hooks', `${id !== undefined ? id : '-'}`, msg);
}

let id = 0;
http.createServer((req, res) => {
  id++;

  // console.log(id, 'start')
  // setImmediate(() => {
  //   console.log(id, 'end')
  //   res.end()
  // });

  asyncLocalStorage.run(id, () => {
    middle('start');
    setImmediate(() => {
      middle('finish');
      res.end();
    });
  });
}).listen(8080);

http.get('http://localhost:8080');
http.get('http://localhost:8080');
http.get('http://localhost:8080');
http.get('http://localhost:8080');
