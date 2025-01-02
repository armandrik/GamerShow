import { NextRequest } from "next/server";
import connectedToDB from "../../../../../config/db";
import { generateAccessToken, hashPassword, isValidEmail } from "@/utils/auth";
import userModel from "../../../../../models/User";

type bodyPayloadType = {
  username: string;
  email: string;
  password: string;
};

export async function POST(req: NextRequest): Promise<Response> {
  try {
    connectedToDB();

    const body: bodyPayloadType = await req.json();
    const { username, email, password } = body;

    //check if input are empty
    if (!username || !email || !password)
      return Response.json({ message: "invalid data" }, { status: 400 });

    //check if user already exist in db
    const isUserExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserExist)
      return Response.json({ message: "user already exist" }, { status: 422 });

    //check their validation
    if (username.length < 3 || password.length < 8)
      return Response.json(
        { message: "username or password length is incorrect" },
        { status: 400 }
      );

    //check email validation
    if (!isValidEmail(email))
      return Response.json(
        { message: "invalid email format" },
        { status: 400 }
      );

    //hash password
    const hashedPassword: String = await hashPassword(password);

    //generate token
    const AccessToken: String = generateAccessToken(email);

    // Determine role
    const users = await userModel.find({});
    const role: "USER" | "ADMIN" = users.length > 0 ? "USER" : "ADMIN";

    //create user
    await userModel.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    return Response.json(
      { message: "success response" },
      {
        status: 201,
        headers: { "Set-Cookie": `token=${AccessToken};path=/;httpOnly=true` },
      }
    );
  } catch (error) {
    console.log("internal server error", error);
    return Response.json({ message: "internal server error" }, { status: 500 });
  }
}