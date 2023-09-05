import { useEffect, useState } from 'react'
import './s_textField.scss'

const TextField = ({ placeholder, setText }) => {
  const [valueTextarea, setValueTextarea] = useState()

  useEffect(() => {
    setText(valueTextarea)
  }, [valueTextarea, setText])

  return (
    <div>
      <textarea className='text_area' placeholder={placeholder} value={valueTextarea} onChange={(e) => setValueTextarea(e.target.value)} />
    </div>
  )
}

export default TextField