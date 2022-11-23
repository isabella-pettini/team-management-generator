module.exports = htmlTemplate => {
    const { manger, engineer, intern } = htmlTemplate;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Management Generator</title>
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>

    </body>
    </html>
    `
}
