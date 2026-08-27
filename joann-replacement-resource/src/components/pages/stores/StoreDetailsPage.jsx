import StoreFrame from "./StoreFrame";
//import { storeDetails } from "./stores-data/storeDetails";

function StoreDetailsPage (stores) {                    //need to figure out correct import method for details array
    let storeJSX = [...stores].map(store => {
        return <StoreFrame key={store.id} store={store} />;
    });
    
    return (
        <div>
            <main>
                <h1>Store Info</h1>
                <div>
                    <ul>
                    {storeJSX}
                    </ul>
                </div>
            </main>
        </div>
    );
}


export default StoreDetailsPage;