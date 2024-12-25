import LayoutRouter from '@/routes/LayoutRouter.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
          <LayoutRouter /> 
      </Router>
    </AuthProvider>
  )
}

export default App
