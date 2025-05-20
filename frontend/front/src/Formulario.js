function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return (
        <form>
            <h2>Sistema Gestor de Produtos</h2>

            <input type="text" value={obj.nome} placeholder="Nome" onChange={eventoTeclado} name="nome" className="form-control"/>
            <input type="text" value={obj.marca} placeholder="Marca" onChange={eventoTeclado} name="marca" className="form-control"/>

            {
                botao
                ?
                <input className="btn btn-success" type="button" value="Cadastrar" onClick={cadastrar}/>
                :
                <div>
                <input className="btn btn-dark" type="button" onClick={alterar} value="Alterar"/>
                <input className="btn btn-danger" type="button" onClick={remover} value="Remover"/>
                <input className="btn btn-warning" type="button" onClick={cancelar} value="Cancelar"/>
                </div>
            }
        </form>
    )
}

export default Formulario;