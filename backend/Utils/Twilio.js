const dotenv = require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require("twilio")(accountSid, authToken);; 

exports.sendSMS = (lo, message) => {
        twilio.messages
        .create({
            body: message,
            from: '+14849236426',
            to: `+91${lo}`,
        })
     
};


