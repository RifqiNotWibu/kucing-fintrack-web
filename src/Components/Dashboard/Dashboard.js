import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import History from '../History/History'
import { InnerLayout } from '../../styles/Layouts'
import Chart from '../Chart/Chart'

function Dashboard() {
  const {
    totalExpense,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext()

  useEffect(() => {
    getIncomes()
    getExpenses()
  }, [])

  return (
    <main>
      <DashboardStyled>
        <InnerLayout>
          <div className='stats-con'>
            <div className='chart-con'>
              <Chart />
              <div className='amount-con'>
                <div className='income'>
                  <h2>Total Income</h2>
                  <p>Rp {totalIncome()}</p>
                </div>
                <div className='expense'>
                  <h2>Total Expense</h2>
                  <p>Rp {totalExpense()}</p>
                </div>
              </div>
            </div>
            <div className='history-con'>
              <History />
              <h2 className='income-title'>
                Min<span>Income</span>Max
              </h2>
              <div className='income-item'>
                <p>Rp {Math.min(...incomes.map((item) => item.amount))}</p>
                <p>Rp {Math.max(...incomes.map((item) => item.amount))}</p>
              </div>
              <h2 className='expense-title'>
                Min<span>Expense</span>Max
              </h2>
              <div className='expense-item'>
                <p>Rp {Math.min(...expenses.map((item) => item.amount))}</p>
                <p>Rp {Math.max(...expenses.map((item) => item.amount))}</p>
              </div>
            </div>
            <div className='balance'>
              <div className='balance-box'>
                <h2>
                  Total Balance : <span> Rp {totalBalance()}</span>{' '}
                </h2>
              </div>
            </div>
          </div>
        </InnerLayout>
      </DashboardStyled>
    </main>
  )
}

const DashboardStyled = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
    .stats-con{
        display: grid;
        -ms-layout-grid-line: none;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1/4;
            height: 425px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 1.5rem;
                .income, .expense{
                    grid-column: span 2;
                    font-size: 1rem;
                }
                .income{
                  background: rgba(252, 246, 249, 0.6);
                  backdrop-filter: blur(4.5px);
                  border: 2px solid #FFFFFF;
                  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                  border-radius: 20px;
                  padding-top: 0.8rem;
                  padding-left: 1rem;
                  height: 100px;
                  color: green;
                  h2{
                    color: green;
                    opacity: 0.8;
                  }
                  p{
                      font-size: 1.75rem;
                      font-weight: 700;
                      color: green;
                      opacity: 0.6;
                  }
                }
                .expense{
                    background: rgba(252, 246, 249, 0.6);
                    backdrop-filter: blur(4.5px);
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding-top: 0.8rem;
                    padding-left: 1rem;
                    height: 100px;
                    color: red;
                    h2{
                      color: red;
                    }
                    p{
                        font-size: 1.75rem;
                        font-weight: 700;
                        color: red;
                        opacity: 0.6;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 0.9rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .income-title{
                font-size: 1.2rem;
                color: green;
                opacity: 0.8;
                padding-left: 1rem;
                padding-right: 1rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .income-item{
              display: flex;
              background: rgba(252, 246, 249, 0.6);
              backdrop-filter: blur(4.5px);
              border: 2px solid #FFFFFF;
              box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
              margin-top: -1rem;
              padding: 1rem;
              border-radius: 20px;
              justify-content: space-between;
              align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
            .expense-title{
                font-size: 1.2rem;
                color: red;
                opacity: 0.8;
                padding-left: 1rem;
                padding-right: 1rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .expense-item{
                background: rgba(252, 246, 249, 0.6);
                backdrop-filter: blur(4.5px);
                border: 2px solid #FFFFFF;
                padding: 1rem;
                margin-top: -1rem;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
    .balance {
      display: flex;
      grid-column: 1 / 6;
      justify-content: center;
      background: rgba(252, 246, 249, 0.4);
      backdrop-filter: blur(4.5px);
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      border-radius: 20px;
      padding: 1rem;
      .balance-box{
        display: flex;
        flex-direction: column;
        h2{
          color: green;
          opacity: 0.8;
        }
        span{
          margin-left: 1rem;
        }
      p{
          font-size: 1.75rem;
          font-weight: 700;
          color: green;
          opacity: 0.6;
      }
      }
   }
`

export default Dashboard
