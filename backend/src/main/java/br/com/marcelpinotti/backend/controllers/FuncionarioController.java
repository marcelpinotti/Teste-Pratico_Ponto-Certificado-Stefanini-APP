package br.com.marcelpinotti.backend.controllers;

import br.com.marcelpinotti.backend.models.Funcionario;
import br.com.marcelpinotti.backend.repositories.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class FuncionarioController {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @GetMapping(path = "/funcionario/{id}")
    public ResponseEntity<Funcionario> consultar (@PathVariable("id") Long id){
        return funcionarioRepository.findById(id)
                .map(funcionario -> ResponseEntity.ok().body(funcionario))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(path = "/funcionarios")
    public ResponseEntity<Page<Funcionario>> listartodos(Pageable pageable){
        Page<Funcionario> lista = funcionarioRepository.findAll(pageable);
        return ResponseEntity.ok(lista);
    }

    @PostMapping(path = "/funcionario/salvar")
    public Funcionario salvar (@RequestBody Funcionario funcionario){
        return funcionarioRepository.save(funcionario);
    }

    @DeleteMapping(path = "/funcionario/deletar/{id}")
    public void deletar (@RequestBody @PathVariable("id") Long id){
        Funcionario funcionario = funcionarioRepository.getById(id);
        funcionarioRepository.delete(funcionario);
    }
}

