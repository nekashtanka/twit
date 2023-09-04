import './s_button.scss'

const Button = ({ text, onClick }) => {
  return (
    <div className='wrapper_button'>
      <button onClick={() => onClick}>{text}</button>
    </div>
  )
}

export default Button