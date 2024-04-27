"use client"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import Link from "next/link";
import NextAuthLogin from "@/components/NextAuthLogin";
import {redirect} from "next/navigation";

const formSchema = z.object({
    email: z.string().email("enter a valid email"),
    password : z.string().min(4)
})

export default function AuthSignupForm () {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password : ""
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className={''}>
                            <FormLabel className={'text-gray-400 text-2xl'}>Email</FormLabel>
                            <FormControl>
                                <Input className={'w-full'} placeholder="Enter You're Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={'text-gray-400 text-2xl'}>Password</FormLabel>
                            <FormControl>
                                <Input className={'w-full'} placeholder="Enter You're Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className={'w-full rounded text-xl'} type="submit">Submit</Button>
            </form>
            <div className={'text-sm text-gray-500 mt-5'}>
                Already have an account <Link className={'text-white hover:underline ml-1 text-lg'} href={'/login'}>Log in Now</Link>
            </div>
            <NextAuthLogin />
        </Form>
    )
}