document.querySelector('#linkText').addEventListener('click',
    (event) => {
        /*event.preventDefault();*/
        event.target.innerHTML = prompt('Введите новый текст ссылки');
    })