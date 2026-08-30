import { storeDetails } from "../../../stores-data/storeDetails";
import Button from "../../common/Button";
import Frame from "../../common/Frame";

const StoreFrame = () => {
    return (
        <Frame>
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
                    )}
                </ul>
                 <Button
                type="delete"
                label="Delete Store"
                /> 
            </div>
        </Frame>
    )
}

export default StoreFrame;
/*
storeDetails.length ? ( 
    <div>{storeJSX}</div>)
*/