import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Cadastro = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1>Cadastro de Funcionários</h1>
                        <form>
                                <div className="form-group input-group">
                                    <input className="form-control row" type="text" class="form-control" id="inputNome" placeholder="Nome" />
                                    <input className="form-control row" type="text" class="form-control" id="inputSobrenome" placeholder="Sobrenome" />
                                </div>
                                <div className="form-group input-group">
                                    <input className="form-control" type="text" class="form-control" id="inputGenero" placeholder="Gênero" />
                                    <input className="form-control" type="text" class="form-control" id="inputPIS" placeholder="PIS" />
                                    <input className="form-control" type="number" class="form-control" id="inputCPF" placeholder="CPF" />
                                </div>
                                <div class="form-group input-group">
                                    <input className="form-control" type="email" class="form-control" id="inputEmail" placeholder="Email" />
                                </div>
                                <div className= "form-group input-group ">
                                    <input className='form-control' type="text" class="form-control" id="inputCargo" placeholder="Cargo" />
                                    <input className="form-control" type="number" class="form-control" id="inputSalario" placeholder="Salario" />
                                    <input className='form-control' type="date" class="form-control" id="inputAdmissao" placeholder="" />
                                </div>
                            <button type="submit" class="btn btn-primary">Entrar</button>
                        </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cadastro;