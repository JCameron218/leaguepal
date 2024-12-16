export const GET = async () => {
    return Response.json({
        message: "Welcome to the About Page",
        version: "1.0.0"
    });
};