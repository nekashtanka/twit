import TextField from '../../../UI/textField/textField'
import './s_newPost.scss'

const NewPost = () => {
  return (
    <div className='wrapper_new_post'>
      <TextField placeholder='Введите текст нового поста'/>
    </div>
  )
}

export default NewPost