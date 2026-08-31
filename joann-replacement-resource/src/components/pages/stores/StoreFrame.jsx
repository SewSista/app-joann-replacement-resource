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
                            <a
                                href={store.web}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {store.web}
                            </a><br/>
                            {store.email}<br/>
                            {store.phone}<br/>
                            {store.address}
                        </div>
                    </li>
                </ul> 

                <Button
                    type="remove"
                    label="Remove Store"
                /> 
            </div>
        </Frame>
    )
}

export default StoreFrame;
