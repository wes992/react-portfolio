const functions = require('firebase-functions');

var express = require('express');
const app = express();
// var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/send', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `Name: ${name} \n\nEmail: ${email} \n\nMessage: ${message} `;

  var mail = {
    from: name,
    to: creds.USER,
    subject: 'New Message from Portfolio Contact form',
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
      transporter.sendMail(
        {
          from: creds.USER,
          to: email,
          subject: 'Your form submission was successful',
          text: `Thank you for contacting me! I appreciate you taking the time to look over my portfolio. I will ba happy to answer any questions, and I will be in touch soon. \n\nInformation that I received:\n\nName: ${name}\n\nEmail: ${email}\n\nMessage: ${message}\n\n\n 
          Best,\n Wes Hampton`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Message sent: ' + info.response);
          }
        }
      );
    }
  });
});

app.use(cors());
app.use(express.json());
// app.use('/', router);
// app.listen(3002);








// const functions = require('firebase-functions');
// const express = require('express');
// const app = express()
// app.get('/', (req, res) => {
//   res.send('hello world!')
// })
exports.app = functions.https.onRequest(app);
