import jwt from "jsonwebtoken";
import { badRequest, notAuth } from "./handleErrors";
import { jwtSecret } from "../utils/constants";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return badRequest("Require authorization", res);
  const accessToken = token.split(" ")[1];
  jwt.verify(accessToken, jwtSecret, (err, decode) => {
    if (err) return notAuth("Token may be invalid", res);
    req.user = decode;
    next();
  });
};

export default verifyToken;
