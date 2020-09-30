import {validateUserName, validatePassowrd } from './validators'
import "./style.scss";

const loginbtn = document.getElementById('login');

loginbtn.addEventListener('click', (event) =>{
    event.preventDefault();
    event.stopPropagation();
    // items = document.getElementsByClassName('alert').forEach( item => item.classList.add('hide'));
    // console.log(document.querySelectorAll('.alert'));
   
    if (validatePassowrd() && validateUserName() ){
        const alersElememt = document.getElementById('alerts');
        alersElememt.classList.remove('d-none');
        console.log('Sucess');
    } else {
        const alerdElememt = document.getElementById('alertd');
        alerdElememt.classList.remove('d-none');
        console.log('Error')
    }
    //console.log('End')
});