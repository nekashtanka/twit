import TextField from '../../UI/textField/textField'
import Button from '../../UI//button/button'
import './s_newPost.scss'
import { useState } from 'react'
import { createPost } from '../../../API/bd/fireBase'
import { getAuth } from 'firebase/auth'

const NewPost = ({ }) => {
  const [textValue, setTextValue] = useState('')
  const user = localStorage.getItem('email')

  async function fetchData(text, user) {
    await createPost(text, user)
  }

  function submit() {
    const auth = getAuth();

    if (textValue.length >= 3) {
      
      fetchData(textValue, user)
    }
  }



  return (
    <div className='wrapper_new_post'>
      <TextField placeholder='Введите текст нового поста' setText={setTextValue} />
      <div>
        <Button text={'Опубликовать'} onClick={() => submit()} />
      </div>
    </div>
  )
}

export default NewPost