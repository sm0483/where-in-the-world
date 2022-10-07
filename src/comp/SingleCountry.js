import {HiArrowNarrowLeft} from 'react-icons/hi'

const Single = (
    {information}
) => {
    //currency=>array nested //capital=>array
    const {common,nativeName,internetDomain,
        currencies,region,subRegion,capital,borders,flag,population,languages}=information;

    const array=Object.values(nativeName);
    const nativeCommon=array[0].common;

    
    return (
        <div className="hero-container container-fluid p-4 background-color">
            <button className="btn  back-button text-color head-background-color"><HiArrowNarrowLeft/>Back</button>
            <div className="main-container pt-5 row d-flex  .align-items-center">
                <div className="flag-container col-lg-6 text-center text-lg-start">
                    <img className='img-fluid' src={flag} alt="flag"  />
                </div>
                <div className="detail-container col-lg-6 py-4 text-color">
                    <div className="main-detail row">
                        <div className="first-detail col-lg-6 ">
                            <h2 >{common}</h2>
                            <h3 >Native Name :<span>{nativeCommon}</span></h3>
                            <h3>Population :<span>{population}</span></h3>
                            <h3>Region :<span>{region}</span></h3>
                            <h3>Sub Region :<span>{subRegion}</span></h3>
                            <h3>Capital :{
                                capital.map((value,index)=>{
                                    return <span key={index}>{value}</span>
                                })
                            }</h3>
                        </div>

                        <div className="second-detail col-lg-6">
                            <h3>Top Level domain :<span>{internetDomain}</span></h3>
                            <h3>Currencies :{
                                Object.values(currencies).map((value,index)=>{
                                    return(<span>{value.name}</span>)
                                })                        
                                }</h3>
                            <h3>Languages :{
                                Object.values(languages).map((value,index)=>{
                                    // console.log(value,index);
                                    return(
                                        <span key={index}>{value},</span>
                                    )
                                })
                                }</h3>        
                        </div>
                    </div>

                    <div className="border-box">
                        <h3>Border Countries</h3>
                        <div className="border-content">
                            {
                                borders.map((value,index)=>{
                                    return (
                                        <span key={index}>{value}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
            </div>

        </div> 
    );
}
 
export default Single;

