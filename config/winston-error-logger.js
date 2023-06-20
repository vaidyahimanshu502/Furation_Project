const { createLogger, transports, format } = require('winston'); //Getting methods from winston

//Set-Up of LOGGER
const itemsLogger = createLogger({
    transports: [
        new transports.File({
            filename: 'items_errors.log',
            level: 'error',
            dirname: 'errorlogs',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

module.exports = { itemsLogger };



