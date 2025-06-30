import { UsersRepository } from "../domain/const/users-repository.const";
import { hashPassword, comparePassword } from "../core/authentication/crypto";
import { UserInfo } from "../domain/types/user-database.type";
import { v4 } from "uuid";
import { UserErrorHandler } from "../entities/login/errors/user.error";

export class UserController {
  private userId: string | undefined = undefined;

  constructor(private userInfo: UserInfo) {
    console.log('Hola')
    this.evaluateUser()
  }

  public async registerUser(): Promise<void> {
    const hashPass = hashPassword(this.userInfo.password)
    const [_error, response] = await UserErrorHandler.registerUserError(hashPass)

    if (response) {
      UsersRepository[v4()] = {
        userName: this.userInfo.userName,
        password: response
      }
    }
  }

  public checkUserCredentials(): boolean {
    if (!this.userId) return false
    const user: UserInfo = UsersRepository[this.userId]
    let resutl = false
    comparePassword(this.userInfo.password, user.password, (err, sameSalt) => {
      if (!err) resutl = sameSalt
    })

    return resutl
  }

  private evaluateUser(): void {
    Object.entries(UsersRepository).forEach((value: [string, UserInfo]) => {
      if (this.userInfo.userName === value[1].userName) this.userId = value[0]
    })
  }
}

