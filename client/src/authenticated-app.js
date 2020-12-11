import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import * as ROUTES from "./App/config/routes";
import Admin from './App/screens/Admin/index';
import Trainer from './App/screens/Trainer/index';
import Trainee from './App/screens/Trainee/index';
import Enrolled from './Enrolled/Enrolled';

const Athenticated = () => {
    return ( 
        <Routes />
     );
} 
export default Athenticated;

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.ADMIN} component={Admin} />
                <Route path={ROUTES.TRAINER} component={Trainer} />
                <Route path={ROUTES.TRAINEE} component={Trainee} />
                <Route path={ROUTES.ENROLLED} component={Enrolled} />
                <Route path="/">
                    <Redirect to={ROUTES.ADMIN}/>
                </Route>
            </Switch>
        </Router>
    )
}

// import React from 'react'
// import Enrolled from './App/enrolled/enrolled'

// const App = () =>{
//     return(
//         <div>
//             <Enrolled />
//         </div>
//     )
// }
// export default App