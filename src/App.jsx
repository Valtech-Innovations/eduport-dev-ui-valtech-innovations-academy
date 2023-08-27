import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './container/Signup';
// import Signin from './container/Signin';
import UnderDev from './component/underDev';
import ForgetPassword from './container/ForgetPassword';
import Signin from './container/SignIn';

function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<UnderDev />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
