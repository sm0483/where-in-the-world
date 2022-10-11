import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Single from "./country/SingleCountry";
import Load from './load/Load'


const Country = () => {
    const {id}=useParams();
    const [details,setDetails]=useState([]);
    const [loadCountry,setLoadCountry]=useState(false);

    useEffect(()=>{
        const controller=new AbortController();
        setLoadCountry(true);
        const getData=(countryId)=>{
            fetch(`https://restcountries.com/v3.1/alpha?codes=${countryId}`,{signal:controller.signal})
            .then(res=>res.json())
            .then((data)=>{
                setDetails(data);
                console.log(data);
                setLoadCountry(false);
            })
            .catch((err)=>{
                console.log(err);
            })
        }

        id && getData(id);

        return ()=>controller?.abort();
    },[])

    if(loadCountry){
        return(
            <div className="loading-page">
                <Load/>
            </div>
            )
    }

    if(details.length!==0){

    const {name:countryNames, population,
        tld,currencies,region,subregion:
        subRegion,capital,borders,flags,languages,}=details[0];
    const{common,nativeName}=countryNames;
    const internetDomain=tld[0];
    const flag=flags.svg;

    const information={languages,population,common,
        flag,nativeName,internetDomain,currencies,
        region,subRegion,capital,borders}


        console.log(loadCountry);

    

    return ( 
        <div className="main-page background-color">
            {/* <Head/> */}
            <Single information={information}/>
        </div>
    );
    }
      
  
}
 
export default Country;