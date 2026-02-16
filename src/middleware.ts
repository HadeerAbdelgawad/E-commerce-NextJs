import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";


export const middleware= auth
// export function middleware(request: Request){
//     return NextResponse.redirect(
//         new URL('/products', request.url)
//     )

// }

export const config={
    matcher:'/cart'
}
