import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'
import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';

createRoot(document.getElementById('root')!).render(
    <App />
)
