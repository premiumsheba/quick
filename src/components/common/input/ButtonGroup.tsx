import React from "react";
import CustomButtonGroupPropType from "@/types/common/input/ButtonGroup";
import { ButtonGroup as MUIButtonGroup } from "@mui/material";

export const ButtonGroup: React.FC<CustomButtonGroupPropType> = ({
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
  s,
  cl,
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
    ...style,
  };

  return (
    <MUIButtonGroup
      style={buttonStyle}
      variant={type}
      size={s}
      color={cl}
      {...rest}
    >
      {rest.children}
    </MUIButtonGroup>
  );
};
