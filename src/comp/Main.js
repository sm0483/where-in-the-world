import { useTheme } from "./context/ThemeContext";
import Head from "./Head";
import Search from "./Search";

const Main = () => {
    const {theme}=useTheme();
    console.log(theme);

    return (
        <div className="main-page " id={theme}>
            <Head/>
            <Search/>
        </div>
    );
}
 
export default Main;