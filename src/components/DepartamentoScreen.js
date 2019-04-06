import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function DepartamentoScreen() {
  const [departamentos, setDepartamentos] = useState([])  
  const [formValues, setFormValues] = useState({})
  
  useEffect(()=> {
      console.log("foi")
    async function fetchData() {
      // You can await here
      const response = await axios.get("http://localhost:8080/api/departamento/all");
      const lista = response.data;
      setDepartamentos(lista)  
      // ...
    }
    fetchData();
    
  }, [])

  async function handleAdicionarDepartamento(){
    
    const dep = {nome: formValues.nome, sigla: formValues.sigla, telefone: formValues.telefone}    
    console.log(formValues)
    console.log(dep)
    await axios.post("http://localhost:8080/api/departamento/", dep);
    setDepartamentos([
      ...departamentos, dep
    ]);
  } 

  function handleOnChange(e){                 
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });    
  }

  return (
    <div>
      <input type="text" name="nome" onChange={(e)=>handleOnChange(e)} placeholder="Nome do Departamento"/>
      <input type="text" name="sigla" onChange={(e)=>handleOnChange(e)} placeholder="Sigla do Departamento"/>
      <input type="text" name="telefone" onChange={(e)=>handleOnChange(e)} placeholder="Telefone do Departamento"/>
      <button onClick={handleAdicionarDepartamento}>
        Adicionar departamento
      </button>
      <ul>
        {departamentos.map(dep=>(
          <li key={dep.id}> {dep.id} - {dep.nome} -  - {dep.sigla} -  - {dep.telefone}</li>
        ))}
      </ul>      
    </div>
  )
}