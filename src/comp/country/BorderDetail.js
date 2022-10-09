const BorderDetails = ({borders}) => {
    return (
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
    );
}
 
export default BorderDetails;