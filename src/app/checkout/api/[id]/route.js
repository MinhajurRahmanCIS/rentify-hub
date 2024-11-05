import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
    const booking = await request.json();
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    try {
        const newBooking = await bookingCollection.insertOne(data);
        return Response.json({ message: "Checkout Successfully", status: 200 });
    } catch (error) {
        console.log(error)
    }
}