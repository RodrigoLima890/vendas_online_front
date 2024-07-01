import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './login/Login';
import GlobalStyle from './GlobalStyle';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Cria uma raiz para a renderização
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro da raiz criada
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
  </React.StrictMode>
);

