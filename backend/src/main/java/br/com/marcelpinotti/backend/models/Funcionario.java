package br.com.marcelpinotti.backend.models;


import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;


@Entity
@Table(name = "tb_funcionarios")
public class Funcionario implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String nome;
    @NotNull
    private String sobrenome;
    @NotNull
    private String sexo;
    @NotNull
    private Long cpf;
    @NotNull
    private String pis;
    @NotNull
    private String email;
    @NotNull
    private String cargo;
    @NotNull
    private Double salario;
    @NotNull
    private LocalDate admissao;


    public Funcionario(String nome, String sobrenome,
                       String sexo, Long cpf, String pis, String email,
                       String cargo, Double salario, LocalDate admissao) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.cpf = cpf;
        this.pis = pis;
        this.email = email;
        this.cargo = cargo;
        this.salario = salario;
        this.admissao = admissao;
    }

    public Funcionario(){
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String  sexo) {
        this.sexo = sexo;
    }

    public Long getCpf() {
        return cpf;
    }

    public void setCpf(Long cpf) {
        this.cpf = cpf;
    }

    public String getPis() {
        return pis;
    }

    public void setPis(String pis) {
        this.pis = pis;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public LocalDate getAdmissao() {
        return admissao;
    }

    public void setAdmissao(LocalDate admissao) {
        this.admissao = admissao;
    }
}