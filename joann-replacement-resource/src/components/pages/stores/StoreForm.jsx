import { useState } from "react";
import Button from "../../common/Button";
import Frame from "../../common/Frame";

function StoreForm() {
    const [formData, setFormData] = useState({
        name: "",
        web: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name && (!formData.web || !formData.email || !formData.phone || !formData.address)) {
            alert("Please complete at least 1 contact field.");
            return;
        } else {
            setFormData({
                name: "",
                web: "",
                email: "",
                phone: "",
                address: ""
            });
            alert("You've added a new store to the directory!");
            console.log("Store info submission:", formData);
        }
    }

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
                            placeholder="Paste website here"
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
                            placeholder="123-456-7890"
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