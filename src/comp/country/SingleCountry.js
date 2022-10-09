import {HiArrowNarrowLeft} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import BorderDetails from './BorderDetail';
import FirstDetails from './First';
import SecondDetails from './SecondDetail';

const Single = (
    {information}
) => {
    //currency=>array nested //capital=>array
    const {common,nativeName,internetDomain,
        currencies,region,subRegion,capital,borders,flag,population,languages}=information;

    let nativeCommon=undefined;    
    
    if(nativeName){
        const array=Object.values(nativeName);
        nativeCommon=array[0].common;
    }else{
        nativeCommon=common;
    }

    
    return (
        <div className="hero-container container-fluid p-4 background-color">
            <Link to={'/'} className="btn  back-button text-color head-background-color"><HiArrowNarrowLeft/>Back</Link>
            <div className="main-container pt-5 row d-flex  .align-items-center">
                <div className="flag-container col-lg-4 text-center text-lg-start">
                    <img className='flag-image' src={flag} alt="flag"  />
                </div>
                <div className="detail-container col-lg-6 py-4 text-color">
                    <div className="main-detail row">
                    <FirstDetails region={region} subRegion={subRegion} 
                    capital={capital} population={population}
                     nativeCommon={nativeCommon}
                    />
                    <SecondDetails
                      internetDomain={internetDomain} currencies={currencies}
                        languages={languages}
                        />
                </div>
                    <BorderDetails borders={borders}/>
                </div>
                
            </div>

        </div> 
    );
}
 
export default Single;

