import TextField from '../../UI/textField/textField'
import Button from '../../UI//button/button'
import './s_newPost.scss'
import { useState } from 'react'

const NewPost = () => {
  const [textValue, setTextValue] = useState('')

  return (
    <div className='wrapper_new_post'>
      <TextField placeholder='Введите текст нового поста' setText={setTextValue} />
      <div>
        <Button text={'Опубликовать'} onClick={() => localStorage.setItem('twit', textValue)} />
      </div>
    </div>
  )
}

export default NewPost