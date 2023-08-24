
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './container/Signup';


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SignupPage />}  />
      </Routes>
    </Router>
    </>
  )
}

export default App
