const userNameip = document.getElementById('userName');
const passwordip = document.getElementById('password');

userNameip.addEventListener("input", function (event) {
    userNameip.setCustomValidity('');
    // Add Code to disable the Button untill input ares not valid
    // Add Code to display field spefic error
    userNameip.checkValidity();
});

userNameip.addEventListener('invalid', () => {
    console.log('from u name');
    //userNameip.setCustomValidity('');
});

passwordip.addEventListener("input", function (event) {
    passwordip.setCustomValidity('');
    // Add Code to disable the Button untill input ares not valid
    // Add Code to display field spefic error
});

passwordip.addEventListener('invalid', () => {
    console.log('from password');
});

export const getFormData = (form) => {
    const inputs = form.querySelectorAll('input');
    let values = {};
    form.querySelectorAll('input').forEach( (element)=>{
        values[element.id] = element.value;
    });
    return values;
}

export const addListerforError = (form) => {
    form.querySelectorAll('input').forEach( (element)=>{
        element.addEventListener('input',() => {
            document.querySelector('#alertarea').classList.add('hidden')
        });
    });
}