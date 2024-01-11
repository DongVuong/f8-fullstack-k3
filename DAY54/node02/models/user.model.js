const sql = require("../utils/db");
module.exports = {
  all: (status, keyword) => {
    let filter = sql`WHERE id IS NOT NULL `;
    if (status === "active" || status === "inactive") {
      filter = sql`${filter} AND status = ${status === "active"} `;
    }
    if (keyword) {
      filter = sql`${filter} AND LOWER(email) like ${`%${keyword.toLowerCase()}%`}`;
    }

    return sql`SELECT * FROM users ${filter} ORDER BY created_at DESC, updated_at DESC`;
  },
  existEmail: (email) => {
    return sql`SELECT id FROM users WHERE email=${email}`;
  },
  createUser: (body) => {
    if (body.status === "1") {
      body.status = true;
    } else {
      body.status = false;
    }
    const value = sql`${body.name},${body.email},${body.status}`;
    return sql`INSERT INTO users(name,email,status) VALUES(${value})`;
  },
  getUpdate: (userId) => {
    return sql`SELECT name,email,status FROM users WHERE id = ${userId}`;
  },
  update: (userId, { name, email, status }) => {
    if (status === "1") {
      status = true;
    } else {
      status = false;
    }
    return sql`UPDATE users SET name = ${name}, email = ${email}, status = ${status} WHERE id = ${userId}`;
  },
  deleteUser: (userId) => {
    return sql`DELETE FROM users WHERE id = ${userId}`;
  },
};
