import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

function TransactionsForm({ getIncomesByFilter }) {
  const [year, setYear] = useState('2023')
  const [month, setMonth] = useState('0')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    getIncomesByFilter(year, month)
  }

  const handleYearChange = (e) => {
    setYear(e.target.value)
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value)
  }

  return (
    <TransactionsFormStyled>
      <div className='form-container'>
        <form onSubmit={handleFormSubmit}>
          <div className='month'>
            <select
              required
              name='month'
              id='month'
              value={month}
              onChange={handleMonthChange}
            >
              <option value='' disabled>
                Month
              </option>
              <option value='0'>All Months</option>
              <option value='1'>January</option>
              <option value='2'>February</option>
              <option value='3'>March</option>
              <option value='4'>April</option>
              <option value='5'>May</option>
              <option value='6'>June</option>
              <option value='7'>July</option>
              <option value='8'>August</option>
              <option value='9'>September</option>
              <option value='10'>October</option>
              <option value='11'>November</option>
              <option value='12'>December</option>
            </select>
          </div>
          <div className='year'>
            <select
              required
              name='year'
              id='year'
              value={year}
              onChange={handleYearChange}
            >
              <option value='' disabled>
                Year
              </option>
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
          <div className='filter-btn'>
            <Button
              name={'Filter!'}
              bPad={'.6rem 1rem'}
              bRad={'30px'}
              bg={'var(--color-accent'}
              color={'#fff'}
            />
          </div>
        </form>
      </div>
    </TransactionsFormStyled>
  )
}

const TransactionsFormStyled = styled.div`
  .month {
    margin: 1rem;
    input {
      width: 100%;
    }
  }
  .year {
    margin: 1rem;
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
    justify-content: flex-start;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .filter-btn {
    margin-left: 1rem;
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: #4fc22b !important;
      }
    }
  }
`

export default TransactionsForm
