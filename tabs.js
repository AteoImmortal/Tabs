// Поиск элементов на странице
// Кнопки
const  tabButtons = document.querySelectorAll('.tab__nav-button');
// Блоки с контентом 
const  tabBlocks = document.querySelectorAll('.tab__block');

// Обходим колекйцию кнопок через forEach
tabButtons.forEach(function (item) {
    // Для каждой кнопки запускаем прослушку события клик
    item.addEventListener('click', function() {
        const currentButton = item; //Кнопка по которой мы кликнули
        const blockIdSelector = currentButton.getAttribute('data-tab');
        const currentBlock = document.querySelector(blockIdSelector);

        // Снимаем активный класс со всех кнопок
        tabButtons.forEach(function (item) {
            item.classList.remove('active')
        });

        // Снимаем активный класс с блоков
        tabBlocks.forEach(function (item) {
            item.classList.remove('active')
        });

        // Добавляем активный класс к кнопке по которой кликнули
        currentButton.classList.add('active');

        // Добавляем активный класс к блоку который нужно показать
        currentBlock.classList.add('active')
    });
})

document.querySelector('.tab__nav-button').click();