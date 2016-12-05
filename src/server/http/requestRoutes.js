const routeRequests = (app, store) => {
  app.get('/',
  (req, res) => {
    res.render('landing');
  });

  app.post('/b/:room',
  (req, res) => {
    
  });

  app.get('/b/:room',
  (req, res) => {
    res.render('board');
  });
};

export default routeRequests;
