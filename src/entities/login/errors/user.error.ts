export abstract class UserErrorHandler {
  public static async registerUserError(response: Promise<string>): Promise<[string, null] | [null, string]> {
    let erroHandler: [string, null] | [null, string];
    try {
      const hash = await response;
      erroHandler = [null, hash]
    } catch (error) {
      erroHandler = ['Asegúrese de que la contraseña ingresada sea un valor válido', null]
    }

    return erroHandler
  }
}
