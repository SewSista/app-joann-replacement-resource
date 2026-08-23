import { storeDetails } from '../../stores/storeDetails.js';
//import Box from './BoxFrame';

function BoxContent () {   
    let storeJSX = [...storeDetails].map((store) => {
        return < storeDetails key={store.id} />; //Box key={store.id}*/ 
    });
    
    return (
        <div>
            storeDetails.length ? (
                <div>{storeJSX}</div>),
        </div>
    );
}


export default BoxContent;