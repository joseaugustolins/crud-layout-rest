import {useEffect, useState} from 'react'
import SelectDepartamento from './SelectDepartamento';
import React  from 'react';
import axios from 'axios';

export default function FuncionarioScreen() {
    const [funcionarios, setFuncionarios] = useState([])  
    const [formValues, setFormValues] = useState({})

    useEffect(()=>{
        async function carregaFuncionarios(){
            const response = await axios.get("http://localhost:8080/api/funcionario/all");
            const lista = response.data;
            setFuncionarios(lista);            
        }
        carregaFuncionarios();        
    }, [])

    function handleOnChange(e){
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })        
        console.log(e.target.value)
    }

    async function  AdicionarFuncionario(){
        const func = {cpf: formValues.cpf, nome: formValues.nome, departamento: {id:formValues.departamento}}
        console.log(func)
        const response = await axios.post("http://localhost:8080/api/funcionario/", func);
        
        console.log(response.status)
        setFuncionarios([...funcionarios, func]);
        
    }

    return (
        <div>
           
           <input type="text" name="cpf" onChange={handleOnChange}/> <input type="text" name="nome" onChange={handleOnChange}/>   <SelectDepartamento func={handleOnChange} name="departamento"/>

           
         <ul>
        {funcionarios.map(func=>(
          <li key={func.cpf}> {func.cpf} - {func.nome} - {func.departamento.id}</li>
        ))}        
      </ul>
       
      <button onClick={()=>AdicionarFuncionario()}>Adicionar Funcionário</button>
        </div>
    )
}