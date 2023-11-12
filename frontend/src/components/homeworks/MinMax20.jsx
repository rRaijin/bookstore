import { useState } from "react";

const MinMax20 = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        let newValue = parseInt(e.target.vale)
    

        if (newValue > 20) {
            newValue = 20
        }
        setValue(newValue);
    }

    return (
        <input 
            type="number" 
            min={0}
            max={20}
            value={value}
            onChange={handleChange}       
        />
    )
}

export default MinMax20;
