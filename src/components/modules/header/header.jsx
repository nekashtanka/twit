import React, { useState, useEffect } from 'react';
import './s_header.scss';
import { endSession, isLoggedIn, getSession } from '../../../API/bd/session';
import { useNavigate } from 'react-router-dom';
import Button from '../../UI/button/button';

const Header = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const onLogout = () => {
    endSession();
    navigate("/login");
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }

    let session = getSession();
    setEmail(session.email)

  }, [navigate]);

  return (
    <div className='wrapper_header'>
      <h1>Logo</h1>
      <div className='wrapper_profile'>
        <p>Профиль</p>
        {!isLoggedIn() ? <></> : <>
          <p>{email}</p>
          <Button text='Выйти' onClick={() => onLogout()} />
        </>}

      </div>
    </div>
  )
}
export default Header