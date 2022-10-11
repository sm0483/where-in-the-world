import { useNavigate } from "react-router-dom";

const Card = ({name,region,flags,capital,population,cca3}) => {
    const navigate=useNavigate();
    const setNaviagation=(id)=>{
        navigate(`${id.toLowerCase()}`)
    }

    return (
        <div className="custom-card head-background-color" onClick={()=>setNaviagation(cca3)}>
            <div className="image-container">
                    <img className="card-image" src={flags.svg} alt="flag"/>
            </div>
            <div className="card-body text-color">
                <div className="card-main-head">
                    <p>{name.common}</p>
                </div>
                <h6>Population:<span>{population}</span></h6>
                <h6>Region:<span>{region}</span></h6>
                <h6>Capital:<span>{capital}</span></h6>
            </div>
        </div>
    );
}
 
export default Card;