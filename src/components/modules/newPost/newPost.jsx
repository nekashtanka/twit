import TextField from '../../UI/textField/textField'
import Button from '../../UI//button/button'
import './s_newPost.scss'

const NewPost = () => {
  return (
    <div className='wrapper_new_post'>
      <TextField placeholder='Введите текст нового поста' />
      <div>
        <Button text={'Опубликовать'} />
      </div>
    </div>
  )
}

export default NewPost