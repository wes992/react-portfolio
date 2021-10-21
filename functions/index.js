const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const config = require('./config');
const cors = require('cors')({ origin: true });
/**  * using gmail with nodemailer  */

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: config.auth,
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const { email, name, message } = req.body;
    const myName = `${config.name.first} ${config.name.last}`;

    const emailUser = () => {
      const mailOptions = {
        from: `${myName} <no-reply@weshampton.dev>`,
        to: config.personalEmail,
        subject: 'Contact Form Message', // email subject
        html: `<div>             
                <div> ${config.name.first}, </div>
                <br/>
                <p> You have received a new message from your portfolio.</p>
                <p> Here is the information: </p>
                <br/>
                <div> Name: ${name} </div>
                <div> Email: ${email}  </div>
                <div> Message: ${message} </div>
                
              </div>`, // email content in HTML
      };
      // returning result
      return transporter.sendMail(
        mailOptions,
        (err, info) => {
          if (err) {
            return res.send(err.toString());
          }
          return res.send('that worked');
        }
      );
    };
    const mailOptions = {
      from: `${myName} <no-reply@weshampton.dev>`,
      to: email,
      subject: 'Contact Form Message', // email subject
      html: `<div>             
              <div> Hey ${name}, </div>
              <br/>
              <div>  Thank you for reaching out. I have received your message and I will get back to you as soon as I can.</div>
              <br/>
              <div> Here is the information I received: </div>
              <br/>
              <div> Name: ${name}</div>
              <div> Email: ${email} </div>
              <div> Message: ${message}</div>
              <br/>
              <div> Best, </div>
              <div> ${myName} </div>
            </div>`, // email content in HTML
    };
    // returning result
    return transporter.sendMail(
      mailOptions,
      (err, info) => {
        if (err) {
          return res.send(err.toString());
        }
        emailUser();
        return res.send('Message Sent');
      }
    );
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
