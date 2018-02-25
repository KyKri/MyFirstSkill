const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = 'amzn1.ask.skill.cbf74e94-f866-49ea-8055-b0dd3143a590';
    alexa.execute();
};