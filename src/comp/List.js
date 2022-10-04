import image from  '../../src/logo.svg'
import { useCountry } from './context/CountryContext';

// 'logo.svg'
const List = () => {
    const {countryList}=useCountry();

    return (
        <section className="content-list background-color">
            <div className="content">
            { countryList.length!==0 &&
                countryList.map((country)=>{
                    const {name,population,region,capital,flags,ccn3,cca3}=country;
                    // console.log(name.common,population,region,capital[0],);
                    // console.log(flags.svg)
                    return(
                        <div className="custom-card head-background-color" key={ccn3+cca3}>
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
                    )
                })
             }
            </div>
         </section>
     );
}
 
export default List;