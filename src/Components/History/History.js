import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'

function History() {
  const { transactionHistory } = useGlobalContext()

  const [...history] = transactionHistory()

  return (
    <HistoryStyled>
      <h2>Recent Transactions</h2>
      {history.map((item) => {
        const { id, title, amount, type } = item
        return (
          <div key={id} className='history-item'>
            <p
              style={{
                color: type === 'expense' ? '#fa0000' : 'green',
              }}
            >
              {title}
            </p>

            <p
              style={{
                color: type === 'expense' ? '#fa0000' : 'green',
              }}
            >
              {type === 'expense'
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        )
      })}
    </HistoryStyled>
  )
}

const HistoryStyled = styled.div`
    display: grid;
    flex-direction: column;
    grid-column: 1/3;
    gap: 0.5rem;
    background: rgba(252, 246, 249, 0);
    backdrop-filter: blur(4.5px);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border: 2px solid #FFFFFF;
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1.5rem;

    h2{
      margin-top: -1rem;
    }
    
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default History
