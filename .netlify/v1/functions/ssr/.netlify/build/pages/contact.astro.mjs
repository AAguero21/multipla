/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_CMoSAYMB.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../chunks/MainLayout_47Z95a1F.mjs';
import 'clsx';
import { i as isValidEmail } from '../chunks/isValidEmail_Cb7bOz6y.mjs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$ContactSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactSection;
  dotenv.config();
  const errors = { nombre: "", apellido: "", email: "", telefono: "", consulta: "" };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const nombre = data.get("nombre");
      const apellido = data.get("apellido");
      const email = data.get("email");
      const telefono = data.get("telefono");
      const consulta = data.get("consulta");
      if (typeof nombre !== "string" || nombre.length < 1) {
        errors.nombre = "Please enter your first name.";
      } else if (nombre.length > 50) {
        errors.nombre = "El nombre no puede exceder los 50 caracteres.";
      }
      if (typeof apellido !== "string" || apellido.length < 1) {
        errors.apellido = "Please enter your last name.";
      } else if (apellido.length > 50) {
        errors.apellido = "El apellido no puede exceder los 50 caracteres.";
      }
      if (typeof email !== "string" || !isValidEmail(email)) {
        errors.email = "Email is not valid.";
      } else if (email.length > 100) {
        errors.email = "El correo electr\xF3nico no puede exceder los 80 caracteres.";
      }
      if (typeof telefono !== "string" || telefono.length < 10) {
        errors.telefono = "Phone number must be at least 10 characters.";
      } else if (telefono.length > 15) {
        errors.telefono = "El n\xFAmero de tel\xE9fono no puede exceder los 15 caracteres.";
      }
      if (typeof consulta !== "string" || consulta.length < 1) {
        errors.consulta = "Please enter your inquiry.";
      } else if (consulta.length > 1e3) {
        errors.consulta = "la consulta no puede exceder los 1000 caracteres.";
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
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: "postulaciones@multipla.com.ar",
          replyTo: email,
          subject: `Nueva consulta recibida de: ${nombre} ${apellido}`,
          text: `Detalle consulta web:
Nombre: ${nombre}
Apellido: ${apellido}
Email: ${email}
Tel\xE9fono: ${telefono}
Consulta: ${consulta}`
        };
        await transporter.sendMail(mailOptions);
        console.log("Inquiry submitted:", { nombre, apellido, email, telefono, consulta });
      } else {
        console.error("Validation errors:", errors);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error processing inquiry:", error.message);
      }
    }
  }
  const title = "Trabaja con nosotros";
  const subTitle = "Forma parte de un equipo innovador y din\xE1mico.";
  const formTitle = "Completa el siguiente formulario";
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14 astro-joh4gybl"> <div class="mx-auto w-full astro-joh4gybl"> <div class="text-center astro-joh4gybl"> <h1 class="mt-3 text-emerald-400 text-3xl font-bold tracking-tight dark:text-neutral-200 md:text-4xl md:leading-tight astro-joh4gybl"> ${title} </h1> <p class="mt-3 md:text-2xl text-pretty font-dark text-neutral-800 dark:text-neutral-200 astro-joh4gybl"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-1 lg:gap-16 astro-joh4gybl"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8 w-full astro-joh4gybl"> <h2 class="mb-8 md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 astro-joh4gybl"> ${formTitle} </h2> <div class="form-container astro-joh4gybl"> <form method="POST" class="w-full astro-joh4gybl"> <div class="form-row astro-joh4gybl"> <div class="form-column astro-joh4gybl"> <label class="form-label astro-joh4gybl" for="nombre">
Nombre:
<input class="form-input astro-joh4gybl" type="text" name="nombre" id="nombre"> </label> ${errors.nombre && renderTemplate`<p class="form-error astro-joh4gybl">${errors.nombre}</p>`} </div> <div class="form-column astro-joh4gybl"> <label class="form-label astro-joh4gybl" for="apellido">
Apellido:
<input class="form-input astro-joh4gybl" type="text" name="apellido" id="apellido"> </label> ${errors.apellido && renderTemplate`<p class="form-error astro-joh4gybl">${errors.apellido}</p>`} </div> </div> <label class="form-label astro-joh4gybl" for="email">
Correo electrónico:
<input class="form-input astro-joh4gybl" type="email" name="email" id="email" required> </label> ${errors.email && renderTemplate`<p class="form-error astro-joh4gybl">${errors.email}</p>`} <label class="form-label astro-joh4gybl" for="telefono">
Teléfono:
<input class="form-input astro-joh4gybl" type="tel" name="telefono" id="telefono" required minlength="10"> </label> ${errors.telefono && renderTemplate`<p class="form-error astro-joh4gybl">${errors.telefono}</p>`} <label class="form-label astro-joh4gybl" for="consulta">
Consulta:
<textarea class="form-input astro-joh4gybl" name="consulta" id="consulta" rows="4" required></textarea> </label> ${errors.consulta && renderTemplate`<p class="form-error astro-joh4gybl">${errors.consulta}</p>`} <button type="submit" class="form-button astro-joh4gybl">Enviar</button> </form> </div> </div> </div> </div> </section> `;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/components/sections/ContactSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Contacto`;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/contact",
    "url": "https://screwfast.uk/contact",
    "name": "Contact Us | ScrewFast",
    "description": "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "ScrewFast",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "es-ES"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
