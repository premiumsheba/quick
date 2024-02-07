import * as Yup from "yup";

export const sampleSchema = Yup.object({
  title: Yup.string()
    .min(3, "At least 3 characters required")
    .max(20, "At most 20 characters long")
    .required("Required"),
});
