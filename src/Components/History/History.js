import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { emptyTrans } from '../../utils/Icons'

function History() {
  const { transactionHistory } = useGlobalContext()

  const history = transactionHistory()

  // Dummy data
  if (history.length === 1) {
    const dummyData = [
      { id: 1, title: '----', amount: 0, type: 'income' },
      { id: 2, title: '----', amount: 0, type: 'expense' },
    ]
    history.push(...dummyData)
  }

  if (history.length === 2) {
    const dummyData = [{ id: 2, title: '----', amount: 0, type: 'expense' }]
    history.push(...dummyData)
  }

  return (
    <HistoryStyled>
      <h2>Recent Transactions</h2>
      {history.length === 0 ? (
        <div className='empty-history'>
          <h4>There are no transactions</h4>
          <p>{emptyTrans}</p>
        </div>
      ) : (
        history.map((item) => {
          const { id, title, amount, type } = item
          return (
            <div key={id} className='history-item'>
              <p
                style={{
                  color: type === 'expense' ? '#fa0000' : '#4fc22b',
                }}
              >
                {title}
              </p>

              <p
                style={{
                  color: type === 'expense' ? '#fa0000' : '#4fc22b',
                }}
              >
                {type === 'expense'
                  ? `-${amount <= 0 ? 0 : amount}`
                  : `+${amount <= 0 ? 0 : amount}`}
              </p>
            </div>
          )
        })
      )}
    </HistoryStyled>
  )
}

const HistoryStyled = styled.div`
    display: grid;
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
      align-self: flex-start;
    }

    .empty-history {
      display: grid;
      border: 1rem black;
      opacity: 0.5;
      h4 {
        justify-self: center;
      }
      p {
        justify-self: center;
        i.fa-solid.fa-money-check-dollar {
          font-size: 11rem; 
        }
      }
    }

    .history-item{
      background: #FCF6F9;
      border: 2px solid #FFFFFF;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      padding: 1rem;
      border-radius: 20px;
      height: 4rem;
      display: flex;
      justify-content: space-between;
      align-self: flex-start;
      align-items: center;
    }
`

export default History
