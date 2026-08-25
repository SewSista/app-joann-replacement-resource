import BoxContent from "../common/BoxContent";

function StoreDetailsPage ({ store }) {                    //need to figure out correct import method for details array
    let storeJSX = [...store].map(store => {
        return <BoxContent store={store.id} />; //Box key={store.id}*/ 
    });
    
    return (
        <div>
            <main>
                <h1>Store Info</h1>
                <div>
                    {storeJSX}
                </div>
            </main>
        </div>
    );
}


export default StoreDetailsPage;