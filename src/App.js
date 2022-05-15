import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './components/Main';
import HowToPage from './components/HowTo';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path = "/" element = {
            <div>
              <MainScreen/>
            </div>
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
