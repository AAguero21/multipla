import nodemailer from 'nodemailer';
import type { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'querystring';

export async function POST(req: IncomingMessage, res: ServerResponse) {
  try {
    const data = await new Promise<{ name: string; email: string; message: string }>((resolve, reject) => {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(e);
        }
      });
    });

    const { name, email, message } = data;

    // Configura el transporte de correo
    const transporter = nodemailer.createTransport({
      service: 'gmail', // O el servicio que uses
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configura el correo
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: 'Nuevo mensaje del formulario',
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Correo enviado exitosamente' }));
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Error al enviar el correo' }));
  }
}
