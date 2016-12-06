import exphbs from 'express-handlebars';
import path from 'path';

const configureViewEngine = (app) => {
  const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, './../static/layouts')
  });

  app.engine('.hbs', hbs.engine);
  app.set('view engine', '.hbs');
  app.set('views', path.join(__dirname, './../static'));
};

export default configureViewEngine;
