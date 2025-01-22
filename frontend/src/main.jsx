import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import WishlistContextProvider from './context/WishlistContext.jsx'
import BasketContextProvider from './context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
  <BasketContextProvider>
    <WishlistContextProvider>
      <Provider store={store}>
        <App />
      </Provider>,
    </WishlistContextProvider>
  </BasketContextProvider>
)
