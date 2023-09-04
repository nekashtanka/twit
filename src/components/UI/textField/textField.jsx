import { useState } from 'react'
import './s_textField.scss'

const TextField = ({placeholder}) => {
  const [valueTextarea, setValueTextarea] = useState()

  return (
    <div>
      <textarea className='text_area' placeholder={placeholder} value={valueTextarea} onChange={(e) => setValueTextarea(e.target.value)} />
    </div>
  )
}

export default TextField