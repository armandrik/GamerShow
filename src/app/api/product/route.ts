import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../config/db";
import ProductModel from "../../../../models/Product";
import { validateProductInput } from "@/utils/helper";

export async function POST(req: NextRequest) {
    try {
        await connectedToDB()
        const body = await req.json()
        const { image, name, price, released, averagePlayTime, score, genre, store, platform, metaScore, screenshots, about, tags, requirements } = body

        // Validate the product input
        const { valid, errors } = validateProductInput(body);
        if (!valid) {
            return NextResponse.json({ message: "Validation errors", errors }, { status: 400 });
        }

        const product = await ProductModel.create({ image, name, price, released, averagePlayTime, score, genre, store, platform, metaScore, screenshots, about, tags, requirements })

        return NextResponse.json({ message: 'Game successfully added', data: product }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'internal server error' }, { status: 500 })
    }

}

export async function GET() {
    try {
        // Ensure the database connection
        await connectedToDB();

        // Fetch all products and exclude unnecessary fields
        const products = await ProductModel.find({}, "-__v");

        if (products.length === 0) {
            return NextResponse.json({ message: "database is empty" }, { status: 200 })
        }

        // Return the response
        return NextResponse.json({ data: products }, { status: 200 });
    } catch (error) {
        console.error("Error fetching products:", error);
        // Handle errors gracefully
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}