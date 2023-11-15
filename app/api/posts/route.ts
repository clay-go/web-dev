import { NextResponse } from "next/server";
import Post from "@/models/post";
import { connectToDB } from "@/utils/db";

export async function GET(req) {
  const dbConnection = await connectToDB();
  try {
    const PostModel = await Post.find();
    if (!PostModel) {
      return NextResponse.error(new Error("No posts found"));
    }
    return NextResponse.json(PostModel);
  } catch (error) {
    return NextResponse.error(new Error("Error fetching posts"));
  }
}
