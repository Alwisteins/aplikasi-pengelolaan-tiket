import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

type User = {
  email: string;
  password: string;
  role: string;
};

type Users = User[];

export const users: Users = [
  {
    email: process.env.EMAIL as string,
    password: process.env.GUEST_PW as string,
    role: "guest",
  },
  {
    email: process.env.EMAIL as string,
    password: process.env.ADMIN_PW as string,
    role: "Admin",
  },
];
