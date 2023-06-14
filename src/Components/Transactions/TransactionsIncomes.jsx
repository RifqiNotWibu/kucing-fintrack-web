import React from 'react'
import IncomeItem from '../IncomeItem/IncomeItem'
import { useGlobalContext } from '../../context/globalContext'

export const TransactionsIncomes = () => {
  const { incomes, deleteIncome } = useGlobalContext()
  return (
    <div className='incomes'>
      {incomes.map((income) => {
        const { id, title, amount, date, category, description, type } = income
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
  )
}
