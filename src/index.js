import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalProvider } from './context/globalContext'
import { GlobalStyle } from './styles/GlobalStyle'
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Provider>
  </React.StrictMode>
)
