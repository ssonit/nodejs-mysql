import joi from "joi";

export const email = joi
  .string()
  .email({
    minDomainSegments: 2,
    tlds: { allow: ["com"] },
  })
  .required();

export const password = joi.string().min(6).max(30).required();

export const schemaAuth = joi.object({ email, password });
