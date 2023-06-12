import React, { useContext, useState } from 'react'
import axios from 'axios'
// import { useDispatch } from 'react-redux'
// import { saveToken } from '../redux/actions'
const BASE_URL = 'http://localhost:3000/'

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  // const dispatch = useDispatch()
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [loginData] = useState([])
  const [registerData] = useState([])
  const [error, setError] = useState(null)

  // USER
  const register = async (Register) => {
    try {
      await axios.post(`${BASE_URL}Register`, Register)
    } catch (err) {
      console.log('catch')
      setError(err.response.data.message)
    }
  }

  const login = async (login) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, login)
      // const token = response.data.token

      // dispatch(saveToken(token))
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  //INCOMES
  const addIncome = async (income) => {
    await axios.post(`${BASE_URL}addIncome`, income).catch((err) => {
      setError(err.response.data.message)
    })
    getIncomes()
  }

  const userId = 1 //userId
  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}getIncome/${userId}`)
    console.log(response.data)
    setIncomes(response.data)
  }

  const deleteIncome = async (id) => {
    await axios.delete(`${BASE_URL}deleteIncome/${id}`, {
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

  const getIncomesByFilter = async (year, month) => {
    try {
      const response = await axios.get(
        `${BASE_URL}transactions-income/1?year=${year}&month=${month}`
      )
      console.log(year, month)
      // console.log(response.data)
      setIncomes(response.data)
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  //EXPENSES
  const addExpense = async (income) => {
    await axios.post(`${BASE_URL}addExpense`, income).catch((err) => {
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
    await axios.delete(`${BASE_URL}deleteExpense/${id}`, {
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
    const temp = [...incomes, ...expenses]
    temp.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

    const history = temp.slice(0, 3)
    return history
  }

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        getIncomesByFilter,
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
        register,
        registerData,
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
