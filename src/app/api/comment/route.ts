import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../config/db";
import commentModel from "../../../../models/Comments";
import ProductModel from "../../../../models/Product";
import { validateCommentInput } from "@/utils/helper";

export async function POST(req: NextRequest) {
    try {
        await connectedToDB()
        const bodyReq = await req.json()
        const { name, body, productID } = bodyReq

        // Validate the comment input
        const { valid, errors } = validateCommentInput(bodyReq);
        if (!valid) {
            return NextResponse.json({ message: "Validation errors", errors }, { status: 400 });
        }

        const comment = await commentModel.create({ name, body, productID })

        await ProductModel.findByIdAndUpdate({ _id: productID }, { $push: { comments: comment._id } })

        return NextResponse.json({ message: "comment add successfully", data: comment }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "internal server error" }, { status: 500 })

    }
}

export async function GET(req: NextRequest) {
    try {
        await connectedToDB()

        const comments = await commentModel.find({}, "-__v")

        if (comments.length === 0) {
            return NextResponse.json({ message: "database is empty" }, { status: 200 })
        }

        return NextResponse.json({ comments }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "internal server error" }, { status: 500 })
    }
}