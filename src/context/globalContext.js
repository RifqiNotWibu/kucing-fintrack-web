import React, { useContext, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)
  const [loginData] = useState([])

  // USER
  const login = async (login) => {
    const response = await axios
      .post(`${BASE_URL}login`, login)
      .catch((err) => {
        setError(err.response.data.message)
      })
    console.log(response.data)
  }

  //INCOMES
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}addIncome`, income)
      .catch((err) => {
        setError(err.response.data.message)
      })
    getIncomes()
  }

  const userId = 1 //userId
  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}getIncome/${userId}`)
    setIncomes(response.data)
    console.log(response.data)
  }

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}deleteIncome/${id}`, {
      data: { userId: userId },
    })
    getIncomes()
  }

  const totalIncome = () => {
    let totalIncome = 0
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount
    })

    return totalIncome
  }

  //EXPENSES
  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}addExpense`, income)
      .catch((err) => {
        setError(err.response.data.message)
      })
    getExpenses()
  }

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}getExpense/${userId}`)
    setExpenses(response.data)
    console.log(response.data)
  }

  const deleteExpense = async (id) => {
    const response = await axios.delete(`${BASE_URL}deleteExpense/${id}`, {
      data: { userId: userId },
    })
    getExpenses()
  }

  const totalExpense = () => {
    let totalExpense = 0
    expenses.forEach((income) => {
      totalExpense = totalExpense + income.amount
    })

    return totalExpense
  }

  const totalBalance = () => {
    return totalIncome() - totalExpense()
  }

  const transactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return history.slice(0, 3)
  }

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        incomes,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpense,
        expenses,
        login,
        loginData,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
