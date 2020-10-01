import {addListerforError, getFormData } from './validators'
import "./style.scss";

const loginbtn = document.getElementById('login');

const loginForm = document.querySelector('form');

loginbtn.addEventListener('click', (event) =>{
    event.preventDefault();
    event.stopPropagation();
    if( !loginForm.checkValidity() ){
        document.querySelector('#alertarea').classList.remove('hidden');
    } else {
        const data = getFormData(loginForm);
        console.log(data);
        loginForm.reset();
    }
});

addListerforError(loginForm);