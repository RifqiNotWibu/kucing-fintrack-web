import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { login } from '../../utils/Icons'

export const Login = () => {
  return (
    <LoginStyled>
      <div className='title'>
        <h2>Welcome!</h2>
        <h5>Please login to continue ^_^</h5>
      </div>
      <div className='input-control'>
        <input
          type='text'
          //   value={title}
          name={'email'}
          placeholder='email'
          //   onChange={handleInput('title')}
        />
      </div>
      <div className='input-control'>
        <input
          //   value={amount}
          type='text'
          name={'password'}
          placeholder={'password'}
          //   onChange={handleInput('amount')}
        />
      </div>
      <div className='btn-container'>
        <div className='submit-btn'>
          <Button
            name={'Login'}
            icon={login}
            bPad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={'var(--color-accent'}
            color={'#fff'}
          />
        </div>
        <div className='register'>
          <Button
            name='Register'
            bg='transparent'
            bPad={'.9rem 3rem'}
            bRad={'0px'}
          />
        </div>
      </div>
    </LoginStyled>
  )
}

const LoginStyled = styled.form`
  padding: 2rem 2rem;
  width: max-content;
  height: max-content;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
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
        background: #5adb72 !important;
      }
    }
  }
  .register {
    flex: 1; 
    display: flex; 
    justify-content: flex-end; 
    align-items: flex-start; 
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Login
