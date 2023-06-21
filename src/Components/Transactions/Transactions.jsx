import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import TransactionsForm from './TransactionsForm'
import { TransactionsExpenses } from './TransactionsExpense'
import { TransactionsIncomes } from './TransactionsIncomes'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Transactions() {
  const { getIncomesByFilter, getExpensesByFilter, totalIncome, totalExpense } =
    useGlobalContext()
  const [activeComponent, setActiveComponent] = useState('incomes')
  const navigate = useNavigate()
  const authorized = useSelector((state) => state.authorized)

  const handleToggleChange = () => {
    setActiveComponent((prevComponent) =>
      prevComponent === 'incomes' ? 'expenses' : 'incomes'
    )
    if (activeComponent === 'incomes') {
      getExpensesByFilter(2023, 0)
    } else {
      getIncomesByFilter(2023, 0)
    }
  }

  useEffect(() => {
    getIncomesByFilter(2023, 0)
  }, [])

  useEffect(() => {
    if (!authorized) {
      navigate('/')
    }
  }, [authorized, navigate])

  if (authorized) {
    return (
      <main>
        <TransactionsStyled>
          <InnerLayout>
            {activeComponent === 'incomes' ? (
              <h2 className='totals'>
                Total Income :{' '}
                <span className='totinc'>Rp {totalIncome()}</span>
              </h2>
            ) : (
              <h2 className='totals'>
                Total Expense :{' '}
                <span className='totexp'>Rp {totalExpense()}</span>
              </h2>
            )}
            <div className='income-content'>
              <div className='form-container'>
                {activeComponent === 'incomes' ? (
                  <TransactionsForm payload={getIncomesByFilter} />
                ) : (
                  <TransactionsForm payload={getExpensesByFilter} />
                )}
                <label className='switch-toggle'>
                  <input
                    type='checkbox'
                    checked={activeComponent === 'expenses'}
                    onChange={handleToggleChange}
                  />
                  <span className='switch-slider round'></span>
                </label>
              </div>
              {activeComponent === 'incomes' ? (
                <TransactionsIncomes />
              ) : (
                <TransactionsExpenses />
              )}
            </div>
          </InnerLayout>
        </TransactionsStyled>
      </main>
    )
  }
}
const TransactionsStyled = styled.div`
  display: flex;
  overflow: auto;

  //Form Styling
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
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  
  //Income Items Styling
  .totals {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(252, 246, 249, 0.8);
    backdrop-filter: blur(4.5px);
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    margin-top: -0.5rem;
    font-size: 2.5rem;
    font-weight: 800;
    gap: 0.5rem;
    .totinc {
      font-size: 2.5rem;
      font-weight: 800;
      color: #4fc22b;
    }
    .totexp {
      font-size: 2.5rem;
      font-weight: 800;
      color: red;
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
    .expenses {
      flex: 1;
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

//Switch styling
.switch-toggle {
  position: relative;
  display: inline-block;
  margin: 1rem;
  width: 60px;
  height: 34px;
}

.switch-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4fc22b;
  transition: 0.4s;
  border-radius: 34px;
}

.switch-slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.switch-toggle input:checked + .switch-slider {
  background-color: red;
}

.switch-toggle input:checked + .switch-slider:before {
  transform: translateX(26px);
}

.round {
  border-radius: 34px;
}
`

export default Transactions
