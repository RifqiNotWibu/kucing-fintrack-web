import React, { useState } from 'react'
import styled from 'styled-components'

function Form() {
  //   const { addIncome, getIncomes, error, setError } = useGlobalContext()
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  })

  const { title, amount, date, category, description } = inputState

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value })
  }
  return (
    <FormStyled>
      <div className='input-control'>
        <input
          type='text'
          value={title}
          name={'title'}
          placeholder='Salary Title'
          onChange={handleInput('title')}
        />
      </div>
      <div className='input-control'>
        <input
          value={amount}
          type='text'
          name={'amount'}
          placeholder={'Salary Amount'}
          onChange={handleInput('amount')}
        />
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form``

export default Form
