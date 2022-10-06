import {HiArrowNarrowLeft} from 'react-icons/hi'

const Single = (
    {information}
) => {
    //currency=>array nested //capital=>array
    const {common,nativeName,internetDomain,
        currencies,region,subRegion,capital,borders,flag,population,languages}=information;
    const nativeCommon=nativeName.eng.common;


    
    return ( 
        <div className="hero container-fluid">
            <button className="btn btn-primary back-button"><HiArrowNarrowLeft/>Back</button>
            <div className="hero-body">
                <div className="flag-image">
                    <img src={flag} alt="flag" className="img-fluid" />
                </div>
                <div className="country-details">
                    <div className="first-detail">
                        <h2>{common}</h2>
                        <h3>Native Name:<span>{nativeCommon}</span></h3>
                        <h3>Population:<span>{population}</span></h3>
                        <h3>Region:<span>{region}</span></h3>
                        <h3>Sub Region:<span>{subRegion}</span></h3>
                        <h3>Capital:{
                            capital.map((value,index)=>{
                                return <span key={index}>{value}</span>
                            })
                        }</h3>
                    </div>


                    <div className="second-detail">
                        <h3>Top Level domain:<span>{internetDomain}</span></h3>
                        <h3>Currencies:{
                              Object.values(currencies).map((value,index)=>{
                                return(<span>{value.name}</span>)
                            })                        
                            }</h3>
                        <h3>Languages:{
                            Object.values(languages).map((value,index)=>{
                                console.log(value,index);
                                return(
                                    <span key={index}>{value}</span>
                                )
                            })
                            }</h3>
                    </div>

                </div>
                <div className="border-box">
                    <h3>Border Countries</h3>
                    <div className="border">
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
    );
}
 
export default Single;