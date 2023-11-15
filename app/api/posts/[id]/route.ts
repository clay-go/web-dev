import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/db";
import Post from "@/models/post";

export async function GET(req, { params: { id } }) {
  try {
    const dbConnection = await connectToDB();
    const PostModel = await Post.findOne({
      number: id,
    });

    if (!PostModel) {
      return NextResponse.error(new Error("No post found"));
    }

    return NextResponse.json(PostModel);
  } catch (error) {
    console.log(error);
    return NextResponse.error(new Error("Error fetching post"));
  }
}
