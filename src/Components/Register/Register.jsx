import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { loginBtn } from '../../utils/Icons'
import { useGlobalContext } from '../../context/globalContext'
import { Link } from 'react-router-dom'

function Register() {
  const { register, setError } = useGlobalContext()
  const [inputState, setInputState] = useState({
    email: '',
    username: '',
    pass: '',
  })

  const { email, username, pass } = inputState

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    register(inputState)
    setInputState({
      email: '',
      username: '',
      pass: '',
    })
  }

  return (
    <RegisterStyled onSubmit={handleSubmit}>
      <div className='title'>
        <h2>Don't Have an Account ?</h2>
        <h5>Let's Create One ! ･ﾟ✧ᕙ( `▽´ )ᕗ</h5>
      </div>
      <div className='input-control'>
        <input
          type='text'
          value={username}
          name='username'
          placeholder='username'
          maxLength={15}
          onChange={handleInput('username')}
        />
      </div>
      <div className='input-control'>
        <input
          value={email}
          type='email'
          name='email'
          placeholder='email'
          maxLength={25}
          onChange={handleInput('email')}
        />
      </div>
      <div className='input-control'>
        <input
          value={pass}
          type='password'
          name='password'
          placeholder='password'
          maxLength={15}
          onChange={handleInput('pass')}
        />
      </div>
      <div className='btn-container'>
        <div className='submit-btn'>
          <Button
            name={'Register'}
            icon={loginBtn}
            bPad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={'var(--color-accent'}
            color={'#fff'}
          />
        </div>
        <div className='back-btn'>
          <Link to='./Regist_Success'>
            <Button
              name='Back'
              bg='transparent'
              bPad={'.9rem 3rem'}
              bRad={'0px'}
            ></Button>
          </Link>
        </div>
      </div>
    </RegisterStyled>
  )
}

const RegisterStyled = styled.form`
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
  }
  .back-btn{
    flex: 1; 
    display: flex; 
    justify-content: flex-end; 
    align-items: flex-start; 
    a{
      text-decoration: none;
    }
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Register
