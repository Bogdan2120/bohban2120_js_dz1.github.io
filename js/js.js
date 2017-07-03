// Выведите с помощью  alert содержимое первого абзаца.
let one = document.getElementById('one');
alert(one.innerText);

// Запишите строку “Hello world” во второй абзац.
let two = document.getElementById('two');
two.insertAdjacentText('afterBegin', 'Hello world!');

//Замените содержимое span на произвольную строку.
let three = document.getElementById('ttt');
three.outerHTML = 'Lorem ipsum';