import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Busca from "./pages/Busca";

const Routes = () => {
    return (
       <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/cadastro" exact>
                    <Cadastro />
                </Route>
                <Route path="/busca" exact>
                    <Busca />
                </Route>
            </Switch>
       </BrowserRouter>
    );
}

export default Routes;