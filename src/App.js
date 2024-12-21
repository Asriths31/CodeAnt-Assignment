import logo from './logo.svg';
import './App.css';
import {Route,Routes,BrowserRouter, useLocation} from "react-router-dom"
import LoginPage from "./components/login-page"
import NavBar from "./components/navbar"
import Repository from './components/repository';
function App() {
 
  return (
   
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<LoginPage />} ></Route>
    <Route path="/repo" element={<Repository />}></Route>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
