const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// POST endpoint for email form
app.post('/send-email', async (req, res) => {
  try {
    const { email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'peteromu76@gmail.com',
        pass: 'Blard140##',
      },
    });

    // Set up email data
    const mailOptions = {
      from: 'peteromu76@gmail.com',
      to: 'peteromu76@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Email: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
