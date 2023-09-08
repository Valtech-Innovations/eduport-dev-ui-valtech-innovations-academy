import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Signup from './container/Signup';
import Signin from './container/Signin';
<<<<<<< HEAD
import Courses from './container/Courses';
import Action from './container/Action';
import Banner from './container/Banner';
import Decoration from './container/Decoration';
import Feedback from './container/Feedback';
import UnderDev from './component/underDev';
=======
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Banner from './container/Banner';
import Action from './container/Action';
import Feedback from './container/Feedback';
import Decoration from './container/Decoration';
import Courses from './container/Courses';
import UnderDev from './component/underDev';

>>>>>>> 1c0fafb8bd8e817639ab56146d61363920ebee92

function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<UnderDev />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/header' element={<Header />} />
          <Route path='/banner' element={<Banner />} />
          <Route path='/action' element={<Action />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/decoration' element={<Decoration />} />
          {/* <Route path='/Instructor' element={<Instructor />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
