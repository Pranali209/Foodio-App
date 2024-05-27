import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  s: "text-sm font-normal",
  "2xl": "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  xl: "text-xl font-normal",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-300_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
