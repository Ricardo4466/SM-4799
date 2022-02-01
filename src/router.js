import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home"
import Teste from "./pages/Teste"


function Router(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/teste" component={Teste}/>
                
            
        </BrowserRouter>
    );
}

export default Router