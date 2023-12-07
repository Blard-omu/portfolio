const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'peteromu76@gmail.com',
    pass: 'Blard140##',
  },
});

app.post('/api/send-email', (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'peteromu76@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Email: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});
