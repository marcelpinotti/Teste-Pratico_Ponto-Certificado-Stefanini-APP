# PROJETO PARA CADASTRO DE FUNCIONÁRIOS

## Resumo
O projeto é um desafio técnico que consistiu na criação de um app para cadastro e consulta de funcionários.

## Pré-Requisitos
Foram necessários os seguintes pré-requisitos para a execução do projeto:

### Tecnologias Utilizadas Back-end:

* Linguagem Java 11;

* Spring Boot Framework;

* Spring Data JPA;

* Spring Boot Security;

* SGBD - PostgreSQL;

* Postman - testar requisições no back-end;

* Maven;

  * Deploy Heroku: https://marcelpinotti-pontocertificado.herokuapp.com/

  * *Obs: foram criados 5 id's;*


| Tipo | Descrição                                             | Caminho                                                      |
| ---- | ----------------------------------------------------- | ------------------------------------------------------------ |
| POST | Cria um funcionário.                                  | **/funcionario/salvar**                                      |
| GET  | Retorna uma lista de funcionários.                    | **/funcionarios**                                            |
| DEL  | Deleta um funcionário pelo id.                        | **/funcionario/{id}**                                        |
| GET  | Retorna um funcionário pelo id.                       | **/funcinario/{id}**                                         |
  
### Tecnologias Utilizadas Front-end:

* Linguagem Javascript;

* ReactJS;

  * Deploy Netlify: https://marcelpinotti-pontocertificado.netlify.app/

  * *Obs: Inicialmente o site está estático.*

    
## MVP para avaliação
* O projeto foi finalizado para a primeira entrega e avaliação;

## Desafio pessoal
* A próxima etapa do banck-end será a refatoração do das entidades, a utilização do padrão DTO, a criação do método PUT, a criação de mais end-points, a criação das services, o tratamento de exceções e criação dos testes unitários.
* A próxima etapa do front-end será a criação da comunicação entre os formulários com as tabelas do banco de dados, para esta etapa estou estudando Axios.
