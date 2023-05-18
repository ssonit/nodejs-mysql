import db from "../models";
import data from "../../data/data.json";
import { generateCode } from "../helpers/fn";

async function insertCategory(value) {
  await db.Category.create({
    code: generateCode(value),
    value,
  });
}

export const insertData = () =>
  new Promise(async (resolve, reject) => {
    try {
      //   const categories = Object.keys(data);
      //   categories.forEach((item) => insertCategory(item));

      //   const dataArr = Object.entries(data);
      //   dataArr.forEach((item) => {
      //     item[1].forEach(async (book) => {
      //       await db.Book.create({
      //         id: book.upc,
      //         title: book.bookTitle,
      //         price: +book.bookPrice,
      //         available: +book.available,
      //         desc: book.bookDescription,
      //         imageUrl: book.imageUrl,
      //         category_code: item[0],
      //       });
      //     });
      //   });

      resolve("oke");
    } catch (error) {
      reject(error);
    }
  });
