import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { loginBtn } from '../../utils/Icons'
import { useGlobalContext } from '../../context/globalContext'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const { login, setError } = useGlobalContext()
  const [inputState, setInputState] = useState({
    email: '',
    pass: '',
  })

  const { email, pass } = inputState

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(inputState)
    setInputState({
      email: '',
      pass: '',
    })
    navigate('/dashboard')
  }

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <div className='title'>
        <h2>Welcome!</h2>
        <h5>Please login to continue ( •̀ᴗ•́ )و ̑̑</h5>
      </div>
      <div className='input-control'>
        <input
          type='text'
          value={email}
          name={'email'}
          placeholder='email'
          onChange={handleInput('email')}
        />
      </div>
      <div className='input-control'>
        <input
          value={pass}
          type='password'
          name={'password'}
          placeholder={'password'}
          onChange={handleInput('pass')}
        />
      </div>
      <div className='btn-container'>
        <div className='submit-btn'>
          <Button
            name={'Login'}
            icon={loginBtn}
            bPad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={'var(--color-accent'}
            color={'#fff'}
          />
        </div>
        <div className='register'>
          <Link to='/Register'>
            <Button
              name='Register'
              bg='transparent'
              bPad={'.9rem 3rem'}
              bRad={'0px'}
            ></Button>
          </Link>
        </div>
      </div>
      <div className='forgot'>
        <Link to='/forgot-password'>
          <Button name='Forgot password ?' bg='transparent' />
        </Link>
      </div>
    </LoginStyled>
  )
}

const LoginStyled = styled.form`
  padding: 2rem 2rem;
  width: max-content;
  height: max-content;
  background: rgba(252, 246, 249, 0.8);
  backdrop-filter: blur(4.5px);
  border: 3px solid #ffffff;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .btn-container {
    display: flex; 
    gap: 1rem; 
  }
  .submit-btn {
    flex: 1; 
    a{
      text-decoration: none;
    }
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: #4fc22b !important;
      }
    }
  }
  .register {
    flex: 1; 
    display: flex; 
    justify-content: flex-end; 
    align-items: flex-start; 
    a{
      text-decoration : none ;
    }
  }
  .forgot{
    padding: 0;
    margin-top: -1rem;
    align-self: center;
    font-size: 1rem;
    a{
      text-decoration : none ;
    }
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Login
