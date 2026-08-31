import { useState } from "react";
import Button from "../../../common/Button";
import Frame from "../../../common/Frame";
import InputMessage from "./InputMessage";

const inputMsg = {
    reqFields: 'Please complete Store Name & at least 1 contact field',
    submission: 'You added a new store to the directory!',
};

const StoreForm = ({ handleCloseForm }) => {
    const [formData, setFormData] = useState({
        name: "",
        web: "",
        email: "",
        phone: "",
        address: "",
    });
    
    const [hasMsg, setHasMsg] = useState(false);
    const [message, setMessage] = useState("");    
    
    const isValid = () => {
        return (
            formData.name.trim() !== '' &&
            (formData.web.trim() !== '' ||
            formData.email.trim() !== '' ||
            formData.phone.trim() !== '' ||
            formData.address.trim() !== '')
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setHasMsg(false);
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isValid()) {
            setMessage(inputMsg.reqFields);
            setHasMsg(true); 
            return;
        }
        
        setMessage(inputMsg.submission);    
        setHasMsg(true);
        
        setTimeout(() => {
            handleCloseForm();
        }, 1500);        
    };

    return(
        <div>
            <Frame>
                <h1>New Store Info</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            id="nameField"
                            name="name"
                            placeholder="Store name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Website:
                        <input
                            type="text"
                            id="webField"
                            name="web"
                            placeholder="Web address"
                            value={formData.web}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            id="emailField"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Telephone:
                        <input
                            type="tel"
                            id="phoneField"
                            name="phone"
                            placeholder="123-456-7890 (include dashes)"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Address:
                        <textarea
                            id="addressField"
                            name="address"
                            placeholder="Physical address/location"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>
                      <InputMessage
                        hasMsg={hasMsg}
                        message={message}    
                    />
                    <br />

                    <Button
                    type="submit"
                    label="Submit"
                    /> 
                </form>
            </Frame>
        </div>
    );
}

export default StoreForm;