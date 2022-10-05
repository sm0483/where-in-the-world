import { useTheme } from "./comp/context/ThemeContext";
import Main from "./comp/Main";

function App() {
  const {theme}=useTheme();
  
  return (
    <main id={theme}>
      <Main/>
    </main>
  );
}

export default App;
