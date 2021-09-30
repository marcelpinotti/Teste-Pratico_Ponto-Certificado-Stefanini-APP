package br.com.marcelpinotti.backend.repositories;

import br.com.marcelpinotti.backend.models.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository <Funcionario, Long> {
}
