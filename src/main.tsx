import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {AuthContextProvider} from './context/AuthContext';
import "./firebase.ts"

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </BrowserRouter>
    </Provider>
)