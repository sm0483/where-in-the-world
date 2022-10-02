import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
    return (
        <section className="search-container">
            <div className="input-group search-bar">
                <div className="input-group-prepend">
                    <button className="btn search-button" 
                    type="button"><AiOutlineSearch/>
                    </button>
                </div>
                <input type="text" className="form-control search-input" placeholder="Search for country"
                aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div>
        </section>
    );
}
 
export default Search;