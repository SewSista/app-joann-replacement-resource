import { useState } from "react";
import StoreFrame from "./StoreFrame";
import Button from "../../common/Button";
import StoreForm from "./form/StoreForm";
import { storeDetails } from "../../../stores-data/storeDetails";
import { Link } from "react-router";



const StoreDetailsPage = ({store = storeDetails }) => {
    const [ stores, setStores ] = useState(store);

    const removeStore = (id) => {
        setStores((currentStores) => 
            currentStores.filter((store) => store.id !== id)
        );
    }; //function to remove store when Remove button (in Store Frame component) clicked and render new array
    
    const [ openForm, setOpenForm ] = useState(false);
    
    const handleOpenForm = () => {        
        setOpenForm((previousValue) => !previousValue);
    }; //function to open form on Add New Store button click
    
    return (
        <main>
            <div>
                <p><Link to="/">Home</Link></p>
                    <h1>Store Info</h1>
                    <div>
                    {stores.map((store) => (
                        <StoreFrame
                            key={store.id}
                            store={store}
                            onRemove={removeStore}
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
        </main>
    );
};


export default StoreDetailsPage;