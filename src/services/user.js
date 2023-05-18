import db from "../models";

export const getUser = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findByPk(userId, {
        attributes: {
          exclude: ["password", "role"],
        },
        include: [
          {
            model: db.Role,
            as: "roleData",
            attributes: ["id", "code", "value"],
          },
        ],
      });
      resolve({
        msg: response ? "Get user success" : "User not found",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
