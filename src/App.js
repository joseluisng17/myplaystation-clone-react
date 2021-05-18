import React from 'react';
import { ElementProdiver } from './context/elementos/ElementContext';
import { AppRouter } from './router/AppRouter';
import './styles.css';

export const App = () => {
    return (
        <ElementProdiver>
            <AppRouter />
        </ElementProdiver>
    )
}
