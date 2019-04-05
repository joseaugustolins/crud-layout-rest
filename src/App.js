import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App(){

 
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect( () => {
    async function loadFunc(){
      const res =  await axios.get('http://localhost:8080/api/funcionario/all');
      setFuncionarios(res.data);
    }
    loadFunc();
    console.log(funcionarios)
  }, []);



  
    return (
      <div className="App">
        {funcionarios.map((func,i)=>
          <h1 key={i}>{i} - {func.nome}</h1>
        )}        
      </div>
    ) 
  }

export default App;
