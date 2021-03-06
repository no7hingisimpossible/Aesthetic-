import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home/Home'
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import AboutUs from './Pages/AboutUs/AboutUs';
import PageNotFound from './Pages/PageNotFound/PageNotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/service/:id' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        {/* <Route path='*' element={<PageNotFound></PageNotFound>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
