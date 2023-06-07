import React from 'react'
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/DateFormat'

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

function Chart() {
  const { incomes, expenses } = useGlobalContext()
  const sortedIncomes = incomes.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )
  const sortedExpenses = expenses.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )

  const data = {
    labels: sortedIncomes.map((inc) => {
      const { date } = inc
      return dateFormat(date)
    }),
    datasets: [
      {
        label: 'Income',
        data: sortedIncomes.map((income) => {
          const { amount } = income
          return amount
        }),
        backgroundColor: '#4fc22b',
        tension: 0.2,
      },
      {
        label: 'Expenses',
        data: sortedExpenses.map((expense) => {
          const { amount } = expense
          return amount
        }),
        backgroundColor: 'red',
        tension: 0.2,
      },
    ],
  }

  return (
    <ChartStyled>
      <h1>All Transactions Chart</h1>
      <Line data={data} />
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    background: rgba(252, 246, 249, 0);
    backdrop-filter: blur(4.5px);
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 0.5rem;
    padding-top: 1rem;
    border-radius: 20px;
    height: 100%;
    h1{
      padding-bottom: 1rem;
      padding-left: 0.5rem;
    }
`

export default Chart
