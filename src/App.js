import { BrowserRouter as Router, Routes, Route ,Redirect } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Hello from './Hello';





function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hello" element={<Hello />} />

      </Routes>
    </Router>
  );
}

export default App;
