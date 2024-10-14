const express = require('express');
const app = express();

// Маршрут для головної сторінки
app.get('/', (req, res) => {
    // Отримуємо сьогоднішню дату
    const today = new Date();
    // Форматуємо дату відповідно до української локалізації
    const formattedDate = today.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Відправляємо HTML з сьогоднішньою датою
    res.send(`
        <html>
            <head>
                <title>Календар</title>
            </head>
            <body>
                <h1>Сьогоднішня дата: ${formattedDate}</h1>
            </body>
        </html>
    `);
});

// Налаштування порту для запуску сервера
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});
