const SecondDetails = ({internetDomain,currencies,languages}) => {
    return (
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

    );
}
 
export default SecondDetails;