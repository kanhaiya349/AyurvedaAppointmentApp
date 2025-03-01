import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Programmes from './pages/Programmes';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Accomodation from './pages/Accomodation';
import Terms from './pages/Terms';
import Privacy from './pages/privacy';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/all-programmes' element={<Programmes/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointments/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/accomodation' element={<Accomodation/>} />
        <Route path='/privacy-policy' element={<Privacy/>} />
        <Route path='/terms' element={<Terms/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App