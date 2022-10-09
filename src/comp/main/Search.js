import {  useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { useCountry } from '../context/CountryContext';


const Search = () => {

    const [searchParameter,setSearchParameter]=useState("");

    const {searchData,searchByRegion,loadItem}=useCountry();
    

    const handleSumbit=(e)=>{
        e.preventDefault();
        searchData(searchParameter);
    }


    const getData=(e)=>{
        if(e.target.value==="Filter by Region"){
            loadItem();
            return;
        }
        searchByRegion(e.target.value);
    }

    return (
        <selection className="subhead d-flex flex-column background-color">
            <div className="input-group mb-3  subhead-input-container">
            <form className='d-flex input-group' onSubmit={(e)=>handleSumbit(e)}>
                <div className="input-group-prepend d-flex ">
                    <span className="input-group-text head-background-color text-color search-icon-background" id="search"><AiOutlineSearch/></span>
                </div>
                <input type="text" className="form-control subhead-input head-background-color text-color"
                aria-describedby="inputGroup-sizing-default" htmlFor="search"
                placeholder='Search for country'
                onChange={(e)=>{setSearchParameter(e.target.value)}}
                />
            </form>
            </div>

            <div className="select-container d-flex mt-4 m-lg-0 ">
                <select className="form-select custom-select-lg mb-lg-3 select-option head-background-color text-color" 
                onChange={(e)=>getData(e)}>
                    <option value="Filter by Region">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">The Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania/Australia</option>
                </select>
            </div>
        </selection>
    );
}
 
export default Search;