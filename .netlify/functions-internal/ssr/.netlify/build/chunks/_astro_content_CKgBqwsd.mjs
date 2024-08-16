import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_CARPM0TZ.mjs';
import { a as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_BXUWSmKB.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://screwfast.uk", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_C6UbRgix.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_qMvJJQWl.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_C6Ro2prC.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_SEzGzWsP.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_BzKCgCOG.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DJ3q8fYA.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_BN48F-wq.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_DJFtmC58.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_w2eLIemS.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BRwxdNgk.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_D3NTOjgi.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_DEASUcun.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_BFQEk8bO.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BVt-WBQ3.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_DqbXFdwp.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_BiWD0nPn.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_CY2visD1.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BFAZNxl0.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_CpAjr8F5.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_epF-HNqe.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BRbu-5uV.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_CLCleqfB.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_B0u1Fh7g.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_eE5GCLFN.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_BUxcnB4A.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_y9RkoOan.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_DvMQDctM.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CbvlULPl.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_yIhuXJMH.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_CHSsZISj.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_BVCUX579.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_DmmKweaK.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_9vTQH11P.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_BG7F82-1.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_Sl-pECRE.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_TGeAXil_.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DCbaCS2N.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_DWnmig7V.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro__BBuUv3b.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_CHIW7ZA2.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_yPgGXPfA.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_DD7fLuer.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_Bw1yyC8N.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_uNVfFBtp.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CDTo4OHA.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_BkZxDDCi.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_a0fI1kMu.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_D2k7FjIe.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D0pUm2-Z.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_BW7CyvVu.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_XVQ8MCLh.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Dp0_9_eL.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_Bd0txisx.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_CYtYDbbZ.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_B8QQtFQ3.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_BOMzyABz.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_DYgViSRZ.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_CJXeeAqz.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Bqjc8BA5.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_DPTa-MGH.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_Cr4tnXOb.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_d48jswko.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
