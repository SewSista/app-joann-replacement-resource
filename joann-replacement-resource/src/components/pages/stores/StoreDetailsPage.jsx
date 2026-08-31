import { useState } from "react";
import StoreFrame from "./StoreFrame";
import Button from "../../common/Button";
import StoreForm from "./form/StoreForm";
import { storeDetails } from "../../../stores-data/storeDetails";



const StoreDetailsPage = ({stores = storeDetails }) => {                    //need to figure out correct import method for details array
   
    const handleOpenForm = () => {        
        setOpenForm((previousValue) => !previousValue);
    };
    
    const [ openForm, setOpenForm ] = useState(false);
    
    return (
        <div>
            <h1>Store Info</h1>
            <div>
               {stores.map((store) => (
                <StoreFrame
                    key={store.id}
                    store={store}
                />
               ))}
            </div>
               
            <div>
                <Button
                type= "button"
                label= "Add new store"
                handleClick={handleOpenForm}
                />
                {openForm && (
                    <div>
                        <StoreForm handleCloseForm={handleOpenForm} />              
                    </div>    
                )} 
            </div>
            
        </div>
    );
};


export default StoreDetailsPage;