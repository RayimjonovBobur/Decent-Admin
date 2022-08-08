import React from "react";
import { Base, BolgaIcon, DownIcon, ProductIcon } from "../../assets/images/Iocns";

function IconType({ icon }) {
  switch (icon) {
    case "Base":
      return <Base />;
    case "ProductIcon":
      return <ProductIcon />;
    case "DownIcon":
      return <DownIcon />;
    case "BolgaIcon":
      return <BolgaIcon />;
    default:
      return null;
  }
}

export default IconType;
