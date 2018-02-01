import ReactDOM from 'react-dom';
import { renderRoutes } from './routes/routes';
import registerServiceWorker from './registerServiceWorker';
import './App.less';

ReactDOM.render(
  renderRoutes(),
  document.getElementById('root')
);
registerServiceWorker();
