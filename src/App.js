import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from '../src/components/Dashboard/dashboard'
import Login from './login'
import PrivateRoutes from '../src/utils/privateRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/" exact />
            <Route element={<Dashboard />} path="/dashboard" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;