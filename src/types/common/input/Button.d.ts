import { ButtonProps } from "@mui/material";

export default interface CustomButtonProps extends ButtonProps {
  p?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  type?: "text" | "contained" | "outlined";
}
