const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const fetch = require('node-fetch');

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/songs', (req, res, next) => {
  // if (req.method === 'POST') {
    // fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ne&f_has_lyrics=1&apikey=${process.env.REACT_APP_KEY}`)
    // .then(res => console.log(res))
    // .then(data => data.message.body.track_list)
    // .then(data => res.send(data))
    // .catch(err => console.log(err))
    res.send(req.body)

  // }
  next();
});
server.use('/lyrics', (req, res, next) => {
 
    res.send(req.body)

  next();
});

server.use(router);
server.listen(8080, () => {
  console.log('JSON Server running on port 8080');
});