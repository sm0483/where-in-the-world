import Switch from 'react-switch'
import {useTheme} from './context/ThemeContext'


const Head = () => {
    const {changeTheme,theme}=useTheme();

    return (
        <section className="head-container  head-background-color head-border-color ">
            <div className="head-sub-container d-flex justify-content-between align-items-center d-flex align-items-center justify-content-between ">
                <h1 className='text-color pt-2'>Where in the world?</h1>
                <Switch className='toggle' onChange={changeTheme} checked={theme==="dark"} 
                onColor={"#202c37"}
                onHandleColor={'#2b3945'}
                />
            </div>
        </section>
    );
}
 
export default Head;