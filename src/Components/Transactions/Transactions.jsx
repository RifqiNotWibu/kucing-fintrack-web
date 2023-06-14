import React, { useEffect, useStat } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import TransactionsForm from './TransactionsForm'
import { TransactionsExpenses } from './TransactionsExpense'
import { TransactionsIncomes } from './TransactionsIncomes'

function Transactions() {
  const { getIncomesByFilter, totalIncome } = useGlobalContext()

  useEffect(() => {
    getIncomesByFilter(2023, 0)
  }, [])

  return (
    <main>
      <TransactionsStyled>
        <InnerLayout>
          <h2 className='total-income'>
            Total Income : <span>Rp {totalIncome()}</span>
          </h2>
          <div className='income-content'>
            <div className='form-container'>
              <TransactionsForm getIncomesByFilter={getIncomesByFilter} />
            </div>
            {/* <TransactionsIncomes /> */}
            <TransactionsExpenses />
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
`

export default Transactions
