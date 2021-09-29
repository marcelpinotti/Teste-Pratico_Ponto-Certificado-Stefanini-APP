import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Seja Bem Vindo(a)!</h1>
                    <p className="lead">Aplicação desenvolvida para cadastro e consulta de funcionários.</p>
                    <hr />
                    <p>Esta aplicação foi desenvolvida em ReactJS e Spring Boot como parte de um processo seletivo.</p>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;