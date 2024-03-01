import {authOptions} from "@/utils/authOptions"
import {getServerSession} from "next-auth"

export default async function getSessionUser() {
    try {
        const session = await getServerSession(authOptions)

        if (!session || !session.user) {
            return null
        }

        return {
            user: session.user,
            userId: session.user.id
        }
    } catch (error) {
        console.error(error)

        return null
    }
}