import React from "react";
import BackgroundImage from "@/public/login_background.jpg"
import Image from "next/image";

export default function AuthLayout ({children} : {children : React.ReactNode}) {
    return(
        <div className={'relative flex h-screen w-screen flex-col items-center justify-center md:bg-transparent'}>
            <Image src={BackgroundImage} alt={'picture'} className={'flex object-cover -z-10 h-screen w-screen brightness-50'} priority fill />
            {children}
        </div>
    )
}