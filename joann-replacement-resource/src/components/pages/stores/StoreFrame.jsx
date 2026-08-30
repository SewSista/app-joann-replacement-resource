import Button from "../../common/Button";
import Frame from "../../common/Frame";

const StoreFrame = ({ store }) => {

    return (
        <Frame>
            <div className="store-details-info">
                <ul> 
                    <li>
                    <h2>{store.name}</h2>    
                        <div>
                            {store.web}<br/>
                            {store.email}<br/>
                            {store.phone}<br/>
                            {store.address}
                        </div>
                    </li>
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