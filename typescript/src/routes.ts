import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: "andre.zagatti1@gmail.com",
    password: "123",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      {
        title: "Javascript",
        experience: 100,
      },
    ],
  });

  return res.json({ message: "Hello World" });
}
