import MainScreen from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HowToPage from './components/HowTo';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path = "/" element = {
              <MainScreen/>
            }
          />

          <Route path = "/howtouse" element = {
            <HowToPage/>
          }
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
