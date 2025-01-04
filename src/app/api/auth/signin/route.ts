import { NextRequest } from "next/server";
import connectedToDB from "../../../../../config/db";
import userModel from "../../../../../models/User";
import { generateAccessToken, isValidEmail, isValidPassword, isValidUserName, verifyPassword } from "@/utils/auth";

type bodyPayloadType = {
    identifire: string,
    password: string
}

export async function POST(req: NextRequest): Promise<Response> {

    connectedToDB()

    const body: bodyPayloadType = await req.json()
    const { identifire, password } = body

    //check if the entities are empty
    if (!identifire || !password) return Response.json({ message: "empty value respponse" }, { status: 400 })

    //check identifire validation
    if (!isValidUserName(identifire) && !isValidEmail(identifire))
        return Response.json(
            { message: "invalid identifire format" },
            { status: 400 }
        );

    //check password validation
    if (!isValidPassword(password))
        return Response.json(
            { message: "invalid password format" },
            { status: 400 }
        );

    try {
        //check if this user exist in db
        const user = await userModel.findOne({ $or: [{ username: identifire }, { email: identifire }] })
        if (!user) return Response.json({ message: "user not found" }, { status: 404 })

        //check the password to see if its correct or not
        const isPasswordCorrect = await verifyPassword(password, user.password)
        if (!isPasswordCorrect) return Response.json({ message: "password or username are not correct" }, { status: 401 })

        const accessToken: String = generateAccessToken(user.email)

        return Response.json(
            { message: "signed in successfully" },
            {
                status: 201,
                headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;Secure;SameSite=Strict` },
            }
        );
    } catch (error) {
        console.log(error)
        return Response.json({ message: "internal server error" }, { status: 500 })
    }
}