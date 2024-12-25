import LayoutRouter from '@/routes/LayoutRouter.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <Router>
          <ToastContainer theme="colored" position="top-right" autoClose={3000} />
          <LayoutRouter /> 
      </Router>
    </AuthProvider>
  )
}

export default App
