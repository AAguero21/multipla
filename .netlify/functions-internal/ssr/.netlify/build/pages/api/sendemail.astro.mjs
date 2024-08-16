import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

async function POST(req, res) {
  try {
    const data = await new Promise((resolve, reject) => {
      let body = "";
      req.on("data", (chunk) => body += chunk);
      req.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(e);
        }
      });
    });
    const { name, email, message } = data;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      // O el servicio que uses
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: "Nuevo mensaje del formulario",
      text: `Nombre: ${name}
Correo: ${email}
Mensaje: ${message}`
    };
    await transporter.sendMail(mailOptions);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Correo enviado exitosamente" }));
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Error al enviar el correo" }));
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
