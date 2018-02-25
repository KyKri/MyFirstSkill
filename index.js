const Alexa = require('alexa-sdk');

const cardTitle = 'My First Skill';
const cardContent = 'Testing 1 2 3!';

const handlers = {
    'LaunchRequest' : function() {
        this.emit('TestIntent');
    },
    'TestIntent' : function() {
        this.response.speak('Testing 1 2 3')
            .cardRenderer(cardTitle, cardContent);
        this.emit(':responseReady');
    }
};

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = 'amzn1.ask.skill.cbf74e94-f866-49ea-8055-b0dd3143a590';
    alexa.registerHandlers(handlers);
    alexa.execute();
};