import Box from "./BoxFrame";

const BoxContent = ({ store }) => {
    return (
        <Box>
            <div className="store-details-info">
                <h2 className="artwork-details-name">{store.name}</h2>
                <h3>
                    className="artwork-details-web"{store.web},
                    className="artwork-details-email"{store.email},
                    className="artwork-details-phone"{store.phone},
                    className="artwork-details-address"{store.address},
                </h3>

            </div>
        </Box>
    )
}

export default BoxContent;
/*
storeDetails.length ? ( 
    <div>{storeJSX}</div>)
*/