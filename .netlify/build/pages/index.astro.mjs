/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment, f as renderSlot } from '../chunks/astro/server_BXUWSmKB.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_BpsbrWSt.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_C0bpkAWi.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_By1CcdxR.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars,
    starCount,
    rating,
    reviews,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8 min-h-screen astro-to5pn6rs"> <div class="grid gap-4 md:grid-cols-3 md:items-center astro-to5pn6rs"> <!-- Cambiado de 2 a 3 columnas --> <!-- Title and description --> <div class="md:col-span-2 md:pr-8 flex flex-col justify-center astro-to5pn6rs"> <!-- Ocupa 2 de las 3 columnas --> <h1 class="text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight astro-to5pn6rs"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-2 text-lg leading-snug text-neutral-700 dark:text-neutral-400 astro-to5pn6rs"> ${subTitle} </p>`} <div class="mt-7 flex flex-wrap gap-3 astro-to5pn6rs"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL, "class": "astro-to5pn6rs" })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL, "class": "astro-to5pn6rs" })}`} </div> </div> <!-- Image --> <div class="flex justify-center md:justify-end mt-8 md:mt-0 astro-to5pn6rs"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "responsive-image astro-to5pn6rs", "draggable": "false", "loading": "eager", "format": "png" })}`} </div> </div> </section>  <!-- Image 
<style>
  .image-container {
    display: flex;
    justify-content: center; 
    align-items: center;     
    width: 100%; /* Cambié de 500 a 100% para que ocupe todo el ancho disponible */
    height: auto;            
    padding: 1rem;          
  }

  .responsive-image {
    max-width: 100%;         
    height: auto;           
    max-height: 400px;       
  }

  /* Pantallas grandes (mayores a 1080px) */
  @media (min-width: 1081px) {
    .responsive-image {
      max-height: 500px; 
      max-width: 100%;
    }
  }

  /* Pantallas medianas */
  @media (max-width: 1024px) {
    .responsive-image {
      max-height: 400px;
      justify-content: center;    
    }
  }

  @media (max-width: 768px) {
    .responsive-image {
      max-height: 100%;
    }
  }

  @media (min-width: 769px) {
    .responsive-image {
      max-height: 100%;
      width: auto;
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .responsive-image {
      max-height: 90%;
      width: auto;
      max-width: 95%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    .image-container {
      height: 70vh;         
      padding: 0.25rem;     
    }
    .responsive-image {
      max-height: 70%;     
      max-width: 90%;      
    }
  }

  @media (min-width: 415px) and (max-width: 768px) {
    .responsive-image {
      max-height: 90%;
      width: auto;
      max-width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }

  @media (min-width: 376px) and (max-width: 414px) {
    .responsive-image {
      max-height: 80%;
      width: auto;
      max-width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }

  @media (max-width: 375px) {
    .responsive-image {
      max-height: 80%;
      width: auto;
      max-width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }

  @media (max-width: 360px) {
    .responsive-image {
      max-height: 60%;
      width: auto;
      max-width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }

  @media (min-width: 361px) and (max-width: 400px) {
    .responsive-image {
      max-height: 90%;
      width: auto;
      max-width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }

  @media (min-width: 401px) and (max-width: 480px) {
    .responsive-image {
      max-height: 80%;
      width: auto;
      max-width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }
</style>
-->`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/components/sections/landing/HeroSection.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$ClientsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientsSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Title and description --> <div class="mx-auto mb-6 w-full space-y-1 text-center overflow-x-auto"> <h2 class="text-balance text-2xl font-bold leading-tight text-esmerald-500 dark:text-esmerald-500 sm:text-3xl md:text-6xl" ;> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty font-dark text-neutral-800 leading-tight dark:font-white dark:text-neutral-200"> ${subTitle} </p>`} </div> <div class="flex flex-wrap items-center justify-center gap-y-2 sm:gap-x-12 sm:gap-y-0 lg:gap-x-24 max-w-full overflow-hidden"> <img src="src/images/multipla/grupo horizonte.png" alt="Logo 1" class="h-20 w-auto max-w-full object-contain"> <img src="src/images/multipla/logo ferrere.png" alt="Logo 2" class="h-20 w-auto max-w-full object-contain"> <img src="src/images/multipla/ribeiro.png" alt="Logo 3" class="h-24 w-auto max-w-full object-contain"> <img src="src/images/multipla/marca_making_02.png" alt="Logo 4" class="h-16 w-auto max-w-full object-contain"> <img src="src/images/multipla/petrogas.png" alt="Logo 5" class="h-20 w-auto max-w-full object-contain"> <img src="src/images/multipla/galileo.png" alt="Logo 6" class="h-20 w-auto max-w-full object-contain"> <img src="src/images/multipla/Rio limay recursos web_edited.png" alt="Logo 7" class="h-14 w-auto max-w-full object-contain"> <img src="src/images/multipla/ecokit.png" alt="Logo 8" class="h-24 w-auto max-w-full object-contain"> </div> <div class="mt-7 grid w-full gap-3 sm:inline-flex justify-center"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div> </section>`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/components/sections/landing/ClientsSection.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$IconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IconBlock;
  const { heading, content } = Astro2.props;
  const headingClasses = "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
  const contentClasses = "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
  return renderTemplate`<!-- The root container that arranges your slot and the heading/content -->${maybeRenderHead()}<div class="flex gap-x-5"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3${addAttribute(headingClasses, "class")}> ${heading} </h3> <!-- Content text of the section --> <p${addAttribute(contentClasses, "class")}>${content}</p> <div> ${content === "Nuestra divisi\xF3n de Recursos Humanos se dedica a satisfacer las necesidades de personal en diversas \xE1reas operativas y administrativas." && renderTemplate`<div class="mt-7 grid w-full gap-3 sm:inline-flex justify-left"> <a href="/work?access=true" class="text-blue-500 underline hover:text-emerald-400 transition-colors font-medium">
¡Trabaja con nosotros!
</a> </div>`} </div> </div> </div>`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/components/ui/blocks/IconBlock.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$FeaturesGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle, src, alt, features, primaryBtn, primaryBtnURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Block to display the feature image --> <!-- <div class="relative mb-6 overflow-hidden md:mb-8">
    {
      src && alt && (
        <Image
          src={src}
          alt={alt}
          class="h-full w-full object-cover object-center"
          draggable={"false"}
          format={"avif"}
          loading={"eager"}
          
        />
      )
    }
  </div> --> <div class="flex flex-col items-center"></div> <!-- Displaying the main content consisting of title, subtitle, and several \`IconBlock\` components --> <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12"> <!-- Block for title and subtitle --> <div class="lg:col-span-1 "> <!-- Rendering title --> <h2 class="text-balance text-2xl font-extrabold text-esmerald-500 dark:text-esmerald-500 md:text-5xl"> ${title} </h2> <!-- Rendering subtitle --> ${subTitle && renderTemplate`<p class="mb-4 max-w-prose text-pretty font-dark text-neutral-800 dark:font-white dark:text-neutral-200 sm:text-lg"> ${subTitle} </p>`} <div class="mt-7 grid w-full gap-3 sm:inline-flex"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} </div> </div> <!-- Block to display the IconBlock components --> <div class="lg:col-span-2"> <div class="grid gap-8 sm:grid-cols-2 md:gap-12"> <!-- Injecting IconBlock components with different properties --> ${features && features.map((feature) => renderTemplate`${renderComponent($$result, "IconBlock", $$IconBlock, { "heading": feature.heading, "content": feature.content }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.png })} ` })}`)} </div> </div> </div> <!-- sin el relleno, texto ver, sin borde, boton de tipo link(solo texto) --> </section>`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/components/sections/features/FeaturesGeneral.astro", void 0);

const multiplaLogo = new Proxy({"src":"/_astro/Logo_Multipla_solo_negro.BpJQgZYp.png","width":1080,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/images/multipla/Logo_Multipla_solo_negro.png";
							}
							
							return target[name];
						}
					});

const features = [
	{
		heading: "Relaciones Laborales",
		content: "Gestionamos de manera experta las relaciones con los sindicatos clave en la industria petrolera y de transporte.",
		png: "relacionesLaborales"
	},
	{
		heading: "Relaciones Institucionales",
		content: "Colaboramos estrechamente con municipios para acciones comunitarias significativas.",
		png: "relacionesInstitucionales"
	},
	{
		heading: "Recursos Humanos",
		content: "Nuestra división de Recursos Humanos se dedica a satisfacer las necesidades de personal en diversas áreas operativas y administrativas.",
		png: "recurosHumanos"
	},
	{
		heading: "Asesoramiento Legal",
		content: "En el departamento legal de Multipla, ofrecemos un sólido respaldo en asesoramiento jurídico y representación tanto en ámbitos administrativos como jurisdiccionales.",
		png: "asesoramientoLegal"
	}
];

const featureImage = new Proxy({"src":"/_astro/features-image.BEGIe8fA.avif","width":4375,"height":2369,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/images/features-image.avif";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Acompa\xF1amos a empresarios y emprendedores en el <span class="text-emerald-500 dark:text-emerald-400">desarrollo de sus negocios</span>.`, "primaryBtn": "Nuestros servicios", "primaryBtnURL": "/services", "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `From Over <span class="font-bold">12.8k</span> Reviews`, "src": multiplaLogo, "alt": "M\xFAltipla" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Nuestros clientes", "subTitle": "Fortalecemos el crecimiento de nuestros clientes con soluciones personalizadas.", "primaryBtn": "Cont\xE1ctanos", "primaryBtnURL": "/contact" })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "Nuestras soluciones", "subTitle": "Te acompa\xF1amos con nuestro equipo de profesionales.", "primaryBtn": "Nuestros servicios", "primaryBtnURL": "/services", "src": featureImage, "alt": "", "features": features })} ` })}`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/index.astro", void 0);

const $$file = "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
