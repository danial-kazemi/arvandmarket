
import dbConnect from "@/app/lib/dbConnect"
import User from "@/app/models/User";
import { NextResponse } from "next/server";
export async function GET(){
    await dbConnect();
try {
    const user = await User.find();
    console.log(user);    
        return  NextResponse.json(user)
} catch (error) {
    return NextResponse.json({error: error.message})
}

}