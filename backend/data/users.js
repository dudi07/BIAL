import bcrypt from "bcryptjs";
const users = [
  {
    name: "Ram Joshi",
    email: "ramjoshi23@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Nakul",
    email: "nakul@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "raman Joshi",
    email: "rami23@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Joshi",
    email: "joshi23@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Santosh",
    email: "santoshi23@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John",
    email: "john23@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Josehph",
    email: "Josehph23@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Kumar",
    email: "kumar23@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ilya",
    email: "rIlyaamjoshi23@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Raymond",
    email: "raymondhi23@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
