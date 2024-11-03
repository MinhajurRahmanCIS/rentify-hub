export const getServices = async () => {
    const res = await fetch("http://localhost:3000/services/api/get-all");
    const services = res.json();
    return services;
};

export const getServicesDetails = async (id) => {
    console.log(id)
    const res = await fetch(`http://localhost:3000/services/api/${id}`);
    const services = res.json();
    return services;
};
