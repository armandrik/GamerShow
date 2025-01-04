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


// Helper function for email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@(gmail|yahoo|outlook|hotmail|icloud|aol|protonmail|zoho|gmx|yandex)\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

// Helper function for email validation
export function isValidUserName(username: string): boolean {
  const usernameRegex = /^[a-zA-Z0-9_-]{3,15}$/;
  return usernameRegex.test(username);
}

// Helper function for email validation
export function isValidPassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  return passwordRegex.test(password);
}
