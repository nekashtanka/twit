import './s_post.scss'

const Post = ({ text, user }) => {
  return (
    <div className='wrapper_post'>
      <p>{user}</p>
      <p>{text}</p>
    </div>
  )
}

export default Post