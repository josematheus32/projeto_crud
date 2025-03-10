package br.com.anm.projeto_crud.produtos.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.anm.projeto_crud.produtos.modelo.ProdutoModelo;
import br.com.anm.projeto_crud.produtos.servico.ProdutoServico;

@RestController
public class ProdutoControle {

    @Autowired
    private ProdutoServico ps;

    @GetMapping("/listar")
    public Iterable<ProdutoModelo> listar(){
        return ps.listar();
    }
    
    @GetMapping("/")
    public String rota(){
        return "A API está funcionando!";
    }
}
