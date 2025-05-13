import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App() {

  const produto = { 
    codigo : null,
    nome : '',
    marca : ''
  }

  const [btnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setProdutos(retorno_convertido));
  }, []);

  //Obter dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]:e.target.value});
  }

  //Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{
      method: 'post',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json' 

      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
     if(retorno_convertido.mensage !== undefined){
      alert(retorno_convertido.mensage);
     }else{
      setProdutos([...produtos, retorno_convertido]);
      alert('Produto cadastrado com sucesso!')
     }
    })
  }

  return (
    <div>
      <p>{JSON.stringify(objProduto)}</p>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar}/>
      <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;
