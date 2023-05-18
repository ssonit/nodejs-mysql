import { notAuth } from "./handleErrors";
import { roles } from "../utils/constants";

export const isAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== roles.ADMIN) return notAuth("Require role admin", res);
  next();
};
