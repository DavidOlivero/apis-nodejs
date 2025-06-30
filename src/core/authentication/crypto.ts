import bcrypt from "bcrypt";

export const hashPassword = async (plainText: string): Promise<string> => {
  return await bcrypt.hash(plainText, 10)
}

export const comparePassword = (plainText: string, hashPassword: string, done: (err: Error | undefined, same: boolean) => void): void => {
  bcrypt.compare(plainText, hashPassword, done)
}
