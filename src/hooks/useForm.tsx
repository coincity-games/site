import { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";

import { FormData } from "../interfaces";

export const useForm = <T extends object>( initFormState:T ) => {

    const [formulario, setFormulario] = useState<T>(initFormState);

    const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]: value,
        });        
    };

    const resetForm = () => {
        setFormulario(initFormState)
    };

    const sendForm = async( formulario:FormData ) => {
      
        await fetch('https://formsubmit.co/ajax/creditopymemexico@outlook.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify( formulario ),
        })        
            .then( res => res.json() )
            // .then( data => console.log( data ) )
            .catch( err => console.log( err ) )    
    };

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>, formulario:FormData) => {
        e.preventDefault();

        const specialCharacter = /[`~!#$%^&*()_°¬|+\-=?;:"<>{}[\]\\/]/;
        const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const { email, nombre, telefono, monto } = formulario;
    
        if( email === '' || nombre === '' || telefono === '' || monto === '' ){
          Swal.fire({
            title: 'Todos los campos son obligatorios',
            confirmButtonColor: '#FF5F62',
            color: '#272236',
          }); 
          return;  
        } 
        if( !emailFormat.test(email) ){
          Swal.fire({
            title: 'El formato de correo es inválido',
            confirmButtonColor: '#FF5F62',
            color: '#272236',
          }); 
          return;
        }
        if( specialCharacter.test( nombre ) ){
          Swal.fire({
            title: 'Los caractéres especiales no son permitidos',
            text: 'Revisa la información proporcionada',
            confirmButtonColor: '#FF5F62',
            color: '#272236',
          }); 
          return;
        }
        if( specialCharacter.test( email ) ){
          Swal.fire({
            title: 'Los caractéres especiales no son permitidos',
            text: 'Revisa la información proporcionada',
            confirmButtonColor: '#FF5F62',
            color: '#272236',
          }); 
          return;
        }
        if( specialCharacter.test( telefono ) ){
          Swal.fire({
            title: 'Los caractéres especiales no son permitidos',
            text: 'Revisa la información proporcionada',
            confirmButtonColor: '#FF5F62',
            color: '#272236',
          }); 
          return;
        }
        if( specialCharacter.test( monto ) ){
          Swal.fire({
            title: 'Los caractéres especiales no son permitidos',
            text: 'Revisa la información proporcionada',
            confirmButtonColor: '#FF5F62',
            color: '#272236',
          }); 
          return;
        }
        if( isNaN(parseInt(telefono)) ){
          Swal.fire({
            title: 'El formato de teléfono es inválido',
            confirmButtonColor: '#FF5F62',
            color: '#272236',
          }); 
          return;
        }
        Swal.fire({
            title: 'Tu información está siendo procesada',
            color: '#FF5F62',
            showConfirmButton: false,
        });
        await sendForm(formulario);
        resetForm(); 
        Swal.fire({
            title: 'Tus datos fueron enviados con éxito',
            icon: 'success',
            confirmButtonColor: '#FF5F62',
            color: '#272236',
        }); 
    };

    return {
        formulario,
        handleChange,

        setFormulario,
        handleSubmit,
    };
};