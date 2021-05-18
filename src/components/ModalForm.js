import React, { useContext, useEffect, useState } from 'react';

import Modal from "react-modal";
import Swal from 'sweetalert2';
import { ElementContext } from '../context/elementos/ElementContext';

// estilos personalizados para el evento 
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
};
// poner el Modal en la etiqueta raiz
Modal.setAppElement("#root");

const initEvent = {
    title: '',
    description: '',
    imagePath: 'url'
} 

// Comienza el componente
export const ModalForm = ({modalIsOpen, setIsOpen}) => {

    const { elementState, registerProduct, updateProduct, clearElementActive } = useContext( ElementContext );
    const { activeElement } = elementState;

    const [image, setImage] = useState(null);
    const [formValues, setFormValues] = useState({ initEvent });
    // destructuración de los atributos del formulario
    const { title, description, imagePath } = formValues;

    // Use efect que se ejecuta cuando inicia el componente o cuando activeEvent cambia de valor
    useEffect(() => {
        
        if(activeElement){
            setFormValues(activeElement);
        }else{
            setFormValues( initEvent );
        }
        
    }, [activeElement, setFormValues]);

    // función para agregar el valor al formulario del campo que se este texteando
    const handleInputChange = ({ target }) => {
        setFormValues({
        ...formValues,
        [target.name]: target.value      
        });
    }

    const closeModal = () => {
        setImage(null);
        setIsOpen(false);
        clearElementActive();
        setFormValues(initEvent);
    };

    const selectedHandler = e => {
        //console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }


    // función quese ejecuta cuando hacemos submit del formulario
    const handleSubmitForm = (e) => {
        e.preventDefault();

        if( title.trim().length < 2 || description.trim().length < 2 ){
            Swal.fire('Error', 'El titulo o la descripción no pueden ir vacias', 'error');
            return;
        }
        
        // console.log(formValues);
        // return;
        //Condicion si el elemento esta activo se ejecutara la duncion de actualizar de otro modo la de nuevo producto
        if(activeElement){

            if(!image){
                updateProduct(formValues, activeElement._id)
            }else{

                const formData = new FormData();
                formData.append('title', title);
                formData.append('description', description);
                formData.append('oldPath', imagePath);
                formData.append('image', image);
                updateProduct(formData, activeElement._id);
            }
            
        }else{
            // generar id Temporal mientras no se consume una API
            //formValues.id = elementState.elements.length + 2;
            if(!image){
                Swal.fire('Error', 'debes cargar un archivo', 'error');
            }

            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('image', image);

            registerProduct(formData);
        }

        setImage(null);
        closeModal();
    }
    
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >

            <h1> { (activeElement) ? 'Editar Elemento' : 'Nuevo Elemento ' }</h1>
            <form
                className="container"
                onSubmit={ handleSubmitForm }
            >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titulo</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Titulo" 
                        name="title"
                        value={ title }
                        onChange={ handleInputChange } 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Descripción"  
                        name="description"
                        value={ description }
                        onChange={ handleInputChange } 
                    />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="ControlFile1" className="mb-2">
                        { activeElement ? 'Si no va actualizar imagen dejar campo en blanco' : 'Imagen de articulo'}
                    </label>
                    <input onChange={selectedHandler} className="form-control-file mb-5"  type="file" id="ControlFile1"/>
                </div>

                {
                    activeElement ?
                    <div className="mb-4">
                        <img src={`http://localhost:4000/${imagePath}`}  className="imagen-product-admin" alt="imagen edit"/>
                    </div>
                    : ''
                }
                    

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>

        </Modal>
    )
}
