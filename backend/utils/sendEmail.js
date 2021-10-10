const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"BuzzCart" <sanidhyabhardwaj3340@gmail.com>', // sender address
    to: options.to, // list of receivers
    subject: options.subject, // Subject line
    html: options.text, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("contact", { msg: "Email has been sent" });
  });
};

module.exports = sendEmail;
