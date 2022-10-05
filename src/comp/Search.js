import {AiOutlineSearch} from 'react-icons/ai'


const Search = () => {
    return (
        <selection className="subhead d-flex flex-column background-color">
            <div className="input-group mb-3  subhead-input-container">
                <div className="input-group-prepend d-flex ">
                    <span className="input-group-text head-background-color text-color search-icon-background" id="search"><AiOutlineSearch/></span>
                </div>
                <input type="text" className="form-control subhead-input head-background-color text-color"
                aria-describedby="inputGroup-sizing-default" htmlFor="search"
                placeholder='Search for country'
                />
            </div>

            <div className="select-container d-flex mt-4 m-lg-0 ">
                <select className="form-select custom-select-lg mb-lg-3 select-option head-background-color text-color">
                    <option selected>Filter by Region</option>
                    <option value="1">Africa</option>
                    <option value="2">America</option>
                    <option value="3">Europe</option>
                </select>
            </div>
        </selection>
    );
}
 
export default Search;