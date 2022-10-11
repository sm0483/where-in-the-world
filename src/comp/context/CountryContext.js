import React, { useContext, useEffect, useState } from "react";
import {searchCountry,checkErr,PageNotFound} from "./helper/Search";

const CountryContext=React.createContext();


const CountryProvider=({children})=>{
    const [countryList,setCountryList]=useState([]);
    const [sendList,setSendList]=useState([]);
    const [region,setRegion]=useState("");
    const [load,setLoad]=useState(false);
    const [searchParameter,setSearchParameter]=useState("");
    const [internet,setInernet]=useState(false);
    const [err,setErr]=useState(false);


    const loadItem=()=>{
        setLoad(!load);
    }

    const searchData=(data)=>{
        setSearchParameter(data);
        const searchVar=data.toLowerCase();
        const newList=searchCountry(countryList,searchVar);
        setSendList(newList);
        
    }


    const searchByRegion=(selectedRegion)=>{
        setRegion(selectedRegion);
    }

    useEffect(()=>{
        const controller=new AbortController();
        const getList=()=>{
            fetch('https://restcountries.com/v3.1/all',{signal:controller.signal})
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    console.log(data);
                    if(PageNotFound(data)){
                        setErr(true);
                        return;
                    }
                    setCountryList(data);
                    setSendList(data);
                })
                .catch((err)=>{
                    console.log(err.message);
                    checkErr(err,setInernet);
                    checkErr(err,setErr);
                    console.log("err"+err);
                })
        }

        getList();
        return ()=>controller?.abort();

    },[load])




    useEffect(()=>{
        const controller =new AbortController();
        const getRegion=(region)=>{
            fetch(`https://restcountries.com/v3.1/region/${region}`,{signal:controller.signal})
            .then(res=>res.json())
            .then((data)=>{
                if(PageNotFound(data)){
                    setErr(true);
                    return;
                }
                setSendList(data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }

        region && getRegion(region)

        return ()=>controller?.abort();
    },[region])



    return (
        <CountryContext.Provider
        value={{
            sendList,
            searchData,
            searchByRegion,
            loadItem,  
            searchParameter,
            internet,
            err
            
        }}
        >
            {children}
        </CountryContext.Provider>
    )

}




const useCountry=()=>{
    return useContext(CountryContext);
}

export {CountryContext,CountryProvider,useCountry}