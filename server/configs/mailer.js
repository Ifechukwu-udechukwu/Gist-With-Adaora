import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true", 
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS, 
  },
});

export const sendEmail = async ({ to, bcc, subject, html }) => {
  return transporter.sendMail({
    from: `"Adaora's Blog" <${process.env.SMTP_USER}>`,
    to,         
    subject,
    html,
  });
};
