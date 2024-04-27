"use client"
import Logo from "@/public/netflix_logo.svg"
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Bell, Search} from "lucide-react";
import {useSession} from "next-auth/react";
import UserNav from "@/components/UserNav";

interface LinkProps {
    name : string,
    href : string
}

const links : LinkProps[] = [
    {name : "Home", href : "/"},
    {name : "Tv Shows", href : "/shows"},
    {name : "Movies", href : "/movies"},
    {name : "Recently Added", href : "/recently"},
]

export default function HeaderLayout() {
    const pathName = usePathname();
    const { data: session, status } = useSession();

    return (
        <div className="fixed w-full top-0 left-0 items-center justify-between py-8 px-8 flex z-50">
            <div className="flex items-center justify-center">
                <Link href={"/"}>
                    <Image src={Logo} alt={"logo"} priority width={120} height={120} />
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathName === link.href ? (
                                <li>
                                    <Link
                                        href={`/home/${link.href}`}
                                        className="text-white font-semibold underline text-lg"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link
                                        className="text-gray-300 font-normal text-lg"
                                        href={`/home/${link.href}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-x-8">
                <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
                <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
                {status === "authenticated" && session && (
                    <UserNav/>
                )}
            </div>
        </div>
    );
}
