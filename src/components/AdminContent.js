import React, { useContext, useEffect, useState } from 'react';
import { ElementContext } from '../context/elementos/ElementContext';
import { ModalForm } from './ModalForm';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const AdminContent = () => {

    const { elementState, cargarProduct, deleteProduct, dispatch } = useContext( ElementContext );
    const { elements } = elementState;

    // Use state para manejar el abrir y cerrar del modal
    const [modalIsOpen, setIsOpen] = useState(false);

    // en este use disparch no le paso cargarProductos a los corchetes de el useEffect porque entra en un ciclo infinito
    // por eso agrego las lineas de eslint-idsable..  para que no marque error en la consola
    // otra forma de solucionarlo es usar el dispatch y con el dispatch ejecutar la funcion en ElementContext, como se hace en redux
    useEffect(() => {
        cargarProduct()

        // eslint-disable-next-line
    },[]);


    // funcion para abrir el modal y ahí llenar formulario
    const newElement = () => {
        setIsOpen(true);
    }

    const editElement = (element) => {
        //console.log(element);
        dispatch({
            type: types.elementSetAtive,
            payload: element,
          });
        setIsOpen(true);
    }
    const deleteElement = (id) => {
        //console.log(id);

        Swal.fire({
            title: '¿Esta seguro de eliminar?',
            text: "Si eliminar no podras recuperarlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

              deleteProduct(id);
            }
          })

        
    }

    return (
        <div className="container mt-5 alto-100">
            <div className="d-flex justify-content-end">   
                <button 
                    type="button" 
                    className="btn btn-success btn-lg"
                    onClick={() => newElement() }
                >Nuevo Elemento</button>
            </div>
            
            <table className="table table-striped table-hover mt-4">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {elements.map( element => (
                         <tr key={element._id}>
                            <th scope="row">{element._id}</th>
                            <td>{element.title}</td>
                            <td>{element.description}</td>
                            <td><img 
                                    src={`http://localhost:4000/${element.imagePath}`} 
                                    className="imagen-product-admin" 
                                    alt="imagen producto"/>
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-primary btn-lg me-3"
                                    onClick={() => editElement(element) }
                                >Editar</button>
                                <button type="button" className="btn btn-danger btn-lg" onClick={() => deleteElement(element._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <ModalForm 
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    )
}
