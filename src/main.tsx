import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {setupStore} from './stores/store.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

export const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
