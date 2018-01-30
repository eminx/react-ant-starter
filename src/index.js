import ReactDOM from 'react-dom';
import { renderRoutes } from './routes/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  renderRoutes(),
  document.getElementById('root')
);
registerServiceWorker();
