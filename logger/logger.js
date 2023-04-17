const {createLogger, transports, format, info} = require('winston')

const serviceLogger = createLogger({
    transports:[
        new transports.File({
            filename: 'combined.log',
            level: 'info',
            format: format.combine(format.json(), format.timestamp(), format.prettyPrint())
        }),
        new transports.File({
            filename: 'error.log',
            level: 'error',
            format: format.combine(format.json(), format.timestamp(), format.prettyPrint())
        })
    ]
})
module.exports = {serviceLogger}