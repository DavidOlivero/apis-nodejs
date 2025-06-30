import router from "@/entities/router";
import { userLogin } from "../controlers/user-login.controler";

router.route('/auth')

router.route('/login')
  .post(userLogin)

