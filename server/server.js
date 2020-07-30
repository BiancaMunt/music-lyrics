const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const fetch = require('node-fetch');

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/songs', (req, res, next) => {
  res.send(req.body)
  next();
});
// server.use('/lyrics', (req, res, next) => {
 
//   res.send(req.body)
//   next();
// });

server.use(router);
server.listen(8080, () => {
  console.log('JSON Server running on port 8080');
});