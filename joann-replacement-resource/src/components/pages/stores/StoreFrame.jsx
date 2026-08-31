import Button from "../../common/Button";
import Frame from "../../common/Frame";

const StoreFrame = ({ store, onRemove }) => {

    return (
        <Frame>
            <div className="store-details-info">
                <div> 
                <h2>{store.name}</h2>    
                    <ul> 
                        <li><a
                            href={store.web}
                            target="_blank"
                            rel="noopener noreferrer"
                        >{store.web}</a></li>                            
                        <li>{store.email}</li>
                        <li>{store.phone}</li>
                        <li>{store.address}</li>
                    </ul> 
                </div>

                <Button
                    type="remove"
                    label="Remove"
                    handleClick={() => onRemove(store.id)}
                /> 
            </div>
        </Frame>
    )
}

export default StoreFrame;
