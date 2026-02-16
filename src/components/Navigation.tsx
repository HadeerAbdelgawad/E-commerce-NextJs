import { auth } from "@/lib/auth"
import { searchProducts } from "../../lib/API/product.Api"
import Logo from "./logo"
import NavLink from "./NavLinks"
import Search from "./Search"
import Image from "next/image"
import UserAvatar from "./UserAvatar"
import { CiHeart } from "react-icons/ci";
import Link from "next/link"


interface Props {
    searchParams: {
        search: string
    }
}

interface NavLinkProps {
  href: string;
  name: string;
  children?: React.ReactNode;
  className?: string; 
}

async function Navigation() {
    const links = [
  { id: 'home', name: 'Home', href: '/' },
  { id: 'products', name: 'Products', href: '/products' },
  { id: 'categories', name: 'Categories', href: '/categories' },
  { id: 'cart', name: 'Cart', href: '/cart' },
  { id: 'wishlist', name: 'Wishlist', href: '/wishlist' },
]

    const session = await auth();
    const nav = [...links]

    if (session) {
        nav.push({id:'logout', name: 'logout', href: '/api/auth/signout' })
    } if (!session) {
        nav.push({id:'login', name: 'login', href: '/signin' })
    }

    console.log(nav);


    return (
        <nav className="w-[95%] max-w-6xl rounded-2xl px-4 py-3 mx-auto bg-black/40 backdrop-blur-md border border-white/10 shadow-lg z-50 sm:fixed sm:top-4 sm:left-1/2 sm:transform sm:-translate-x-1/2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Logo />
                    <span className="text-white font-semibold select-none">Our Market</span>
                </div>

                <div className="hidden sm:flex items-center gap-4">
                    {nav.map(link => (
                        <NavLink key={link.id} href={link.href} name={link.name} />
                    ))}
                    <div>
                        <Search />
                    </div>
                    <Link href="/userProfile" className="relative w-10 h-10">
                        {session?.user && (
                            <UserAvatar src={session.user.image}/>
                        )}
                    </Link>
                </div>

                {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

                <div className="sm:hidden w-full">
                    <details className="relative">
                        <summary className="list-none flex items-center gap-2 p-2 rounded-md text-white hover:bg-white/10 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </summary>

                        <div className="mt-2 w-full rounded-md bg-black/40 backdrop-blur-sm border border-white/10 p-3 flex flex-col gap-2">
                            {nav.map(link => (
                                <NavLink key={link.name} href={link.href} name={link.name} />
                            ))}

                            <div>
                                <Search />
                            </div>

                            <div className="relative w-8 h-8">
                                {session?.user && (
                                    <UserAvatar src={session.user.image}/>
                                )}
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
