import { ButtonProps } from "@mui/material";
export default interface CustomButtonPropsType extends ButtonProps {
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
  s?: "small" | "medium" | "large";
  cl?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  type?: "text" | "contained" | "outlined";
}
