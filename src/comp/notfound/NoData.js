const NoData = ({searchParameter}) => {
    return (
        <div className="nodata">
            <h2 className="text-color">Hmmm...</h2>
            <h3 className="text-color">We could't find any matches for "{searchParameter}".</h3>
            <p className="text-color">
                Double check your search for any typos or spelling errors -or try different search term.
            </p>
        </div>
    );
}
 
export default NoData;