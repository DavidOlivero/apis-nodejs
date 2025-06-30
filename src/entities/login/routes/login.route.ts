import { Request, Response } from "express";
import { app } from "@/app";
import { UserInfo } from "@/domain/types/user-database.type";
import { LoginResponse } from "@/domain/types/login-response.type";
import { UserController } from "@/controlers/user";
import jwt from "jsonwebtoken";

// Logear el usuario para general un JWT
app.post('/login', (req: Request<{}, {}, UserInfo>, res: Response<LoginResponse>): void => {
  console.log('Se logió, si señor')
  const userSetup = new UserController({ userName: req.body.userName, password: req.body.password })
  const result = userSetup.checkUserCredentials()
  if (!result) res.status(401).json({ message: 'Invalid credentials' });
  else res.status(200).json({ token: jwt.sign({ userId: req.body.userName }, 'davidDev2025*') });
})
