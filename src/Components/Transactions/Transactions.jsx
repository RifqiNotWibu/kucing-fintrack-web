import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import IncomeItem from '../IncomeItem/IncomeItem'
import TransactionsForm from './TransactionsForm'

function Transactions() {
  const { incomes, getIncomes, getIncomesByFilter, deleteIncome, totalIncome } =
    useGlobalContext()

  useEffect(() => {
    getIncomesByFilter()
  }, [])

  return (
    <main>
      <TransactionsStyled>
        <InnerLayout>
          <h2 className='total-income'>
            Total Income: <span>Rp {totalIncome()}</span>
          </h2>
          <div className='income-content'>
            <div className='form-container'>
              <TransactionsForm getIncomesByFilter={getIncomesByFilter} />
            </div>
            <div className='incomes'>
              {incomes.map((income) => {
                const { id, title, amount, date, category, description, type } =
                  income
                return (
                  <IncomeItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    amount={amount}
                    date={date}
                    type={type}
                    category={category}
                    deleteItem={deleteIncome}
                  />
                )
              })}
            </div>
          </div>
        </InnerLayout>
      </TransactionsStyled>
    </main>
  )
}

const TransactionsStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
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
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: #4fc22b;
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
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
`

export default Transactions
