import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './container/Signup';
import Signin from './container/Signin';
import Header from './component/layout/Header'
import Banner from './component/layout/Banner'
import Action from './component/layout/Action'
import Footer from './component/layout/Footer'
import Feedback from './component/layout/Feedback'
import Instructor from './component/layout/Instructor'
import Decoration from './component/layout/Decoration'
import UnderDev from './component/underDev';
import Courses from './component/layout/Courses';

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
          <Route path='/Instructor' element={<Instructor />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
