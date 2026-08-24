import { useState } from "react";

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
            <h1>Store Info</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        id="nameField"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Website:
                    <input
                        type="url"
                        id="webField"
                        name="web"
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
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        id="addressField"
                        name="address"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
}

export default StoreForm;