function Formulario(){
    return (
        <form className="container-form">
            <h1>Formulário</h1>

            <input className="entrada" type="text" placeholder="Nome"/>
            <input className="entrada" type="text" placeholder="Marca"/>

            <div className="container-btn">
            <input className="btn btn-success" type="button" value="Cadastrar"/>
            <input className="btn btn-dark" type="button" value="Alterar"/>
            <input className="btn btn-danger" type="button" value="Remover"/>
            <input className="btn btn-warning" type="button" value="Cancelar"/>
            </div>
        </form>
    )
}

export default Formulario;