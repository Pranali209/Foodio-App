import React  , {useId}from "react";
import PropTypes from "prop-types";
import { ID } from "appwrite";

const variants = {
  fill: {
    gray_50_01: "bg-gray-50_01 text-light_blue-800",
  },
};
const sizes = {
  md: "h-[60px] px-[35px] text-xl",
};

const Input = React.forwardRef(
  ({
      
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,

      variant = "fill",
      size = "md",
      color = "",
      ...restProps
    }, ref ) => {
    // const handleChange = (e) => {
    //   if (onChange) onChange(e?.target?.value);
    // };
     const  Id = useId()

    return (
      <>
        <div
          className={`flex items-center justify-center text-light_blue-800 text-xl  flex-grow rounded-[15px]  ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} id={Id} placeholder={placeholder} {...restProps}  className= {`${className}`}/>
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,

  size: PropTypes.oneOf(["md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50_01"]),
};

export { Input };
