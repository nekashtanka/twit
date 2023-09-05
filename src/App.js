import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/modules/header/header';
import MainPage from './views/mainPage/mainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
