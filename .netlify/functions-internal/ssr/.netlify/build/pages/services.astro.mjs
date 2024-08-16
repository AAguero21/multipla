/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_BXUWSmKB.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../chunks/MainLayout_BpsbrWSt.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_By1CcdxR.mjs';
import { $ as $$RightSection, a as $$LeftSection } from '../chunks/RightSection_CmBVKmFd.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { title, subTitle, btnExists, btnTitle, btnURL } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="relative max-w-screen-md mx-auto"> <!-- Section title --> <h1 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-esmerald-500 dark:text-esmerald-500 text-center"> ${title} </h1> <!-- Section subtitle --> <p class="mb-8 text-pretty font-dark text-neutral-600 dark:font-white dark:text-neutral-200 sm:text-xl text-left w-full md:w-[80%] lg:w-[70%] xl:w-[84%] mx-auto"> ${subTitle} </p> <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy --> ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> </section>`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/components/ui/blocks/MainSection.astro", void 0);

const relacionesLaborales = new Proxy({"src":"/_astro/relaciones_laborales_2.BTYthp3a.png","width":1080,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/images/multipla/relaciones_laborales_2.png";
							}
							
							return target[name];
						}
					});

const relacionesInstitucionales = new Proxy({"src":"/_astro/relaciones_institucionales_2.dD94gC4_.png","width":1080,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/images/multipla/relaciones_institucionales_2.png";
							}
							
							return target[name];
						}
					});

const recursosHumanos = new Proxy({"src":"/_astro/rrhh_2.DI5e8cYP.png","width":1080,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/images/multipla/rrhh_2.png";
							}
							
							return target[name];
						}
					});

const asesoramientoLegal = new Proxy({"src":"/_astro/legal.Dz1i3JrR.png","width":1080,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/images/multipla/legal.png";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      isRightSection: true,
      title: "Relaciones Laborales / Gremiales",
      subTitle: "En el departamento de Relaciones Laborales de M\xDALTIPLA, gestionamos de manera experta las relaciones con los sindicatos clave en la industria petrolera y de transporte, incluidos Petroleros Privados, Petroleros Jer\xE1rquicos, Sindicato de Camioneros, Federaci\xF3n de Camioneros de la Rep\xFAblica Argentina y UOCRA. Ofrecemos asesoramiento integral en contrataciones laborales y nos encargamos de la interpretaci\xF3n y aplicaci\xF3n de los Convenios Colectivos de Trabajo, garantizando el cumplimiento normativo y la equidad laboral. Adem\xE1s, negociamos h\xE1bilmente en conflictos individuales y colectivos, priorizando el di\xE1logo y la resoluci\xF3n pac\xEDfica. Dise\xF1amos e implementamos pol\xEDticas disciplinarias efectivas y proporcionamos orientaci\xF3n en reestructuraciones de personal y despidos laborales, buscando siempre salvaguardar los derechos e intereses tanto de la empresa como de los trabajadores. ",
      list: ["Ofrecemos asesoramiento integral en contrataciones laborales y nos encargamos de la interpretaci\xF3n y aplicaci\xF3n de los Convenios Colectivos de Trabajo"],
      single: true,
      imgOne: relacionesLaborales,
      imgOneAlt: "",
      imgClass: "large-img-right"
      //imgTwo: personWorking,
      //imgTwoAlt: "",
    },
    {
      isRightSection: false,
      title: "Relaciones Institucionales",
      subTitle: "Facilitamos el contacto con municipios para acciones comunitarias, actuamos como representantes en C\xE1maras de servicios petroleros, transporte y ambiente. Representamos ante Autoridades de Aplicaci\xF3n y gestionamos conflictos con superficiarios y ambientales. Evaluamos medios y dise\xF1amos estrategias de publicidad, promovemos la Responsabilidad Social Empresarial (RSE) y ofrecemos alianzas estrat\xE9gicas.",
      img: relacionesInstitucionales,
      imgAlt: "",
      imgClass: "large-img"
      // btnExists: true,
      // btnTitle: "Learn More",
      // btnURL: "#",
    },
    {
      isRightSection: true,
      title: "Recursos Humanos",
      subTitle: "Nuestra divisi\xF3n de Recursos Humanos se dedica a satisfacer las necesidades de personal en diversas \xE1reas operativas y administrativas. Desde la detecci\xF3n inicial hasta el dise\xF1o detallado de puestos, nos encargamos de cada paso del proceso. Realizamos b\xFAsquedas exhaustivas y selecciones precisas de personal que se ajusten a las necesidades espec\xEDficas de su empresa. Analizamos los procesos de trabajo y llevamos a cabo auditor\xEDas de seguimiento para garantizar la eficiencia y la mejora continua. Con un enfoque en el diagn\xF3stico organizacional, facilitamos la gesti\xF3n de procesos de cambio con precisi\xF3n y sensibilidad. Adem\xE1s, proporcionamos asesoramiento experto en pol\xEDticas de beneficios y desarrollo organizacional, y dise\xF1amos programas de capacitaci\xF3n adaptados a sus objetivos. Nuestro compromiso es ofrecer soluciones integrales que impulsen el \xE9xito de su empresa en un contexto din\xE1mico.",
      single: true,
      imgOne: recursosHumanos,
      imgOneAlt: "",
      imgClass: "large-img-right"
      //imgTwo: aerialView,
      //imgTwoAlt: "",
    },
    {
      isRightSection: false,
      title: "Asesoramiento Legal",
      subTitle: `Ofrecemos un s\xF3lido respaldo en asesoramiento jur\xEDdico y representaci\xF3n tanto en \xE1mbitos administrativos como jurisdiccionales. Nos especializamos en brindar asistencia y representaci\xF3n experta en procesos judiciales, asegurando la defensa de sus intereses con eficacia y profesionalismo. Adem\xE1s, gestionamos y manejamos habilitaciones ante organismos oficiales en las provincias de R\xEDo Negro, Neuqu\xE9n y La Pampa, facilitando el cumplimiento normativo y agilizando los tr\xE1mites necesarios para su empresa. Nuestro compromiso es brindarle tranquilidad y seguridad legal en todas sus operaciones.`,
      img: asesoramientoLegal,
      imgAlt: "",
      imgClass: "small-img"
      //btnExists: true,
      //btnTitle: "Contatanos para saber mas",
      //btnURL: "/contact"
    }
  ];
  const pageTitle = `Servicios`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/services",
    "url": "https://screwfast.uk/services",
    "name": "Expert Consultation Services | ScrewFast",
    "description": "Uniting expertise with your vision, ScrewFast provides exceptional service and comprehensive solutions in the hardware and construction industry, from consultation to project completion.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "ScrewFast",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Soluciones Integrales para tu Empresa", "subTitle": "En Multipla, ofrecemos una amplia gama de servicios especializados en recursos humanos, legal y relaciones laborales. Desde asesoramiento legal hasta gesti\xF3n de conflictos laborales, estamos aqu\xED para impulsar el \xE9xito y la tranquilidad de tu empresa.", "btnExists": false, "btnTitle": "Contatanos para saber mas", "btnURL": "/contact" })} ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL, "imgClass": article.imgClass })}`;
  })}${maybeRenderHead()}<div class="grid place-items-center mb-16"> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Cont\xE1ctanos para saber m\xE1s", "url": "/contact" })} </div> ` })}`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/services.astro", void 0);

const $$file = "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
