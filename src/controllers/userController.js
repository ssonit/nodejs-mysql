import * as services from "../services";

const userController = {
  getUser: async (req, res) => {
    try {
      const { userId } = req.body;
      const response = await services.getUser(userId);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      return res.status(200).json({
        msg: "Delete user success",
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = userController;
