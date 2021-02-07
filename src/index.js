'use strict';

import './media/style.scss';
import {addListerforError, getFormData } from './validators';

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

const es6arrowFunc = (name) => console.log(name);

es6arrowFunc('Rahul Das ...');

addListerforError(loginForm);

if (module.hot){
    console.log('Hot Reloading Enabled');
    module.hot.accept();
}