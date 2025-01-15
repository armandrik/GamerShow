import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../config/db";
import { useAuth } from "@/utils/auth";
import userModel from "../../../../models/User";

export async function POST(req: NextRequest) {
    try {
        connectedToDB()
        const body = await req.json()
        const { id } = body

        const user = await useAuth()
        if (!user) {
            return NextResponse.json({ message: "Unauthorized: user missing" }, { status: 401 })
        }

        // check if the product is already in the wishlist
        if (user.wishlist.includes(id)) {
            return NextResponse.json({ message: "Product already in wishlist" }, { status: 200 });
        }

        await userModel.findOneAndUpdate({ _id: user._id }, { $push: { wishlist: id } })

        return NextResponse.json({ message: "success" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "internal server error" }, { status: 500 })
    }
}

export async function GET(req: NextRequest) {
    try {

        connectedToDB()

        const user = await useAuth()
        if (!user) {
            return NextResponse.json({ message: "Unauthorized: user missing" }, { status: 401 })
        }

        const wishList = await userModel.findOne({ _id: user._id }, "wishlist").populate('wishlist')

        return NextResponse.json({ wishList }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "internal server error" }, { status: 500 })
    }
}

export async function PATCH(req: NextRequest) {
    try {
        connectedToDB()

        const body = await req.json()
        const { id } = body

        const user = await useAuth()
        if (!user) {
            return NextResponse.json({ message: "Unauthorized: user missing" }, { status: 401 })
        }

        const updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { $pull: { wishlist: id } }, { new: true })
        if (!updatedUser) {
            return NextResponse.json({ message: "User not found or wishlist update failed" }, { status: 404 });
        }

        console.log(updatedUser.wishlist)

        return NextResponse.json(
            { message: "Product removed from wishlist", wishlist: updatedUser.wishlist },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error in DELETE API:", error);
        return NextResponse.json({ message: "internal server error" }, { status: 500 })
    }
}