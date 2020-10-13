const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

logger.info('Information message');
logger.warn('Warning message');
logger.error('Error message');

logger.configure({
    level: 'error',
    transports: [
        new winston.transports.Console()
    ]
});

logger.info('Information message 2');
logger.warn('Warning message 2');
logger.error('Error message 2');
