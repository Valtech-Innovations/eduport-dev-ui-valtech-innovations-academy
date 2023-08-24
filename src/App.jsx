import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './container/Signup';
import UnderDev from './component/underDev';

function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<UnderDev />} />
          <Route path='/sign-up' element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
