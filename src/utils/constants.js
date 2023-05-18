import dotenv from "dotenv";

dotenv.config();

export const jwtSecret = process.env.JWT_SECRET;

export const roles = {
  ADMIN: "R1",
  USER: "R2",
};
