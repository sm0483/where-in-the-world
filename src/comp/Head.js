import Switch from 'react-switch'

const Head = () => {
    return (
        <section className="head-container">
            <div className="head-sub-container d-flex justify-content-between align-items-center ">
                <h1>Where in the world?</h1>
                <Switch/>
            </div>
        </section>
    );
}
 
export default Head;