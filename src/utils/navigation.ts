// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Quienes somos", url: "/about" },
  { name: "Servicios", url: "/services" },
  // { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },

];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  instagram: "https://www.instagram.com/multipla_consultora?igsh=MWI5dWk1cHBpNThpbQ==",
  whatsapp: "https://w.app/multipla",
  linkedln: "https://www.linkedin.com/company/consultoram%C3%BAltipla/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};