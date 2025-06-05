import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.SMTP_ENDPOINT,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendMail(to: string, body: string) {
  await transport.sendMail({
    from: "Self Employed",
    sender: "kumarvishwanshhero@gmail.com",
    to,
    subject: "Hello from Fluient",
    text: body,
  });
}
