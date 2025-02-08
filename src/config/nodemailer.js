import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transpoter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: email,
        pass: pass,
    }
});

export const mailOptions = {
    from: email,
    to: email
}

export const sendTranspoter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: true,
    auth: {
        user: email,
        pass: pass,
    }
});

export const sendMailOptions = {
    from: "info@zaraat.com",
}