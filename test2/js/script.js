$(document).ready(function () {
    let isHidden = false;

    // Логіка для кнопки приховування/відображення лівого блоку
    $('#toggle').on('click', function () {
        if (isHidden) {
            $('#left').css('width', '20%');
            $(this).text('➔').css('left', '20%');
        } else {
            $('#left').css('width', '0');
            $(this).text('◄').css('left', '0');
        }
        isHidden = !isHidden;
    });

    // Функція для управління слайдером
    function enableSlider(slider, topSection, bottomSection, container) {
        let isDragging = false;

        $(slider).on('mousedown', function (e) {
            e.preventDefault(); // Запобігання виділення тексту
            isDragging = true;
            $('body').css('user-select', 'none'); // Заборона виділення
        });

        $(document).on('mousemove', function (e) {
            if (isDragging) {
                const containerOffset = $(container).offset().top;
                const containerHeight = $(container).height();
                const newHeight = e.pageY - containerOffset;

                // Обмеження мінімальної висоти
                if (newHeight > 100 && newHeight < containerHeight - 100) {
                    $(topSection).css('height', `${newHeight}px`);
                    $(slider).css('top', `${newHeight}px`);
                    $(bottomSection).css('height', `${containerHeight - newHeight}px`);
                }
            }
        });

        $(document).on('mouseup', function () {
            if (isDragging) {
                isDragging = false;
                $('body').css('user-select', 'auto'); // Відновлення виділення
            }
        });
    }

    // Активуємо слайдери для обох блоків
    enableSlider('#slider', '#top', '#bottom', '#right');
    enableSlider('#left-slider', '#left-top', '#left-bottom', '#left');
});
