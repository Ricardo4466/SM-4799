import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home"
import Teste from "./pages/Teste"


function Router({
    setIsTourOpen,
    toggleShowMore
}){
    return(
        <BrowserRouter>
            <Route exact path="/" render={(props) => (<Home {...props} setIsTourOpen={setIsTourOpen} toggleShowMore={toggleShowMore}/>)}/>
            <Route exact path="/teste" component={Teste}/>
        </BrowserRouter>
    );
}

export default Router