import {AiOutlineSearch} from 'react-icons/ai'


const Search = () => {
    return (
        <selection className="subhead d-flex flex-column   ">
            <div className="input-group mb-3  subhead-input-container">
                <div className="input-group-prepend d-flex">
                    <span className="input-group-text" id="search"><AiOutlineSearch/></span>
                </div>
                <input type="text" className="form-control subhead-input"
                aria-describedby="inputGroup-sizing-default" htmlFor="search"/>
            </div>

            <div className="select-container d-flex mt-4 m-lg-0 ">
                <select class="form-select custom-select-lg mb-lg-3 select-option">
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