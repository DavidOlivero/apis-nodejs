import { UsersRepository } from "@/domain/const/users-repository.const";
import { hashPassword, comparePassword } from "@/core/authentication/crypto";
import { UserInfo } from "@/domain/types/user-database.type";
import { v4 } from "uuid";
import { UserErrorHandler } from "@/controlers/errors/user.error";

export class UserController {
  private userId: string | undefined = undefined;

  constructor(private userInfo: UserInfo) {
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

  public async checkUserCredentials(): Promise<boolean> {
    if (!this.userId) return false
    const user: UserInfo = UsersRepository[this.userId]
    const authenticationStatus = comparePassword(this.userInfo.password, user.password)
    const [_error, response] = await UserErrorHandler.comprobateCredentials(authenticationStatus)

    let result = false;
    if (response) result = response
    return result
  }

  private evaluateUser(): void {
    Object.entries(UsersRepository).forEach((value: [string, UserInfo]) => {
      if (this.userInfo.userName === value[1].userName) this.userId = value[0]
    })
  }
}

