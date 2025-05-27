function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}) {
    return (
        <form>
            <input type="text" value={obj.nome} placeholder="Nome" onChange={eventoTeclado} name="nome" className="form-control" />
            <input type="text" value={obj.marca} placeholder="Marca" onChange={eventoTeclado} name="marca" className="form-control" />

            {
                botao
                ?
                <button className="btn btn-success" type="button" onClick={cadastrar}>
                    <i className="ri-add-box-fill"/> Cadastrar
                </button>
                :
                <div>
                    <button className="btn btn-dark" type="button" onClick={alterar}>
                        <i className="ri-edit-box-fill"/> Alterar
                    </button>
                    <button className="btn btn-danger" type="button" onClick={remover}>
                        <i className="ri-delete-bin-6-fill"/> Remover
                    </button>
                    <button className="btn btn-warning" type="button" onClick={cancelar}>
                        <i className="ri-close-circle-fill"/> Cancelar
                    </button>
                </div>
            }
        </form>
    );
}

export default Formulario;
