import StoreFrame from "./StoreFrame";
//import { storeDetails } from "./stores-data/storeDetails";

const StoreDetailsPage = ({stores}) => {                    //need to figure out correct import method for details array
    const storeJSX = [...stores].map(store => {
        return <StoreFrame key={store.id} store={store} />;
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
};


export default StoreDetailsPage;