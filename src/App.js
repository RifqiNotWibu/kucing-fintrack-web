import React, { useMemo } from 'react'
import styled from 'styled-components'
import { MainLayout } from './styles/Layouts'
import bg from './img/bg.png'

import Orb from './Components/Orb/orb.js'
import Navigation from './Components/Navigation/Navigation.js'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Income from './Components/Income/Income'
import Dashboard from './Components/Dashboard/Dashboard'

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
            <Route element={<Navigation />}>
              <Route path='/Incomes' element={<Income />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='/' element={<Login />} />
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
