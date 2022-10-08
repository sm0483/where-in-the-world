import {HiArrowNarrowLeft} from 'react-icons/hi'
import { Link } from 'react-router-dom';

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
                        <div className="first-detail col-lg-6 ">
                            <h2 >{common}</h2>
                            <h3 >Native Name : <span>{nativeCommon ? nativeCommon : "None"}</span></h3>
                            <h3>Population : <span>{population ? population :"None"}</span></h3>
                            <h3>Region : <span>{region}</span></h3>
                            <h3>Sub Region : <span>{subRegion ? subRegion : "None"}</span></h3>
                            <h3>Capital : {
                                capital ?
                                capital.map((value,index)=>{
                                    return <span key={index}>{value}</span>
                                }) :<span>None</span>
                            }</h3>
                        </div>

                        <div className="second-detail col-lg-6">
                            <h3>Top Level domain : <span>{internetDomain ? internetDomain : "None"}</span></h3>
                            <h3>Currencies : {
                                currencies ?
                                Object.values(currencies).map((value,index)=>{
                                    return(<span key={index}>{value.name}</span>)
                                }) : <span>None</span>                        
                                }</h3>
                            <h3>Languages : {
                                languages ?
                                Object.values(languages).map((value,index)=>{
                                    // console.log(value,index);
                                    return(
                                        <span key={index}>{value},</span>
                                    ) 
                                }) : <span>None</span>
                                }</h3>        
                        </div>
                    </div>

                    <div className="border-box">
                        <h3>Border Countries</h3>
                        <div className="border-content">
                            { borders ?
                                borders.map((value,index)=>{
                                    return (
                                        <span key={index}>{value}</span>
                                    )
                                }) :<span>None</span>
                            }
                        </div>
                    </div>
                </div>
                
            </div>

        </div> 
    );
}
 
export default Single;

