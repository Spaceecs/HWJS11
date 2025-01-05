$(document).ready(function () {
    $('#generate').click(function () {
        // Отримуємо введені параметри
        const length = parseInt($('#length').val(), 10);
        const includeDigits = $('#includeDigits').is(':checked');
        const includeUppercase = $('#includeUppercase').is(':checked');
        const includeLowercase = $('#includeLowercase').is(':checked');

        // Задаємо допустимі символи
        let charset = '';
        if (includeDigits) charset += '0123456789';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';

        // Перевіряємо, чи вибрано хоч один тип символів
        if (!charset) {
            alert('Please select at least one type of characters.');
            return;
        }

        // Генеруємо випадковий рядок
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            randomString += charset[randomIndex];
        }

        // Виводимо результат у текстове поле
        $('#output').val(randomString);
    });
});
