import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MarketingApp from '../components/MarketingApp';
import Header from '../components/Header';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <MarketingApp/>
                    </div>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
}
