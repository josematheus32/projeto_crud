function Tabela({ vetor, selecionar, produtoSelecionado }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.marca}</td>
                            <td>
                                <button onClick={() => { selecionar(indice) }} className="btn-icon" disabled={produtoSelecionado === indice} // Desabilita o botão se o produto estiver selecionado
                                
                                >
                                    {produtoSelecionado === indice ? (
                                        <i className="ri-checkbox-fill" style={{ color: 'black' }}></i> // Ícone para produto selecionado
                                    ) : (
                                        <i className="ri-checkbox-blank-line" style={{ color: 'black' }}></i> // Ícone para produto não selecionado
                                    )}
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Tabela;
