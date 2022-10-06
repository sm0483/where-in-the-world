import { useTheme } from "./comp/context/ThemeContext";
import Main from "./comp/Main";
import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
import Country from './comp/Country'



function App() {
  const {theme}=useTheme();
  
  return (
    <main id={theme}>
      <Router>
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
