import React from "react";

const sizeClasses = {
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular40: "font-inter font-normal",
  txtConsolasBold50: "font-bold font-consolas",
  txtInterMedium15WhiteA700: "font-inter font-medium",
  txtInterSemiBold45: "font-inter font-semibold",
  txtInterMedium22: "font-inter font-medium",
  txtInterBold17: "font-bold font-inter",
  txtRobotoCondensedRegular12: "font-normal font-robotocondensed",
  txtInterMedium17: "font-inter font-medium",
  txtInterMedium25: "font-inter font-medium",
  txtInterMedium15: "font-inter font-medium",
  txtInterExtraBold17: "font-extrabold font-inter",
  txtInterSemiBold50: "font-inter font-semibold",
  txtInterSemiBold60: "font-inter font-semibold",
  txtInterBold20: "font-bold font-inter",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium20Gray90001: "font-inter font-medium",
  txtInterExtraBold20: "font-extrabold font-inter",
  txtInterExtraBold70: "font-extrabold font-inter",
  txtInterMedium17Gray90001: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
