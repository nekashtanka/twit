import { useEffect, useState } from "react";
import './s_inputText.scss'

const InputText = ({ value = '', setValue, validFunction, label = 'label', type = 'text' }) => {
  const [valueInput, setValueInput] = useState(value)

  function handleInput(e) {
    if (validFunction) {
      const validate = validFunction(e.target.value);
      setValueInput(validate)
    } else {
      setValueInput(e.target.value)
    }
  }

  useEffect(() => {
    setValue(valueInput)
  }, [valueInput, setValue])

  return (
    <div className="wrapper_input_text">
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type} value={valueInput} onChange={(e) => handleInput(e)} />
    </div>
  )
}

export default InputText