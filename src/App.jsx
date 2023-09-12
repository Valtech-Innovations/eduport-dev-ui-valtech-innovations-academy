import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Signup from './container/Signup';
import Signin from './container/Signin';
import Courses from './container/Courses';
import Action from './container/Action';
import Banner from './container/Banner';
import Decoration from './container/Decoration';
import Feedback from './container/Feedback';
import Instructor from './container/Instructor';
import UnderDev from './component/underDev';
import Layout from './component/layout/Layout';
import Home from './pages/Home';
// import Signin from './container/Signin';
import UnderDev from './component/underDev';
import ForgetPassword from './container/ForgetPassword';
import Signin from './container/Signin';

function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<UnderDev />} />
          <Route path='home' element={<Home/>} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/header' element={<Header />} />
          <Route path='/banner' element={<Banner />} />
          <Route path='/action' element={<Action />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/decoration' element={<Decoration />} />
          <Route path='/Instructor' element={<Instructor />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
