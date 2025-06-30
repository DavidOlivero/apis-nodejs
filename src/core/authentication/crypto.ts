import bcrypt from "bcrypt";

export const hashPassword = async (plainText: string): Promise<string> => {
  return await bcrypt.hash(plainText, 10)
}

export const comparePassword = async (plainText: string, hashPassword: string): Promise<boolean> => {
  return await bcrypt.compare(plainText, hashPassword)
}
