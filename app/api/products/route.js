import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function GET() {
    try {
        const client = new MongoClient('mongodb://127.0.0.1:27017/myShop');
        await client.connect();
        const db = client.db()
        const products = await db.collection('products').find().toArray();               
       return NextResponse.json({products});
    } catch (error) {
        console.log('we have some error', error);
        
    }

}