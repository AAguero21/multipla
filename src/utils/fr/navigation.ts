
const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Quienes somos", url: "/fr/about" },
  { name: "Services", url: "/fr/services" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/fr/products" },
      { name: "Services de Construction", url: "/fr/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  instagram: "https://www.instagram.com/multipla_consultora?igsh=MWI5dWk1cHBpNThpbQ==",
  whatsapp: "",
  linkedln: "https://www.linkedin.com/company/consultoram%C3%BAltipla/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};