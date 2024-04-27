import AuthLoginForm from "@/components/AuthLoginForm";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function LoginPage() {
    const session = await getServerSession(authOptions)

    if(session)
        return redirect('/')

    return (
        <div className={'mt-24 min-w-[300px] rounded bg-black/80 py-10 px-6 md:mt-0 md:min-w-[500px] md:px-10'}>
            <h1 className={'text-3xl font-semibold text-white text-center mb-10'}>Login</h1>
            <AuthLoginForm/>
        </div>
    )
}