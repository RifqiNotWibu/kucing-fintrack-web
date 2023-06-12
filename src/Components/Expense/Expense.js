import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import { useEffect } from 'react'
import IncomeItem from '../IncomeItem/IncomeItem'
import ExpenseForm from './ExpenseForm'

function Expense() {
  const { expenses, getExpenses, deleteExpense, totalExpense } =
    useGlobalContext()

  useEffect(() => {
    getExpenses()
  }, [])

  return (
    <main>
      <ExpenseStyled>
        <InnerLayout>
          <h2 className='total-expense'>
            Total Expense: <span>Rp {totalExpense()}</span>
          </h2>
          <div className='expense-content'>
            <div className='form-container'>
              <ExpenseForm />
            </div>
            <div className='expenses'>
              {expenses.map((income) => {
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
                    deleteItem={deleteExpense}
                  />
                )
              })}
            </div>
          </div>
        </InnerLayout>
      </ExpenseStyled>
    </main>
  )
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-expense {
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
      color: red;
    }
  }
  .expense-content {
    display: flex;
    gap: 2rem;
    .expenses {
      flex: 1;
    }
  }
`

export default Expense
