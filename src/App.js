import { useTheme } from "./comp/context/ThemeContext";
import Main from "./comp/Main";
import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
import Country from './comp/Country'
import Head from "./comp/main/Head";



function App() {
  const {theme}=useTheme();

  //find the main htmlElement add id dark or light
  const htmlElement=document.querySelector('html');
  htmlElement.setAttribute('id',`${theme}`);
  
  //find the body element and add background class to it
  const bodyElement=document.querySelector('body');
  bodyElement.classList.add("background-color");

  return (
    <main>
      <Router>
      <Head/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/:id" 
          element={
              <Country/>
          }/>
        </Routes>  
      </Router>
    </main>
  );
}

export default App;
