import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[16px]",
};
const variants = {
  fill: {
    light_blue_A700_33: "bg-light_blue-A700_33 text-indigo-900",
    red_A700_19: "bg-red-A700_19 text-red-A700",
    gray_400_19: "bg-gray-400_19 text-gray-900",
    blue_400: "bg-blue-400",
    red_400_19: "bg-red-400_19 text-red-400",
    white_A700: "bg-white-A700 shadow-sm",
    white_A700_7f: "bg-white-A700_7f text-red-400",
    gray_900: "bg-gray-900 text-white-A700",
    gray_300: "bg-gray-300",
    gray_400_19_01: "bg-gray-400_19_01 text-gray-900",
    gray_200: "bg-gray-200 text-black-900",
    blue_gray_100_01: "bg-blue_gray-100_01",
    red_400: "bg-red-400 text-white-A700",
  },
};
const sizes = {
  "2xl": "h-[60px] px-[35px] text-[25px]",
  "7xl": "h-[80px] px-[35px] text-xl",
  md: "h-[50px] px-[34px] text-sm",
  lg: "h-[50px]",
  xs: "h-[35px] px-3.5 text-sm",
  xl: "h-[54px] px-[35px] text-base",
  "5xl": "h-[74px] px-[35px] text-xl",
  "3xl": "h-[60px] px-[15px]",
  sm: "h-[35px] px-[7px]",
};

const Button = ({
  children,
  className,
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer py-4 bg-red-400 rounded-md text-white font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 relative
      [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl]
       ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps} 
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["2xl", "7xl", "md", "lg", "xs", "xl", "5xl", "3xl", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "light_blue_A700_33",
    "red_A700_19",
    "gray_400_19",
    "blue_400",
    "red_400_19",
    "white_A700",
    "white_A700_7f",
    "gray_900",
    "gray_300",
    "gray_400_19_01",
    "gray_200",
    "blue_gray_100_01",
    "red_400",
  ]),
};

export { Button };
