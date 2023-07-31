import { NextResponse } from "next/server";
import connect from "@/models/Post";
import Post from "@/models/Post";

export const GET = async(request) => {
    //fetch
    //return new NextResponse("Its work fine", {status:200});
    try{
        await connect();
        const posts = await Post.find();
        //const posts = await Post.find(username && { username});
        return new NextResponse(JSON.stringify(posts), {status:200})

    }catch{
        return new NextResponse("Database Error", {status:500});
    }
    
};