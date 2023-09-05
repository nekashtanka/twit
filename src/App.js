import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/modules/header/header';
import MainPage from './views/mainPage/mainPage';
import RegisterPage from './views/registerPage/registerPage';
import LoginPage from './views/loginPage/loginPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
