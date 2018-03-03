const twilio = require('twilio');

const accountSid = 'ACc2475a6d525f17ada8e584979cd5a582';
const authToken = '140b204deae2b545a67925e90dfea51b';

module.exports = new twilio.Twilio(accountSid, authToken);

