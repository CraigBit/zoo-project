import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { getAnimalData } from './animal-data/animal-data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App getAnimalData={getAnimalData} />);
