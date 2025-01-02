import { compare, hash } from "bcrypt";
import { sign, verify } from "jsonwebtoken";

//hash user password => signup
export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

//verify user passwod =? signin
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const isPasswordValid = await compare(password, hashedPassword);
  return isPasswordValid;
}

//give user a uniqe token => signup + signin
export function generateAccessToken(data: string) {
  //check if private key is exist
  const accessTokenSecretKey = process.env.ACCESS_TOKEN_SECRET_KEY;
  if (!accessTokenSecretKey)
    throw new Error(
      "ACCESS_TOKEN_SECRET_KEY environment variable is not defined."
    );

  const token = sign({ data }, accessTokenSecretKey, { expiresIn: "60s" });
  return token;
}

//check is user token is valid or not
export function verifyAccessToken(token: string) {
  try {
    //check if private key is exist
    const accessTokenSecretKey = process.env.ACCESS_TOKEN_SECRET_KEY;
    if (!accessTokenSecretKey)
      throw new Error(
        "ACCESS_TOKEN_SECRET_KEY environment variable is not defined."
      );

    const tokenPayload = verify(token, accessTokenSecretKey);
    return tokenPayload;
  } catch (error) {
    console.log("verify token gose wrong", error);
    return false;
  }
}

//generate a new token for user
export function generateRefreshToken(data: string): string {
  //check if private key is exist
  const accessTokenSecretKey = process.env.REFRESH_TOKEN_SECRET_KEY;
  if (!accessTokenSecretKey)
    throw new Error(
      "ACCESS_TOKEN_SECRET_KEY environment variable is not defined."
    );

  const token = sign({ data }, accessTokenSecretKey, { expiresIn: "15d" });
  return token;
}

// Helper function for email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
