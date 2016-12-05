const routeRequests = (app) => {
  app.get('/',
  (req, res) => {
    res.render('index');
  });
};

export default routeRequests;
