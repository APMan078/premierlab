import React from "react";

export const OilFields = ({ value, handleChange }) => {
    const [fields, setFields] = React.useState(value || []);

    const sizes = [
        {
            label: 'Compact/Small Sedan',
            type: 'sm_sedan'
        },
        {
            label: 'Medium Sedan',
            type: 'md_sedan'
        },
        {
            label: 'Large Sedan/Wagon',
            type: 'lg_sedan'
        },
        {
            label: 'Small SUV/AUV',
            type: 'sm_suv_auv'
        },
        {
            label: 'Large SUV/Pick-Up/Van',
            type: 'lg_suv_van'
        },
        {
            label: 'Commercial',
            type: 'commercial'
        }        
    ]

    console.log(sizes)

    function handleFieldChange(i, event) {
        const list = [...fields];
        list[i] = event.target.value;
        setFields(list);
        handleChange(fields, type)
      }

    return (
        <>
            {sizes.map((size, idx) => {
                console.log(size)
                return (
                    <div key={idx} className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 self-center">
                            <label>{size.label}</label>
                        </div>
                        <div className="col-span-1">
                            <div className="flex border border-gray-300 rounded my-3">
                                <span className="p-2 border-gray-300 inline-flex text-gray-400 border-r">P</span>
                                <input className="p-2 w-full" placeHolder="Price" type="text" name="price" onChange={e => handleFieldChange(idx, e) } />
                            </div>   
                        </div>
                    </div>
                )
            })}
        </>
    )
}