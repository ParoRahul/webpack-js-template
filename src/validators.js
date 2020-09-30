const userNameip = document.getElementById('userName');
const passwordip = document.getElementById('password');

const clearAlert = () => document.querySelectorAll('.dispalrt').forEach( item => {
    item.classList.add('d-none')
});

userNameip.addEventListener('change', clearAlert);

passwordip.addEventListener('change', clearAlert);

export function validateUserName(){
    const userName = document.getElementById('userName').value;
    if (userName){
        return true
    } 
    return false
}

export function validatePassowrd(){
    const password = document.getElementById('password').value;
    if (password){
        return true
    } 
    return false
}