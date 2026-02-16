"use server"
import { signIn } from "@/lib/auth";

export async function  signinAction(formData: FormData) {
        const provider = formData.get('provider') as string;
    await signIn(provider, {redirectTo:'/products'})
}