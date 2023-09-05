import TextField from '../../UI/textField/textField'
import Button from '../../UI//button/button'
import './s_newPost.scss'
import { useState } from 'react'
import { createPost } from '../../../API/bd/fireBase'

const NewPost = ({ setNewPost, index }) => {
  const [textValue, setTextValue] = useState('')
  const user = localStorage.getItem('email')

  async function fetchData() {
    await createPost(textValue, user, index + 1)
  }

  function submit() {


    if (textValue.length >= 3) {
      fetchData()
      setNewPost ? setNewPost(false) : <></>
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