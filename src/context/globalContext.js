import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = "http://localhost:3000/"

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)

  //calculate incomes
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

  return (
    <GlobalContext.Provider
      value={{ addIncome, getIncomes, deleteIncome, totalIncome, incomes }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
