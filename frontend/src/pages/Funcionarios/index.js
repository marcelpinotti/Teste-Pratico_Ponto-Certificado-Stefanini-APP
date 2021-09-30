import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TabelaFuncionarios from "../../components/TabelaFuncionarios";

const Funcionarios = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1>Lista de Funcionários</h1>
                    <TabelaFuncionarios />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Funcionarios;