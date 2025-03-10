package br.com.anm.projeto_crud.produtos.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.anm.projeto_crud.produtos.modelo.ProdutoModelo;
import br.com.anm.projeto_crud.produtos.repositorio.ProdutoRepositorio;

@Service
public class ProdutoServico {
    
    @Autowired
    private ProdutoRepositorio pr;

    public Iterable<ProdutoModelo> listar(){
        return pr.findAll();
    }
}
