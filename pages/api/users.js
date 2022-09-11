//  users.js

import DB from "./includes/DB";

export default async function users(req, res) {
  let status = 200;

  const result = await new Promise((resolve, reject) => {
    DB.query(
      `SELECT DISTINCT user_id, user_name, user_email, user_createddate FROM tbl_users WHERE user_email='${req.body.useremail}' AND user_password='${req.body.userpass}'`,
      function (err, res) {
        if (err) return reject(err);
        resolve(res);
      }
    );
  });

  if (result.length !== 0) {
    status = 200;
  } else {
    status = 400;
  }

  res.status(status).json({ status: status, message: result });
}
