import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { authorize, unAuthorize } from '../redux/reducers/authActions'

const BASE_URL = 'http://localhost:3000/api/v1/'
const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [loginData] = useState([])
  const [registerData] = useState([])
  const [error, setError] = useState(null)

  const userId = useSelector((state) => state.user?.user?.id) || 0
  const token = useSelector((state) => state.user?.token)

  // USER
  const register = async (Register) => {
    try {
      await axios.post(`${BASE_URL}register`, Register)
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  const login = async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, credentials)
      const { user, token } = response.data

      dispatch(authorize(user, token))
    } catch (error) {
      dispatch(unAuthorize(error.message))
    }
  }

  //INCOMES
  const addIncome = async (income) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      await axios.post(`${BASE_URL}addIncome`, income, config)
      getIncomes()
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
      } else {
        setError(error.response.data.message)
        dispatch(unAuthorize(error.message))
      }
    }
  }

  const getIncomes = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${BASE_URL}getIncome/${userId}`, config)
      setIncomes(response.data)
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        dispatch(unAuthorize(error.message))
      } else {
        setError(error.response.data.message)
        dispatch(unAuthorize(error.message))
      }
    }
  }

  const deleteIncome = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { userId: userId },
      }
      await axios.delete(`${BASE_URL}deleteIncome/${id}`, config)
      getIncomes()
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        dispatch(unAuthorize(error.message))
      } else {
        setError(error.response.data.message)
        dispatch(unAuthorize(error.message))
      }
    }
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
      // console.log(year, month)
      console.log(response.data)
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
  const getExpensesByFilter = async (year, month) => {
    try {
      const response = await axios.get(
        `${BASE_URL}transactions-expense/1?year=${year}&month=${month}`
      )
      console.log(response.data)
      setExpenses(response.data)
    } catch (err) {
      setError(err.response.data.message)
    }
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
        getExpensesByFilter,
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
