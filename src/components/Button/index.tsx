import React from "react";

type ButtonPrimaryProps = {
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  label: string;
  icon?: string;
  classes?: string;
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  href = "#",
  target = "_self",
  label,
  icon,
  classes = "",
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary w-fit" + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary" + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

export default ButtonPrimary;
