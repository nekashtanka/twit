import { useState } from 'react'
import Button from '../../components/UI/button/button'
import InputText from '../../components/UI/inputText/inputText'
import './s_registerPage.scss'

const RegisterPage = () => {
  const [email, setEmail] = useState(localStorage.getItem('email') ? localStorage.getItem('email') : '')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorLenghtPassword, setErrorLenghtPassword] = useState(false)

  function submit() {
    localStorage.setItem('email', email);
    password === repeatPassword ? setErrorPassword(false) : setErrorPassword(true)
    password.length >= 8 ? setErrorLenghtPassword(false) : setErrorLenghtPassword(true)
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
        <Button text='Зарегистрироваться' onClick={() => submit()} />
      </form>
    </div>
  )
}

export default RegisterPage