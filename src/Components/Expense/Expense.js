import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import { useEffect } from 'react'
import IncomeItem from '../IncomeItem/IncomeItem'
import ExpenseForm from './ExpenseForm'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

function Expense() {
  let recentExpenses
  const { expenses, getExpenses, deleteExpense } = useGlobalContext()
  const navigate = useNavigate()
  const authorized = useSelector((state) => state.authorized)

  useEffect(() => {
    getExpenses()
  }, [])

  const maxSlice = expenses.length
  if (maxSlice < 4) {
    recentExpenses = expenses.slice(0, maxSlice)
  } else if (maxSlice >= 4) {
    recentExpenses = expenses.slice(maxSlice - 4, maxSlice)
  }

  useEffect(() => {
    if (!authorized) {
      navigate('/')
    }
  }, [authorized, navigate])

  if (authorized) {
    return (
      <main>
        <ExpenseStyled>
          <Helmet>
            <title>Kucing Fintracker | Expense</title>
          </Helmet>
          <InnerLayout>
            <h2 className='expense-title'>
              Record your <span>Expenses</span>(˵ •̀ ᴗ - ˵ ) ✧
            </h2>
            <div className='expense-content'>
              <div className='form-container'>
                <ExpenseForm />
              </div>
              <div className='expenses'>
                {recentExpenses.reverse().map((income) => {
                  const {
                    id,
                    title,
                    amount,
                    date,
                    category,
                    description,
                    type,
                  } = income
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
                      indicatorColor='var(--color-red                                              )'
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
}
const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .expense-title {
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
