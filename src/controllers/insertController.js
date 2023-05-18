import * as services from "../services";

const insertController = {
  insert: async (req, res) => {
    try {
      const response = await services.insertData();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default insertController;
