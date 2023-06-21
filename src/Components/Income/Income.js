import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../Form/Form'
import { useEffect } from 'react'
import IncomeItem from '../IncomeItem/IncomeItem'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Income() {
  let recentIncomes
  const { incomes, getIncomes, deleteIncome } = useGlobalContext()
  const navigate = useNavigate()
  const authorized = useSelector((state) => state.authorized)

  useEffect(() => {
    getIncomes()
  }, [])

  const maxSlice = incomes.length
  if (maxSlice < 4) {
    recentIncomes = incomes.slice(0, maxSlice)
  } else if (maxSlice >= 4) {
    recentIncomes = incomes.slice(maxSlice - 4, maxSlice)
  }

  useEffect(() => {
    if (!authorized) {
      navigate('/')
    }
  }, [authorized, navigate])

  if (authorized) {
    return (
      <main>
        <IncomeStyled>
          <InnerLayout>
            <h2 className='income-title'>
              Record your <span>Incomes</span> (˵ •̀ ᴗ - ˵ ) ✧
            </h2>
            <div className='income-content'>
              <div className='form-container'>
                <Form />
              </div>
              <div className='incomes'>
                {recentIncomes.reverse().map((income) => {
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
                      indicatorColor='var(--color-green)'
                      deleteItem={deleteIncome}
                    />
                  )
                })}
              </div>
            </div>
          </InnerLayout>
        </IncomeStyled>
      </main>
    )
  }
}

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .income-title {
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
`

export default Income
