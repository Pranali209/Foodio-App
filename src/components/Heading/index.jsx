import React from "react";

const sizes = {
  "3xl": "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  "2xl": "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  "5xl": "text-[70px] font-bold md:text-5xl",
  xl: "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  "4xl": "text-[52px] font-bold md:text-[44px] sm:text-[38px]",
  "6xl": "text-[80px] font-bold md:text-5xl",
  s: "text-xl font-semibold",
  md: "text-2xl font-semibold md:text-[22px]",
  xs: "text-lg font-semibold",
  lg: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
