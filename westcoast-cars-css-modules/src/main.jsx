import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import VehiclesPage from './pages/VehiclesPage.jsx';

// Importera en css extern css fil...
import './assets/styles/site.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VehiclesPage />
  </StrictMode>
);
