const nodemailer = require('nodemailer');
const emailConfig = require('../config/email');
const util = require('util');
const fs = require('fs');
const path = require('path');
const juice = require('juice');
const html = fs.readFileSync(path.join(__dirname, '../view/index.html'));

let transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: false, // true for 465, false for other ports
    auth: {
        user: emailConfig.user,
        pass: emailConfig.pass,
    },
});

exports.send = async ({email}) => {

    let mailOptions = {
        from: '"Miguel 👻" <no-reply@example.com>',
        to: email,
        subject: "Hello ✔", 
        text: "Hello world?",
        html: juice(html.toString()),
    }

    const sendMail = util.promisify(transporter.sendMail, transporter);
    return sendMail.call(transporter, mailOptions);

}