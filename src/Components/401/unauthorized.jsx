import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { loginBtn } from '../../utils/Icons'
import { useGlobalContext } from '../../context/globalContext'
import { Link } from 'react-router-dom'

function Unauthorized() {
  const { login, setError } = useGlobalContext()
  const [inputState, setInputState] = useState({
    email: '',
  })

  const { email } = inputState

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(inputState)
    setInputState({
      email: '',
    })
  }

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <div className='title'>
        <h2>401 - Unauthorized</h2>
        <h5>Please Login to Continue ( •̀ᴗ•́ )و ̑̑</h5>
      </div>
      <div className='btn-container'>
        <div className='login-btn'>
          <Link to='/'>
            <Button
              name={'Login'}
              icon={loginBtn}
              bPad={'.8rem 1.6rem'}
              bRad={'30px'}
              bg={'var(--color-accent'}
              color={'#fff'}
            />
          </Link>
        </div>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .btn-container {
    display: flex; 
    gap: 1rem; 
  }
  .login-btn {
    flex: 1; 
    margin-left: 3.5rem;
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
`

export default Unauthorized
