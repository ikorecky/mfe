import React from 'react';
import {Switch, Router, Route } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

import SignUp from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin" >
                        <SignIn onSignIn={onSignIn}></SignIn>
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignIn={onSignIn}></SignUp>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}
