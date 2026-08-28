import Frame from "../common/Frame";
import { storeDetails } from "../../stores-data/storeDetails";

const StoreFrame = () => {
    return (
        <Frame> //using 
            <div className="store-details-info">
                  <ul>
                    {storeDetails.map(store =>
                        <li key={store.id}>
                        <h2>{store.name}</h2>
                            {store.web}<br/>
                            {store.email}<br/>
                            {store.phone}<br/>
                            {store.address}
                        </li>
                    )};
                </ul>
                //add delete button function here
            </div>
        </Frame>
    )
}

export default StoreFrame;
/*
storeDetails.length ? ( 
    <div>{storeJSX}</div>)
*/