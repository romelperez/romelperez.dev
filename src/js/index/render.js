import store from './store.js';
import App from './components/App';

const rootEl = document.querySelector('#app');

export default function () {
  ReactDOM.render(<App />, rootEl);
}
