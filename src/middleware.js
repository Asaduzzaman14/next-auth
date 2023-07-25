
export { default } from "next-auth/middleware"


export const config = { matcher: ['/profile'] }


export const authOptions = {
    providers: [],
    pages: {
        signIn: "/loign"
    }
} 