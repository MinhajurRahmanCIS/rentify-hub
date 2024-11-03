import { connectDB } from "@/lib/connectDB"

export const GET = async (request, { params }) => {
    const { id } = await params; //params need to be await
    const db = await connectDB();
    const servicesCollection = await db.collection('services');
    try {
        const service = await servicesCollection.findOne({ _id: id });
        return Response.json(service);
    } catch (error) {
        console.log(error)
    }
}