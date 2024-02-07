import React from "react";
import { Button as MUIButton } from "@mui/material";
import CustomButtonProps from "@/types/common/input/Button";

const Button: React.FC<CustomButtonProps> = ({
  style,
  p,
  pt,
  pb,
  pr,
  pl,
  m,
  mt,
  mb,
  ml,
  mr,
  type,
  ...rest
}) => {
  const buttonStyle: React.CSSProperties = {
    padding: p,
    paddingTop: pt,
    paddingBottom: pb,
    paddingRight: pr,
    paddingLeft: pl,
    margin: m,
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
    ...style, // if needed in future
  };

  return (
    <MUIButton style={buttonStyle} variant={type} {...rest}>
      {rest.children}
    </MUIButton>
  );
};

export default Button;
