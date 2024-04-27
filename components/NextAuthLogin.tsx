"use client"
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import Image from "next/image";
import googleIcon from "@/public/google.svg"
import {signIn} from "next-auth/react";

export default function NextAuthLogin () {
    return(
        <div className={'flex w-full justify-center items-center gap-x-3 mt-6'}>
            <Button onClick={()=> signIn('github')} size={'icon'} variant={'outline'}>
                <Github className={'w-4 h-4'} />
            </Button>
            <Button onClick={()=>signIn("google")} size={'icon'} variant={'outline'}>
                <Image src={googleIcon} alt={'google'} />
            </Button>
        </div>
    )
}