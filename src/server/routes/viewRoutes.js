const routeViews = (app) => {
  app.get('/',
  (req, res) => {
    res.render('index');
  });
};

export default routeViews;
