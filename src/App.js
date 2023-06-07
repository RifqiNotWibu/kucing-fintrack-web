import React, { useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { MainLayout } from './styles/Layouts'
import bg from './img/bg.png'

import Orb from './Components/Orb/orb.js'
import Login from './Components/Login/Login'
import Navigation from './Components/Navigation/Navigation.js'
import Dashboard from './Components/Dashboard/Dashboard'
import Income from './Components/Income/Income'
import Expense from './Components/Expense/Expense'
import Signup from './Components/Signup/Signup'

function App() {
  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled bg={bg} className='App'>
      {orbMemo}
      <MainLayout>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route element={<Navigation />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/Incomes' element={<Income />} />
              <Route path='/Expenses' element={<Expense />} />
            </Route>
          </Routes>
        </Router>
      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }

`
export default App
