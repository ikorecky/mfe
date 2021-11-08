import React, {lazy, Suspense, useState} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn}/>
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)}></AuthLazy>
                            </Route>
                            <Route path="/" component={MarketingLazy}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}
