import { Router } from "express";
import { userLogin } from "../controlers/auth-login.controler";

const authenticationRouting = Router()
authenticationRouting.route('/')

authenticationRouting.post('/login', userLogin)

export default authenticationRouting
