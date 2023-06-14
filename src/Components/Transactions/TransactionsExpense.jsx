import React from 'react'
import IncomeItem from '../IncomeItem/IncomeItem'
import { useGlobalContext } from '../../context/globalContext'

export const TransactionsExpenses = () => {
  const { expenses, deleteIncome } = useGlobalContext()
  return (
    <div className='expenses'>
      {expenses.map((expense) => {
        const { id, title, amount, date, category, description, type } = expense
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
            indicatorColor='var(--color-red)'
            deleteItem={deleteIncome}
          />
        )
      })}
    </div>
  )
}
