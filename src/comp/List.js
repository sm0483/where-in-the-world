import Card from './Card';
import { useCountry } from './context/CountryContext';

const List = () => {
    const {sendList}=useCountry();

    return (
        <section className="content-list background-color">
            <div className="content">
            { sendList.length!==0 &&
                sendList.map((country,index)=>{
                    const {name,population,region,capital,flags,}=country;
                    return <Card  name={name} population={population} region={region} capital={capital}  flags={flags} key={index}/>
                })
             }
            </div>
         </section>
     );
}
 
export default List;