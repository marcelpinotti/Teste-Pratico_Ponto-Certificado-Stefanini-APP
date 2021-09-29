import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Busca = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1>Busca por Funcionário</h1>
                        <form>
                            <div class="form-group input-group col-md-3">
                                <input className="form-control" type="number" class="form-control" id="inputID" placeholder="ID" />
                            </div>
                            <div className="form-group input-group">
                                <input className="form-control row" type="text" class="form-control" id="inputNome" placeholder="Nome" />
                                <input className="form-control row" type="text" class="form-control" id="inputSobrenome" placeholder="Sobrenome" />
                            </div>
                            <div className="form-group input-group">
                                <input className='form-control' type="text" class="form-control" id="inputCargo" placeholder="Cargo" />
                                <input className='form-control' type="text" class="form-control" id="inputAdmissao" placeholder="Admissão" />
                            </div>  
                            <div class="form-group input-group">
                                <input className="form-control" type="text" class="form-control" id="inputEmail" placeholder="Email" />
                            </div>
                            <button type="submit" class="btn btn-primary">Buscar</button>
                        </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Busca;