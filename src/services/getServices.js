import { connectDB } from "@/lib/connectDB";

export const getServices = async () => {
    try {
        const db = await connectDB();
        const servicesCollection = db.collection('services');
        const services = await servicesCollection.find().toArray();
        // Serialize to ensure it matches the previous JSON response format and avoids Client Component serialization issues
        return JSON.parse(JSON.stringify(services));
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
};

export const getServicesDetails = async (id) => {
    try {
        const db = await connectDB();
        const servicesCollection = db.collection('services');
        const service = await servicesCollection.findOne({ _id: id });
        return JSON.parse(JSON.stringify(service));
    } catch (error) {
        console.error("Error fetching service details:", error);
        return null;
    }
};
