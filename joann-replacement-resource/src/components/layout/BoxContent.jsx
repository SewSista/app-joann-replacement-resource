import { storeDetails } from '../../stores/storeDetails.js';
import Box from './BoxFrame';

function BoxContent () {   
    let storesJSX = [...storeDetails].map((stores) => {
        return <Box key={stores.id} stores={stores} />; 
    });
    
    return (
        <div>
            storeDetails.length ? 
                <div>{storesJSX}</div>,
        </div>,
    );
}

export default BoxContent;