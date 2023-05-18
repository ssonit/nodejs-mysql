import * as services from "../services";

const bookController = {
  getBooks: async (req, res) => {
    try {
      const response = await services.getBooks(req.query);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default bookController;
