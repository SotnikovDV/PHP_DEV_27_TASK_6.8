const   duplicateField = document.querySelector('#duplicateField');
const   inputText = document.querySelector('#inputText');

inputText.addEventListener('input',
    (event) => {
        duplicateField.textContent = event.target.value;
    })

document.querySelector('#btnSubmit').addEventListener('click',
    (event) => {
        event.preventDefault();
        console.log(inputText.value);
        inputText.value = '';
        duplicateField.textContent = '';
    })