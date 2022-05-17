/* console.log */
const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', 
    (event) => {
        alert('Console.log()' + String.fromCharCode(10) 
            + 'Выводит сообщение в веб-консоль.' + String.fromCharCode(10)
            + String.fromCharCode(10) + 'Синтаксис:' 
            + String.fromCharCode(10) + '   console.log(obj1 [, obj2, ..., objN]);'
            + String.fromCharCode(10) + '   console.log(msg [, subst1, ..., substN]);');
    });

/* alert */
document.querySelector('#alert').addEventListener('click',
(event) => {
    alert('Window.alert()' + String.fromCharCode(10) 
    + 'Показывает диалоговое окно с опциональным (необязательным) сообщением и кнопкой OK.' + String.fromCharCode(10)
    + String.fromCharCode(10) + 'Синтаксис:' 
    + String.fromCharCode(10) + '   window.alert(message);'
    + String.fromCharCode(10) + '   alert(message);'); 
})

/* prompt */
const alertDialog = document.getElementById('alertDialog');

document.querySelector('#prompt').addEventListener('click',
(event) => {
    alertDialog.showModal();
})

document.querySelector('#dlgSubmitBtn').addEventListener('click',
(event) => {
    alertDialog.close();
})
