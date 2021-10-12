/*Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число. При клике на кнопку происходит следующее:
Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.
Подсказка: получение данных из input.
const value = document.querySelector('input').value;*/


// Ищем ноду для ввода цифры
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-click');

// Вешаем обработчик на кнопку для запроса
 btnNode.addEventListener('click', () => {
    let val1;
    let val2;

    val1 = Number(document.querySelector('.number1').value);
    val2 = Number(document.querySelector('.number2').value);

   //Проверка чисел
    if (typeof val1 == 'number' || !isNaN(val1) || typeof val2 == 'number' || !isNaN(val2)) {
        if (val1 >= 100 && val1<= 300 && val2 >= 100 && val2<= 300) {
             // Делаем запрос за данными
            fetch(`https://picsum.photos/${val1}/${val2}`)
            .then((response) =>{
            resultNode.innerHTML = 
            `<div class="card">
            <img src="${response.url}"/>
            </div>`;
            });
        } else {
            alert('Одно из чисел вне диапазона от 100 до 300');
        }
     } 
  });
