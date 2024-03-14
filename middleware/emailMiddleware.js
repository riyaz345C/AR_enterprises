const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'riyazaddbazar345@gmail.com',
      pass: 'qgie qxmu piwi ytlv'
    }
  });
  
//   var mailOptions = {
//     from: 'riyazaddbazar345@gmail.com',
//     to: 'sabanaddsbazar@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
const sendEmail = (req, res, next) => {
    if(!req.body.email){
        console.log("not");
        return
    }
    // const {email,message,phoneNumber} = req.body
    // const x = JSON.stringify(req.body)

    const makeHumanReadable = (data) => {
      let humanReadable = '';
    
      for (const [key, value] of Object.entries(data)) {
        humanReadable += `${key}: ${value}\n`;
      }
    
      return humanReadable.trim(); // Remove trailing newline
    };
    const data = makeHumanReadable(req.body)

    const mailOptions = {
      from: 'riyazaddbazar345@gmail.com',
      to: 'riyazaddbazar345@gmail.com',
      subject: 'Sending Email using Node.js',
      text: `${data}`
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Email sent: ' + info.response);
        next(); // Call next middleware
      }
    });
  };
  module.exports = sendEmail
