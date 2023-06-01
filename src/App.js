import styled from 'styled-components'
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts'
import Orb from './Components/Orb/Orb.js'
import Navigation from './Components/Navigation/Navigation.js'
import React, { useState, useMemo } from 'react'

function App() {
  const [active, setActive] = useState(1)

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled bg={bg} className='App'>
      {orbMemo}
      <Orb />
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          <h1>Hello</h1>
        </main>
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
