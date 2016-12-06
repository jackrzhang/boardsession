import { createRoom } from './httpActions';

const routeRequests = (app, store) => {
  app.get('/',
  (req, res) => {
    res.render('landing');
  });

  app.post('/api/rooms',
  (req, res) => {
    const room = req.body.room;
    store.dispatch(createRoom(room));
    res.send(room);
  });

  app.get('/b/:room',
  (req, res) => {
    if (store.getState().get(req.params.room)) {
      res.render('board', { layout: 'board' });
    } else {
      res.redirect('/');
    }
  });

  // Wildcard 404
  app.all('*',
  (req, res) => {
    res.redirect('/');
  });
};

export default routeRequests;
