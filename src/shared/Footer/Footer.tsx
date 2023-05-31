import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Inversiones mhilux E.I.R.L.",
    menus: [
      { href: "#", label: "Copyright © Tingo Maria Expedition 2022" },
      { href: "#", label: "RUC: © 20609493730" },
      { href: "#", label: "ENTEL: © 934323453" },
      { href: "#", label: "Ubi: © Jr leoncio prado 390, bella durmiente Tingo Maria" },
      { href: "#", label: "." },
    ],
  },
  {
    id: "1",
    title: "Datos",
    menus: [
      { href: "#", label: "WhatsApp: 934323453" },
      { href: "#", label: "E-mail: info@tingomariaexpedition.com" },
    ],
  },
  {
    id: "2",
    title: "Constancia",
    menus: [
      { href: "#", label: "Constancia TINGO MARIA EXPEDITION" },
      { href: "http://www.tingomariaexpedition.com/documentos/esnna.pdf", label: "Sanciones vinculadas al ESNNA" },
    ],
  },
  {
    id: "2",
    title: "Politicas y Terminos",
    menus: [
      {href: "https://drive.google.com/file/d/1k9tZLjZwbFa4CSr_0N_5Amzd1XX4lkLP/view?usp=share_link", label: "Condiciones minimas para la prestacion del servicio (ARTICULO 22 DEL REGLAMENTO)" },
    ],
  },
 
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-24 lg:py-32 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
