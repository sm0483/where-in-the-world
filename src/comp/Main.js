import { useTheme } from "./context/ThemeContext";
import Head from "./Head";
import Search from "./Search";
import List from "./List";

const Main = () => {
    const {theme}=useTheme();
    console.log(theme);

    return (
        <div className="main-page"id={theme}>
            <Head/>
            <Search/>
            <List/>
        </div>
    );
}
 
export default Main;