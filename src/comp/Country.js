import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Single from "./country/SingleCountry";
import Load from './load/Load'
import { PageNotFound } from "./context/helper/Search";
import Err from "./notfound/Err";
import NoData from '../comp/notfound/NoData';


const Country = () => {
    const {id}=useParams();
    const [details,setDetails]=useState([]);
    const [loadCountry,setLoadCountry]=useState(false);
    const [err,setErr]=useState(false);
    const [nodata,setNodata]=useState(false);


    const handleNotFound=(data)=>{
        if(data.message==="Not Found"){
            setNodata(true);
            return true;
        }
        return false;
    }

    const handleBadRequest=(data)=>{
        if(data.message==="Bad Request"){
            setNodata(true);
            return true;
        }

        return false;
    }

    useEffect(()=>{
        const controller=new AbortController();
        setLoadCountry(true);
        const getData=(countryId)=>{
            fetch(`https://restcountries.com/v3.1/alpha?codes=${countryId}`,{signal:controller.signal})
            .then(res=>res.json())
            .then((data)=>{
                if(PageNotFound(data)){
                    setErr(true);
                    return;
                }
                if(handleNotFound(data)){
                    return;
                }

                if(handleBadRequest(data)){
                    return;
                }

                setDetails(data);
                setNodata(false);
                // console.log(data);
                setLoadCountry(false);
            })
            .catch((err)=>{
                // setErr(true);
                // console.log("cat"+err);
            })
        }

        id && getData(id);

        return ()=>controller?.abort();
    },[])


    if(err){
        return(<Err/>)
    }


    if(nodata){
        return (
            <div className="content-list background-color nodata-page">
                <NoData searchParameter={id} secondPage={true}/>
            </div>
        )
    }



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