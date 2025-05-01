const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], // Add your frontend URLs
    methods: ['GET', 'POST'],
    credentials: true,
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error verifying transporter:', error)
    process.exit(1) // Exit if email config is invalid
  } else {
    console.log('Server is ready to send emails')
  }
})

// Handle sending email
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        status: 'fail',
        message: 'All fields are required',
      })
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `${name} - ${subject}`,
      text: `You received a message from: \n\nName: ${name} \nEmail: ${email} \n\nMessage: ${message}`,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent:', info.response)

    res.status(200).json({
      status: 'success',
      message: 'Email sent successfully',
    })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({
      status: 'fail',
      message: 'Failed to send email',
      error: error.message,
    })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
