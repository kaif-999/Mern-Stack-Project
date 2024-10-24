import { Route } from 'react-router-dom';
import './App.css';
import AuthLayout from './components/auth/layout';
import AuthRegister from './pages/auth/login';

function App() {

  return (
    <div className=' flex flex-col overflow-hidden bg-white'>
      <h1>Header Component</h1>
<Routes>
  <Route path="/auth" element={<AuthLayout />}>
  <Route path="login" element={<AuthLogin />} />
  <Route path="register" element={<AuthRegister />} /> 
  </Route>
</Routes>
    </div>
  );
}
export default App;
