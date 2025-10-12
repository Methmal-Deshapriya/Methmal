import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaMediumM,
} from "react-icons/fa";

export const items = [
  {
    icon: <FaGithub size={18} />,
    label: "Github",
    onClick: () =>
      window.open("https://github.com/Methmal-Deshapriya", "_blank"),
  },

  {
    icon: <FaWhatsapp size={18} />,
    label: "Whatsapp",
    onClick: () => window.open("https://wa.me/94757451258", "_blank"),
  },
  {
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
    onClick: () =>
      window.open("https://www.linkedin.com/in/methmal-deshapriya", "_blank"),
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    onClick: () =>
      window.open(
        "https://www.instagram.com/__methmal__?igsh=eXdweHE3cmdlbzI5",
        "_blank"
      ),
  },
  {
    icon: <FaMediumM size={18} />,
    label: "Medium",
    onClick: () =>
      window.open("https://medium.com/@methmaldeshapriya2002", "_blank"),
  },
];
