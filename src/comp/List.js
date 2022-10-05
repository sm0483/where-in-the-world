import image from  '../../src/logo.svg'
import Card from './Card';
import { useCountry } from './context/CountryContext';

// 'logo.svg'
const List = () => {
    const {countryList}=useCountry();

    return (
        <section className="content-list background-color">
            <div className="content">
            { countryList.length!==0 &&
                countryList.map((country,index)=>{
                    const {name,population,region,capital,flags,}=country;
                    return <Card  name={name} population={population} region={region} capital={capital}  flags={flags} key={index}/>
                })
             }
            </div>
         </section>
     );
}
 
export default List;