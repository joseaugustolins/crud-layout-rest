import {BrowserRouter, Route} from 'react-router-dom'

import DepartamentoScreen from './components/DepartamentoScreen';
import FuncionarioScreen from './components/FuncionarioScreen';
import Menu from './components/Menu';
import Navigator from './components/Navigator'
import React from 'react';

export default function App() {
  
  return (
    <div>
      <BrowserRouter>
      
        <Menu/>
        <Route path="/funcionario" component={FuncionarioScreen}/>
        <Route path="/departamento" component={DepartamentoScreen}/>        
      </BrowserRouter>
      
    </div>
  )
}