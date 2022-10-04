import Switch from 'react-switch'
import {useTheme} from './context/ThemeContext'


const Head = () => {
    const {changeTheme,theme}=useTheme();

    return (
        <section className="head-container head-background-color">
            <div className="head-sub-container d-flex justify-content-between align-items-center ">
                <h1 className='text-color'>Where in the world?</h1>
                <Switch className='toggle' onChange={changeTheme} checked={theme==="dark"} 
                onColor={"#202c37"}
                onHandleColor={'#2b3945'}
                />
            </div>
        </section>
    );
}
 
export default Head;