function Formulario({botao, eventoTeclado, cadastrar}){
    return (
        <form>
            <h2>Sistema Gestor de Produtos</h2>

            <input type="text" placeholder="Nome" onChange={eventoTeclado} name="nome" className="form-control"/>
            <input type="text" placeholder="Marca" onChange={eventoTeclado} name="marca" className="form-control"/>

            {
                botao
                ?
                <input className="btn btn-success" type="button" value="Cadastrar" onClick={cadastrar}/>
                :
                <div>
                <input className="btn btn-dark" type="button" value="Alterar"/>
                <input className="btn btn-danger" type="button" value="Remover"/>
                <input className="btn btn-warning" type="button" value="Cancelar"/>
                </div>
            }
        </form>
    )
}

export default Formulario;