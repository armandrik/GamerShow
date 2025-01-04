export async function GET(): Promise<Response> {
    try {
        const token = `token=; Path=/; Max-Age=0; HttpOnly;Secure;SameSite=Strict`;
        return Response.json({ message: "user sign out" }, {
            status: 200,
            headers: { "Set-Cookie": token }
        })
    } catch (error) {
        console.log('error', error)
        return Response.json({ message: 'internal server error' }, { status: 500 })
    }
}