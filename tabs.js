const tabs = document.querySelectorAll('[data-control="tab"]');

tabs.forEach(function (tab) {
    const tabButtons = tab.querySelectorAll('[data-control="tab-button"]');
    const tabBlocks = tab.querySelectorAll('[data-control="tab-block"]');

    tabButtons.forEach(function (item, index) {
        item.addEventListener('click', function(){
            const currentButton = item; // Кнопка по которой мы кликнули
            const contentBlocks = tab.querySelectorAll('[data-control="tab-block"]');
            const currentBlock = contentBlocks[index];


            if (!currentButton.classList.contains('active')) {
                // Снимаем активный класс со всех кнопок
                tabButtons.forEach(function (item) {
                    item.classList.remove('active');
                });

                // Снимаем активный класс со всех блоков
                tabBlocks.forEach(function (item) {
                    item.classList.remove('active');
                });

                // Добавляем активный класс к кнопке по которой кликнули
                currentButton.classList.add('active');
                // Добавляем активный класс к блоки который нужно показать
                currentBlock.classList.add('active');
            }

            
        });
    });
})