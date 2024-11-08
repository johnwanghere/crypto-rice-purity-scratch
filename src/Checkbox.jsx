import { useState } from "react";

export default function Checkbox({ onChange, data }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label>
            <input 
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
                setIsChecked(e.target.checked);
                onChange(e.target.checked);
            }}
            label={data}
            className="w-4 h-4 m-2 cursor-pointer"
            />
            {data}
        </label>
        
    );
}