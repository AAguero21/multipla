/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CMoSAYMB.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../chunks/MainLayout_47Z95a1F.mjs';
import { $ as $$RightSection, a as $$LeftSection } from '../chunks/RightSection_C8OEkHTw.mjs';
export { renderers } from '../renderers.mjs';

const workcompany = new Proxy({"src":"/_astro/work_in_company.DBRw6VlX.png","width":1080,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/images/multipla/work_in_company.png";
							}
							
							return target[name];
						}
					});

const experience = new Proxy({"src":"/_astro/Conocenos.Dds6p4kB.png","width":1080,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/images/multipla/Conocenos.png";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Quienes Somos`;
  const articles = [
    {
      isRightSection: true,
      title: "OBJETIVO",
      subTitle: "Nuestro objetivo es acompa\xF1ar en el desarrollo de negocios y proyectos a empresarios y emprendedores, proporcionando asesoramiento y asistencia t\xE9cnica especializada para alcanzar sus metas y objetivos econ\xF3micos, sociales y personales.",
      single: false,
      imgOne: workcompany,
      imgOneAlt: "Work in Company.",
      imgTwo: experience,
      imgTwoAlt: "Experiencia en el sector hidrocarburifero"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/about",
    "url": "https://screwfast.uk/about",
    "name": "Quienes Somos",
    "description": "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "ScrewFast",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
Conocenos
</h2> <p class="mb-4  text-pretty font-dark text-neutral-800 dark:font-white dark:text-neutral-200 sm:text-lg">
Somos un equipo de profesionales, con más de <strong class="text-emerald-500">20 años de experiencia</strong> en el sector hidrocarburífero de las cuencas neuquina, cuyana y austral. Asesoramos a empresas de servicios petroleros en estrategias de desarrollo, fomentando su competitividad y crecimiento. <strong class="text-emerald-500">Facilitamos vínculos entre empresas del sector para proyectos conjuntos, formando equipos multidisciplinarios</strong>. Nos destacamos como un <strong class="text-emerald-500">equipo externo que trabaja in company, optimizando costos laborales, mejorando la performance competitiva y fortaleciendo el liderazgo organizacional</strong>.</p> ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })} </section> ` })}`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/about.astro", void 0);

const $$file = "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
