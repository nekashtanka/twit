import './s_post.scss'

const Post = ({ text, user }) => {
  return (
    <div className='wrapper_post'>
      <p>{user}</p>
      <h4>{text}</h4>
    </div>
  )
}

export default Post