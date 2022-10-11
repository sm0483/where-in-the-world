const searchCountry=(countryList,search)=>{
    const len=search.length;
    const newList=countryList.filter((country)=>{
        const common=country.name.common.toLowerCase().substring(0,len);
        if(common===search){
            return country;
        }
        return null;

    })

    return newList;
}



const checkErr=(err,setState)=>{
    if(err.message==="Failed to fetch"){
        setState(true);
    }
    console.log(err.message);


}

const PageNotFound=(data)=>{
    if(data.message==="Page Not Found"){
        return true;
    }
}

export  {searchCountry,checkErr,PageNotFound};
