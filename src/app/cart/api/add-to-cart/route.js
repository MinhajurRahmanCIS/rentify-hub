import { connectDB } from "@/lib/connectDB";


export const POST = async (request) => {
   
    const addToCard = await request.json();

    const db = await connectDB();
    const cartCollection = await db.collection('cart');

    const cartExits = await cartCollection.findOne({ serviceId: addToCard.serviceId, email: addToCard.email });

   

    if (cartExits) {
        return Response.json({ message: "Already Added In Cart!", status: 500 });
    }

    try {
        const cart = await cartCollection.insertOne(addToCard);
        return Response.json({ message: "Add To Cart", status: 200 });
    } catch (error) {
        console.log(error)
    }
}