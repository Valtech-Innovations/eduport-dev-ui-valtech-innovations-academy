import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './container/Signup';
import Signin from './container/Signin';
import UnderDev from './component/underDev';
import Course from './Course';

function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<UnderDev />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/Course' element={<Course />} />
       
        </Routes>
      </Router>
    </>
  )
}

export default App
