/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CMoSAYMB.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../chunks/MainLayout_47Z95a1F.mjs';
import { i as isValidEmail } from '../chunks/isValidEmail_Cb7bOz6y.mjs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  dotenv.config();
  const errors = { nombre: "", apellido: "", email: "", telefono: "", mensaje: "", archivo: "" };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const nombre = data.get("nombre");
      const apellido = data.get("apellido");
      const email = data.get("email");
      const telefono = data.get("telefono");
      const mensaje = data.get("mensaje");
      const archivo = data.get("archivo");
      if (typeof nombre !== "string" || nombre.length < 1) {
        errors.nombre = "Ingresa tu nombre completo.";
      } else if (nombre.length > 50) {
        errors.nombre = "El nombre no puede exceder los 50 caracteres.";
      }
      if (typeof apellido !== "string" || apellido.length < 1) {
        errors.apellido = "Ingresa tu apellido.";
      } else if (apellido.length > 50) {
        errors.apellido = "El apellido no puede exceder los 50 caracteres.";
      }
      if (typeof email !== "string" || !isValidEmail(email)) {
        errors.email = "Email no valido.";
      } else if (email.length > 100) {
        errors.email = "El correo electr\xF3nico no puede exceder los 80 caracteres.";
      }
      if (typeof telefono !== "string" || telefono.length < 10) {
        errors.telefono = "Ingresa un n\xFAmero de tel\xE9fono valido.";
      } else if (telefono.length > 15) {
        errors.telefono = "El n\xFAmero de tel\xE9fono no puede exceder los 15 caracteres.";
      }
      if (typeof mensaje !== "string" || mensaje.length < 1) {
        errors.mensaje = "Escribe el mensaje deseado.";
      } else if (mensaje.length > 1e3) {
        errors.mensaje = "El mensaje no puede exceder los 1000 caracteres.";
      }
      if (!archivo || archivo.size === 0) {
        errors.archivo = "Por favor, adjunt\xE1 tu CV.";
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      if (!hasErrors) {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
          throw new Error("Missing email credentials in environment variables.");
        }
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        const attachmentBuffer = archivo ? await archivo.arrayBuffer() : Buffer.from("");
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: "postulaciones@multipla.com.ar",
          replyTo: email,
          subject: `Nuevo ingreso de Cv: ${nombre} ${apellido}`,
          text: `Detalle:
Nombre: ${nombre}
Apellido: ${apellido}
Email: ${email}
Tel\xE9fono: ${telefono}
Mensaje: ${mensaje}`,
          attachments: [
            {
              filename: archivo?.name || "file.txt",
              content: Buffer.from(attachmentBuffer)
            }
          ]
        };
        await transporter.sendMail(mailOptions);
        console.log("Inquiry submitted:", { nombre, apellido, email, telefono, mensaje, archivo });
      } else {
        console.error("Validation errors:", errors);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error processing inquiry:", error.message);
      }
    }
  }
  const title = "Trabaj\xE1 con nosotros";
  const subTitle = "Envianos tu CV para sumarte a nuestro equipo.";
  const formTitle = "Completa el siguiente formulario";
  const pageTitle = `Trabaja con nosotros`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "class": "astro-jljc7dey" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 astro-jljc7dey"> <div class="mx-auto w-full astro-jljc7dey"> <div class="text-center astro-jljc7dey"> <h1 class="mt-3 text-emerald-500 text-3xl font-bold tracking-tight dark:text-neutral-200 md:text-4xl md:leading-tight astro-jljc7dey"> ${title} </h1> <p class="mt-3 md:text-2xl text-pretty font-dark text-neutral-800 dark:text-neutral-200 astro-jljc7dey"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-1 lg:gap-16 astro-jljc7dey"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8 w-full astro-jljc7dey"> <h2 class="mb-8 md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 astro-jljc7dey"> ${formTitle} </h2> <div class="form-container astro-jljc7dey"> <form method="POST" class="w-full astro-jljc7dey" enctype="multipart/form-data"> <div class="form-row astro-jljc7dey"> <div class="form-column astro-jljc7dey"> <label class="form-label astro-jljc7dey" for="nombre">
Nombre:
<input class="form-input astro-jljc7dey" type="text" name="nombre" id="nombre"> </label> ${errors.nombre && renderTemplate`<p class="form-error astro-jljc7dey">${errors.nombre}</p>`} </div> <div class="form-column astro-jljc7dey"> <label class="form-label astro-jljc7dey" for="apellido">
Apellido:
<input class="form-input astro-jljc7dey" type="text" name="apellido" id="apellido"> </label> ${errors.apellido && renderTemplate`<p class="form-error astro-jljc7dey">${errors.apellido}</p>`} </div> </div> <label class="form-label astro-jljc7dey" for="email">
Correo electrónico:
<input class="form-input astro-jljc7dey" type="email" name="email" id="email" required> </label> ${errors.email && renderTemplate`<p class="form-error astro-jljc7dey">${errors.email}</p>`} <label class="form-label astro-jljc7dey" for="telefono">
Teléfono:
<input class="form-input astro-jljc7dey" type="tel" name="telefono" id="telefono" required minlength="10"> </label> ${errors.telefono && renderTemplate`<p class="form-error astro-jljc7dey">${errors.telefono}</p>`} <label class="form-label astro-jljc7dey" for="mensaje">
Mensaje:
<textarea class="form-input astro-jljc7dey" name="mensaje" id="mensaje" rows="4"></textarea> </label> ${errors.mensaje && renderTemplate`<p class="form-error astro-jljc7dey">${errors.mensaje}</p>`} <label class="form-label astro-jljc7dey" for="archivo">
Adjuntar archivo:
<input class="form-input astro-jljc7dey" type="file" name="archivo" id="archivo" required> </label> ${errors.archivo && renderTemplate`<p class="form-error astro-jljc7dey">${errors.archivo}</p>`} <button type="submit" class="form-button astro-jljc7dey">Enviar</button> </form> </div> </div> </div> </div> </section> ` })} `;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/work.astro", void 0);

const $$file = "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
