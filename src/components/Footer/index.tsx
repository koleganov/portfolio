import React from "react";
import ButtonPrimary from "../Button";

import logo from "../../assets/images/logo.svg";

const sitemap = [
  {
    label: "Главная",
    href: "#home",
  },
  {
    label: "Обо мне",
    href: "#about",
  },
  {
    label: "Работы",
    href: "#work",
  },
  {
    label: "Отзывы",
    href: "#reviews",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/koleganov",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/koleganov_k",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/codewithsadee",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Давайте работать вместе!
            </h2>

            <ButtonPrimary
              href="mailto:taggz1030@gmail.com"
              label="Закать проект"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Навигация</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Соц. сети</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      target="_blank"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img src={logo} alt="Logo" className="" width={40} height={40} />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">koleganov</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
