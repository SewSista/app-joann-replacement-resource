import { useState } from "react";
import Button from "../../../common/Button";
import FormErrorMessage from "./FormError";
import Frame from "../../../common/Frame";

const errorMessage = 'Please complete Store Name & at least 1 contact field';

const StoreForm = ({ handleCloseForm }) => {
    const [formData, setFormData] = useState({
        name: "",
        web: "",
        email: "",
        phone: "",
        address: "",
    });

    const [hasError, setHasError] = useState(false);

     
    const isValid = () => {
        return (
            formData.name.trim() !== '' &&
            (formData.web.trim() !== '' ||
            formData.email.trim() !== '' ||
            formData.phone.trim() !== '' ||
            formData.address.trim() !== '')
        )
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
            if (!isValid()) {
                setHasError(true);
            } else {
            alert("You've added a new store to the directory!");
            handleCloseForm();
        };
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
                            required
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
                        <input
                            type="textera"
                            id="addressField"
                            name="address"
                            placeholder="Physical address/location"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>
                      <FormErrorMessage
                        hasError={hasError}
                        message={[errorMessage]}    
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