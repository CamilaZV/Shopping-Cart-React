import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FiltersProvider } from './context/filters.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
