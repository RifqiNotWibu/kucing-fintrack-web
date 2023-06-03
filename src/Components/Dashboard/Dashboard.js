import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import History from '../History/History'
import { InnerLayout } from '../../styles/Layouts'
import { rupiah } from '../../utils/Icons'
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
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
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
              <div className='balance'>
                <h2>Total Balance</h2>
                <p>Rp {totalBalance()}</p>
              </div>
            </div>
          </div>
          <div className='history-con'>
            <History />
            <h2 className='income-title'>
              Min <span>Income</span>Max
            </h2>
            <div className='income-item'>
              <p>Rp {Math.min(...incomes.map((item) => item.amount))}</p>
              <p>Rp {Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className='expense-title'>
              Min <span>Expense</span>Max
            </h2>
            <div className='expense-item'>
              <p>Rp {Math.min(...expenses.map((item) => item.amount))}</p>
              <p>Rp {Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        -ms-layout-grid-line: none;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 3.5rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income,.balance{
                  color: green;
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    h2{
                      color: green;
                      opacity: 0.8;
                    }
                    p{
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: green;
                        opacity: 0.6;
                    }
                }
                .expense{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    color: red;
                    h2{
                      color: red;
                    }
                    p{
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: red;
                        opacity: 0.6;
                    }
                }

                .balance{
                    grid-column: 1 / 5;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 3.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .income-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
                color: green;
                opacity: 0.8;
            }
            .income-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
            .expense-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
                color: red;
            }
            .expense-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
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
`

export default Dashboard
