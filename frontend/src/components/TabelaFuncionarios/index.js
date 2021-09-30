
const TabelaFuncionarios = () => {

    return (
        <>
            <div className = "table-responsive">
                <table className="table table-hover table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Sobrenome</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Pis</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Admissão</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Salário</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Marcel</td>
                            <td>Pinotti</td>
                            <td>Masculino</td>
                            <td>32154387609</td>
                            <td>10.222/000-01</td>
                            <td>marcel@xyz.com.br</td>
                            <td>08/10/2021</td>
                            <td>Estagiário</td>
                            <td>1000.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TabelaFuncionarios;
