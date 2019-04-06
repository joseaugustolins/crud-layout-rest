import React, {useEffect, useState} from 'react';

import axios from 'axios';

export default function SelectDepartamento({func}) {

    const [departamentos, setDepartamentos] = useState([]) 
    
    useEffect(()=> {
        console.log("renderizar")
        async function fetchData() {
          // You can await here
          const response = await axios.get("http://localhost:8080/api/departamento/all");
          const lista = response.data;
          setDepartamentos(lista)
          // ...  
        }
        fetchData();
        
      }, [])
      
      
    return (
        <div>
            <select name="departamento" onChange={func}>
            <option >Selecione o Departamento</option>
              {departamentos.map(dep=>(
                  <option value={dep.id} key={dep.id}>{dep.nome} </option>
              ))}
            </select>
        </div>
    )
}