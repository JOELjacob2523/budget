require("dotenv").config();
const { knex } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = { createClient };

// create user
async function createClient(
  first_name,
  last_name,
  address1,
  address2,
  state,
  city,
  zip_code,
  primary_phone,
  cell1,
  cell2,
  email,
  password_hash
) {
  // Check if email already exists
  const user = await knex("clients").where("email", email).first();
  if (user) {
    throw new Error("Username already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password_hash, 8);

  // Create user
  const payload = {
    first_name: first_name,
    last_name: last_name,
    address1: address1,
    address: address2,
    state: state,
    city: city,
    zip_code: zip_code,
    primary_phone: primary_phone,
    cell1: cell1,
    cell2: cell2,
    email: email,
    password_hash: hashedPassword,
    role: "User",
  };

  // Create token
  const token = jwt.sign(payload, SECRET_KEY);

  // Insert user into database
  await knex("clients").insert({
    first_name,
    last_name,
    address1,
    address2,
    state,
    city,
    zip_code,
    primary_phone,
    cell1,
    cell2,
    email,
    password_hash: hashedPassword,
    token,
    role: "User",
  });
}
