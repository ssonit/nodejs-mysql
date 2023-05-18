import db from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../utils/constants";

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(8);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const generateToken = (data) => {
  const accessToken = jwt.sign(
    {
      id: data?.id,
      email: data?.email,
      role: data?.role || "R3",
    },
    jwtSecret,
    {
      expiresIn: "5d",
    }
  );
  return { accessToken };
};

export const register = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { email },
        defaults: {
          email,
          password: hashPassword(password),
        },
      });
      const { accessToken } = generateToken(response[0]);
      resolve({
        msg: response[1] ? "Register success" : "Email do exists",
        data: response[0],
        accessToken,
      });
      console.log(response[0]);
    } catch (error) {
      reject(error);
    }
  });

export const login = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { email },
        raw: true,
      });
      if (!response) resolve({ msg: "Email do not exist" });

      const isChecked =
        response && bcrypt.compareSync(password, response.password);
      if (!isChecked)
        resolve({
          msg: "Email or password incorrect",
        });
      const { accessToken } = generateToken(response);
      resolve({
        msg: "Login success",
        data: response,
        accessToken,
      });
    } catch (error) {
      reject(error);
    }
  });
