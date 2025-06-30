import { UserController } from "@/useCases/user";
import { LoginResponse } from "@/domain/types/login-response.type";
import { UserInfo } from "@/domain/types/user-database.type";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const userLogin = async (req: Request<{}, {}, UserInfo>, res: Response<LoginResponse>): Promise<void> => { // -> Request<Params: Tipo de los parámetros esperador por URL, ResBody Tipo de respuesta por body, ReqBody: Tipo de lo esparado por body, Query: Tipo esperado por query>
  const userSetup = new UserController({ userName: req.body.userName, password: req.body.password })
  const result = await userSetup.checkUserCredentials()
  if (!result) res.status(401).json({ message: 'Invalid credentials' });
  else res.status(200).json({ token: jwt.sign({ userId: req.body.userName }, req.body.password) });
}
