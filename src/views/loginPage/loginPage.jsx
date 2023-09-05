import { Link } from 'react-router-dom'
import Button from '../../components/UI/button/button'
import InputText from '../../components/UI/inputText/inputText'
import './s_loginPade.scss'
import { useState } from 'react'
import { signInUser } from './../../API/bd/fireBase'
import { startSession } from './../../API/bd/session'

const LoginPage = () => {
  const [email, setEmail] = useState(localStorage.getItem('email') ? localStorage.getItem('email') : '')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)

  const submit = async (event) => {
    localStorage.setItem('email', email);
    password.length < 8 ? setErrorPassword(true) : setErrorPassword(false)
    try {
      let loginResponse = await signInUser(email, password);
      startSession(loginResponse.user);
      // navigate("/user");
    } catch (error) {
      console.error(error.message);
      console.log(error.message);
    }
  }

  return (
    <div className='wrapper_login'>
      <h2>Вход</h2>
      <form>
        <InputText label='Почта' type='email' value={email} setValue={setEmail} />
        <InputText label='Пароль' type='password' value={password} setValue={setPassword} />
        {errorPassword ? <>
          <p className='error'>Неверный пароль</p>
        </> : <></>}
        <Button text='Войти' onClick={() => submit()} />
      </form>
      <div className='wrapper_link'>
        <p>Нет личного профиля? <Link to='/register'>Зарегистрироваться</Link></p>
      </div>
    </div>
  )
}

export default LoginPage