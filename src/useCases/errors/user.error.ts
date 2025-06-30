export abstract class UserErrorHandler {
  public static async registerUserError(response: Promise<string>): Promise<[string, null] | [null, string]> {
    let errorHandler: [string, null] | [null, string];
    try {
      const hash = await response;
      errorHandler = [null, hash]
    } catch (error) {
      errorHandler = ['Asegúrese de que la contraseña ingresada sea un valor válido', null]
    }

    return errorHandler
  }

  public static async comprobateCredentials(response: Promise<boolean>): Promise<[string, null] | [null, boolean]> {
    let errorHandler: [string, null] | [null, boolean];
    try {
      const credentialsStatus: boolean = await response;
      errorHandler = [null, credentialsStatus]
    } catch (error) {
      errorHandler = ['Los datos de autenticación no son correctos', null]
    }

    return errorHandler
  }
}
