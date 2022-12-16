import React, { forwardRef } from "react";

type button = {
  children: React.ReactNode;
  reverse?: boolean;
  classname?: any;
};

const GradientButton = forwardRef<HTMLButtonElement, button>(
  ({ children, reverse, classname, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`${classname} min-w-[60px] min-h-[35px] bg-gradient-to-r ${
          reverse
            ? "from-gradient2 to-gradient1"
            : "from-gradient1 to-gradient2"
        }`}
      >
        {children}
      </button>
    );
  }
);

export default GradientButton;
