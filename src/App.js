
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './view/landingPage/LandingPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import StudentOne from './view/students/StudentOne';
import StudentTwo from './view/students/StudentTwo';
import LoginPage from './view/login/LoginPage';
import RegisterPage from './view/register/RegisterPage';

const App =() =>{
  return (
    <BrowserRouter>
      <Header/>
        <main>
        <Routes> 
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/studentOne' element={<StudentOne/>} />
          <Route path='/studentTwo' element={<StudentTwo/>} />
          
        </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
