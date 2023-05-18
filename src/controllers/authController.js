import { schemaAuth } from "../helpers/schema";
import { badRequest, internalServerError } from "../middlewares/handleErrors";
import * as services from "../services";

const authController = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({
          msg: "Email or password incorrect",
        });
      const response = await services.register(req.body);
      // console.log(response);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const { error } = schemaAuth.validate(req.body);
      if (error) return badRequest(error.details[0]?.message, res);
      const response = await services.login(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return internalServerError(res);
    }
  },
};

export default authController;
