const FirstDetails = ({nativeCommon,population,region,subRegion,capital,common}) => {
    return ( 
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
     );
}
 
export default FirstDetails;