import morgan from 'morgan';
import bodyParser from 'body-parser';

const initialize = (app) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

export default initialize;
