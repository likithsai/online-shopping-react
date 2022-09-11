import DB from "./includes/db";
import settings from "../../data/settings";

export default function dbConfig(req, res) {
  DB.connect((err) => {
    if (err) throw err;

    //  execute query
    settings.server[0].dbqueries.map((itm, ind) => {
      DB.query(itm.query);
    });
  });

  res.status(200).json({ status: 200, message: "database config success" });
}
