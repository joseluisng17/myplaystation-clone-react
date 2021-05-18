import React, { createContext, useReducer } from 'react';
import clienteAxios from '../../helpers/axios';
import { types } from '../../types/types';
import { elementsReducer } from './elementsReducer';

export const ElementContext = createContext();

const initialSate = {
    elements: [
        /*{
            _id: 1,
            title: 'playstation home',
            description: 'Juego esclusivo de ps4',
            imagePath: 'https://image.shutterstock.com/image-photo/brecht-belgium-march-28-2019-260nw-1519459631.jpg'
        },
        {
            _id: 2,
            title: 'ps4',
            description: 'Juego mundo abierto',
            imagePath: 'https://fondosmil.com/fondo/22853.jpg'
        } */
    ],
    activeElement: null
};

export const ElementProdiver = ({ children }) => {

    const [elementState, dispatch] = useReducer(elementsReducer, initialSate);

    const cargarProduct = async() => {

        try {
            const resultado = await clienteAxios.get('/photos');
            console.log(resultado.data);

            dispatch({
                type: types.elementLoaded,
                payload: resultado.data
            });

        } catch (error) {
            console.log(error);
        }

    }

    const registerProduct = async(product) => {

        try {
            const resultado = await clienteAxios.post('/photos', product);
            //console.log(resultado.data.photo);

            dispatch({
                type: types.elementAddNew,
                payload: resultado.data.photo
            });

        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async(id) => {

        try {

            const resultado = await clienteAxios.delete(`/photos/${id}`);
            console.log(resultado.data);

            dispatch({
                type: types.elementDeleted,
                payload: id
            });

        } catch (error) {
            console.log(error);
        }

    }

    const updateProduct = async(product, id) => {

        try {
            const resultado = await clienteAxios.put(`/photos/${id}`, product);
            console.log(resultado.data.updatedPhoto);

            dispatch({
                type: types.elementUpdated,
                payload: resultado.data.updatedPhoto
            });

        } catch (error) {
            console.log(error);
        }
    }



    const clearElementActive = () => {
        dispatch({
            type: types.elementClearActiveEvent,
        });
    }

    return(
        <ElementContext.Provider value={{
            elementState,
            cargarProduct,
            registerProduct,
            deleteProduct,
            updateProduct,
            clearElementActive,
            dispatch
        }}>
            { children }
        </ElementContext.Provider>
    )
}


