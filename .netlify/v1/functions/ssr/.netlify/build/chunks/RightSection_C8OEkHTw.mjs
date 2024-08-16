import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_CMoSAYMB.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CSXZogZu.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_Cicr0mEi.mjs';

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$LeftSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt, imgClass } = Astro2.props;
  return renderTemplate`<!-- The root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full"> <!-- The Image component which renders the image --> ${renderComponent($$result, "Image", $$Image, { "class": `w-full rounded-xl hidden md:block ${imgClass || ""}`, "src": img, "alt": imgAlt, "draggable": "false", "format": "png" })} <!-- The container for title, subtitle, and optional CTA button --> <div class="mt-4 md:mt-0"> <!-- The title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- The subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-dark text-neutral-800 dark:font-white dark:text-neutral-200 sm:text-lg"> ${subTitle} </p> <!-- Conditionally render the Primary CTA button if btnExists is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> ${renderComponent($$result, "Image", $$Image, { "class": `w-full rounded-xl md:hidden ${imgClass || ""}`, "src": img, "alt": imgAlt, "draggable": "false", "format": "png" })} </section>`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/components/ui/blocks/LeftSection.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    list,
    btnExists,
    btnTitle,
    btnURL,
    single,
    imgOne,
    imgOneAlt,
    imgTwo,
    imgTwoAlt
  } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <!-- Title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-dark text-neutral-800 dark:font-white dark:text-neutral-200 sm:text-lg"> ${subTitle} </p> <ul> ${list && list.map((item, i) => renderTemplate`<li>${item}</li>`)} </ul> <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> <!-- Conditionally render one or two images based on 'single' property --> ${single ? renderTemplate`<div class="mt-8"> <!-- Single image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-lg large-img-right", "src": imgOne, "alt": imgOneAlt, "format": "png" })} </div>` : renderTemplate`<div class="mt-8 grid grid-cols-2 gap-4"> <!-- First image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": imgOne, "alt": imgOneAlt, "draggable": "false", "format": "png" })} <!-- Second image in a two-image layout --> ${imgTwo && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mt-4 w-full rounded-xl lg:mt-10", "src": imgTwo, "alt": imgTwoAlt, "draggable": "false", "format": "png" })}`} </div>`} </section>`;
}, "C:/Users/Alex_/Desktop/Repos/MULTIPLA/multipla/src/components/ui/blocks/RightSection.astro", void 0);

export { $$RightSection as $, $$LeftSection as a };
