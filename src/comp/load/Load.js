import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import light from '../../images/load.json'
import {useTheme} from '../context/ThemeContext'
import dark from '../../images/load-dark.json'


const Load = () => {
    const container=useRef(null);
    const {theme}=useTheme();
    let load=undefined;

    theme==="light"?load=light:load=dark;

    useEffect(()=>{
        const inst=lottie.loadAnimation({        
        container:container.current,
        renderer:'svg',
        autoplay:true,
        animationData:load
    });

    return ()=>inst.destroy();

    },[theme])
    return (
        <div className="loading" ref={container}>
        </div>
    );
}
 
export default Load;