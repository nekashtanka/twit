import { useState } from 'react'
import Button from '../../components/UI/button/button'
import InputText from '../../components/UI/inputText/inputText'
import './s_registerPage.scss'
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from './../../API/bd/fireBase'
import { startSession } from './../../API/bd/session'

const RegisterPage = () => {
  const [email, setEmail] = useState(localStorage.getItem('email') ? localStorage.getItem('email') : '')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorLenghtPassword, setErrorLenghtPassword] = useState(false)
  const [errorRegister, setErrorRegister] = useState(false)
  const navigate = useNavigate()

  const submit = async (event) => {
    localStorage.setItem('email', email);
    password === repeatPassword ? setErrorPassword(false) : setErrorPassword(true)
    password.length >= 8 ? setErrorLenghtPassword(false) : setErrorLenghtPassword(true)
    try {
      let registerResponse = await createUser(email, password);
      startSession(registerResponse.user);
      navigate('/')
    } catch (error) {
      console.log(error.message);
      error.message === 'Firebase: Error (auth/email-already-in-use).' ? setErrorRegister(true) : setErrorRegister(false)
    }
  }

  return (
    <div className='wrapper_register'>
      <h2>Регистрация</h2>
      <form>
        <InputText label='Почта' type='email' value={email} setValue={setEmail}></InputText>
        <InputText label='Пароль' type='password' value={password} setValue={setPassword}></InputText>
        <InputText label='Пароль еще раз' type='password' value={repeatPassword} setValue={setRepeatPassword}></InputText>
        {errorLenghtPassword ? <>
          <p className='error'>Длина пароля минимум 8 символов</p>
        </> : <></>}
        {errorPassword ? <>
          <p className='error'>Пароли не совпадают</p>
        </> : <></>}
        {errorRegister ? <>
          <p className='error'>Пользователь с такой почтой уже зарегистрирован</p>
        </> : <></>}
        <Button text='Зарегистрироваться' onClick={() => submit()} />
      </form>
      <div className='wrapper_link'>
        <p>Уже есть личный профиль? <Link to='/login'>Войти</Link></p>
      </div>

    </div>
  )
}

export default RegisterPage