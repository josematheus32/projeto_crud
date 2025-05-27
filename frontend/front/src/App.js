import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Tabela from "./Tabela";
import 'remixicon/fonts/remixicon.css';

function App() {
  const produto = { 
    codigo: null,
    nome: '',
    marca: ''
  };

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);
  const [tabelaVisivel, setTabelaVisivel] = useState(false); // Estado para controlar a visibilidade da tabela
  const [produtoSelecionado, setProdutoSelecionado] = useState(null); // Estado para rastrear o produto selecionado

  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setProdutos(retorno_convertido));
  }, []);

  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]: e.target.value});
  };

  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json' 
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if (retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        setProdutos([...produtos, retorno_convertido]);
        alert('Produto cadastrado com sucesso!');
        limparFormulario();
      }
    });
  };

  const alterar = () => {
    fetch('http://localhost:8080/alterar', {
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if (retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        alert('Produto alterado com sucesso!');
        let vetorTemp = [...produtos];
        let indice = vetorTemp.findIndex((p) => p.codigo === objProduto.codigo);
        vetorTemp[indice] = objProduto;
        setProdutos(vetorTemp);
        limparFormulario(); // Limpa o formulário e desmarca o produto
      }
    });
  };

  const remover = () => {
    fetch('http://localhost:8080/remover/' + objProduto.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      alert(retorno_convertido.mensagem = 'Produto removido com sucesso!');
      let vetorTemp = [...produtos];
      let indice = vetorTemp.findIndex((p) => p.codigo === objProduto.codigo);
      vetorTemp.splice(indice, 1);
      setProdutos(vetorTemp);
      limparFormulario(); // Limpa o formulário e desmarca o produto
    });
  };

  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
    setProdutoSelecionado(null); // Desmarca o produto selecionado
  };

  const selecionarProduto = (indice) => {
    if (produtoSelecionado === indice) {
      setProdutoSelecionado(null); // Desseleciona se o mesmo produto for clicado
    } else {
      setProdutoSelecionado(indice); // Seleciona o novo produto
    }
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  };

  const toggleTabela = () => {
    setTabelaVisivel(!tabelaVisivel); // Alterna a visibilidade da tabela
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Sistema Gestor de Produtos</h1>
      </header>
      <Formulario 
        botao={btnCadastrar} 
        eventoTeclado={aoDigitar} 
        cadastrar={cadastrar} 
        obj={objProduto} 
        cancelar={limparFormulario} 
        remover={remover} 
        alterar={alterar} 
      />
      <button className="btn btn-primary" onClick={toggleTabela}>
        {tabelaVisivel ? (
          <i className="ri-arrow-up-s-line"></i> // Ícone para esconder a tabela
        ) : (
          <i className="ri-arrow-down-s-line"></i> // Ícone para mostrar a tabela
        )}
      </button>
      {tabelaVisivel && <Tabela vetor={produtos} selecionar={selecionarProduto} produtoSelecionado={produtoSelecionado} />}
    </div>
  );
}

export default App;
