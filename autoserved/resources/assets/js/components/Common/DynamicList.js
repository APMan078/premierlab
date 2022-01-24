import React, {useEffect} from "react";


export const DynamicList = ({value, handleChange, type}) => {
    const [fields, setFields] = React.useState(value || []);
    console.log(fields)

    const handleListChange = (i, event) => {
      const list = [...fields];
      const value = event.target.value;
      list[i] = value;
      console.log(value);
      console.log(i);
      setFields(list);
      const newFields = fields
      newFields[i] = value
      handleChange(newFields, type)
    }
  
    const handleAdd = () => {
      const list = [...fields];
      list.push('');
      setFields(list);
      handleChange(fields, type)
    }
  
    const handleRemove = (i) => {
      const list = [...fields];
      list.splice(i, 1);
      setFields(list);
      handleChange(fields, type)
    }

    return(
        <>
        {fields.map((field, idx) => {
            return(
                <div key={idx} className="flex mb-3">
                    <input
                    type="text"
                    className="flex-initial w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter text"
                    onChange={e => handleListChange(idx, e)}
                    value={field}
                    />
                    <button
                    type="button"
                    onClick={() => handleRemove(idx)}
                    className="flex-initial p-3 bg-gray-500 text-white ml-3"
                    >
                    -
                    </button>
                </div>
            )
        })}
        <button
          type="button"
          onClick={() => handleAdd()}
          className="bg-blue-500 text-white p-3 rounded text-sm"
        >
          Add New
        </button>
      </>
    )
}