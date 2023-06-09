import { Op } from "sequelize";
import db from "../models";

// orderDirection = 'ASC' | 'DESC';
export const getBooks = ({ page, limit, orderName, orderDirection, query }) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries = {
        raw: true,
        nest: true,
      };
      if (query) {
        queries.where = {
          title: {
            [Op.substring]: query,
          },
        };
      }
      if (orderName && orderDirection) {
        // queries.order = [order]; ?order[]=title&order[]=DESC; => order = ['title', 'DESC']
        queries.order = [[orderName, orderDirection]];
      }
      queries.limit = limit && +limit > 0 ? +limit : 10;
      queries.offset = page && +page > 0 ? (+page - 1) * queries.limit : 0;

      const books = await db.Book.findAndCountAll({
        ...queries,
        attributes: {
          exclude: ["category_code"],
        },
        include: [
          {
            model: db.Category,
            as: "categoryData",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      resolve({
        msg: "Get books",
        data: books,
      });
    } catch (error) {
      reject(error);
    }
  });
